import { useState } from 'react';

function MoodLog() {
  const [mood, setMood] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/moods', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mood, date: new Date().toISOString() }),
    })
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error: ' + err.message));
  };

  return (
    <div>
      <h2>MOOD LOG 😊</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="Enter your mood"
          required
        />
        <button type="submit">Log Mood</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default MoodLog;