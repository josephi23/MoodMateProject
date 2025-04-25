const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Add CORS to allow frontend requests
const cors = require('cors');
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5176'] // Allow both ports
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Define the /api endpoint
app.get('/api', (req, res) => {
  console.log('GET /api endpoint hit');
  res.json({ message: 'Welcome to MoodMate API!' });
});

// Define the /api/welcome endpoint to match frontend fetch
app.get('/api/welcome', (req, res) => {
  console.log('GET /api/welcome endpoint hit');
  res.json({ message: 'Welcome to MoodMate API!' });
});

// Connect to SQLite database
const db = new sqlite3.Database('./journal.db', (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Create journal table and insert a sample entry if the table is empty
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS journal (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    entry TEXT NOT NULL,
    date TEXT DEFAULT (datetime('now'))
  )`, (err) => {
    if (err) {
      console.error('Error creating journal table:', err.message);
      return;
    }

    db.get(`SELECT COUNT(*) as count FROM journal`, (err, row) => {
      if (err) {
        console.error('Error checking journal table:', err.message);
        return;
      }

      if (row.count === 0) {
        const sampleEntry = 'This is a sample journal entry to get you started!';
        db.run(`INSERT INTO journal (entry) VALUES (?)`, [sampleEntry], (err) => {
          if (err) {
            console.error('Error inserting sample entry:', err.message);
          } else {
            console.log('Sample journal entry inserted:', sampleEntry);
          }
        });
      } else {
        console.log('Journal table already contains entries, skipping sample insertion.');
      }
    });
  });
});

// GET route to retrieve all journal entries
app.get('/moods', (req, res) => {
  console.log('GET /moods endpoint hit');
  db.all(`SELECT * FROM journal`, [], (err, rows) => {
    if (err) {
      console.error('Error fetching journal entries:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// POST route to save a journal entry
app.post('/moods', (req, res) => {
  console.log('POST /moods endpoint hit:', req.body);
  const entry = req.body.entry; // Make sure the frontend sends 'entry', not 'mood'

  if (!entry) {
    return res.status(400).json({ error: 'Mood entry is required' });
  }

  db.run(`INSERT INTO journal (entry) VALUES (?)`, [entry], function(err) {
    if (err) {
      console.error('Error saving mood entry:', err.message);
      return res.status(500).json({ error: err.message });
    }
    // Respond with the newly inserted entry details (including the id and date)
    res.json({
      id: this.lastID,  // `this.lastID` gets the ID of the inserted row
      entry: entry,
      date: new Date().toISOString(), // Automatically set the date
    });
  });
});

// DELETE route to remove a journal entry by id
app.delete('/moods/:id', (req, res) => {
  const id = req.params.id;
  console.log(`DELETE /moods/${id} endpoint hit`);
  db.run(`DELETE FROM journal WHERE id = ?`, [id], function(err) {
    if (err) {
      console.error('Error deleting journal entry:', err.message);
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.json({ message: 'Entry deleted successfully' });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Gracefully close the database connection on server shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing SQLite database:', err.message);
    }
    console.log('SQLite database connection closed.');
    process.exit(0);
  });
});
