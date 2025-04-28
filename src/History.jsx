import { useEffect, useState } from 'react';
import Layout from './Layout';

function formatDate(dateString) {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const moodDate = new Date(dateString);

  if (moodDate.toDateString() === today.toDateString()) {
    return "Today";
  } else if (moodDate.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  } else {
    return moodDate.toLocaleDateString();
  }
}

// Function to get emoji based on mood
function getMoodIcon(mood) {
  mood = mood.toLowerCase();
  if (mood.includes("happy")) return "😀";
  if (mood.includes("sad")) return "😔";
  if (mood.includes("angry")) return "😡";
  if (mood.includes("excited")) return "😃";
  if (mood.includes("tired")) return "😴";
  if (mood.includes("anxious")) return "😰";
  if (mood.includes("grateful")) return "🙏";
  if (mood.includes("stressed")) return "😫";
  return "📝"; // Default emoji
}

function History() {
  const [moods, setMoods] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/moods')
      .then(res => res.json())
      .then(data => setMoods(data.reverse()))
      .catch(err => console.error('Error fetching moods:', err));
  }, []);

  function handleDeleteMood(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this mood?");
    if (confirmDelete) {
      fetch(`http://localhost:3000/moods/${id}`, {
        method: 'DELETE',
      })
      .then(res => {
        if (res.ok) {
          setMoods(prevMoods => prevMoods.filter(mood => mood.id !== id));
        } else {
          console.error('Failed to delete mood');
        }
      })
      .catch(err => console.error('Error deleting mood:', err));
    }
  }

  return (
    <Layout>
      {/* Dark Mode Toggle Button */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "10px 20px",
            fontSize: "1em",
            cursor: "pointer",
            borderRadius: "8px",
            backgroundColor: darkMode ? "#333" : "#eee",
            color: darkMode ? "#fff" : "#000",
            border: "1px solid #ccc",
          }}
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      {/* HISTORY Title */}
      <h2 style={{ 
        textAlign: "center", 
        fontSize: "2em", 
        marginBottom: "20px",
        color: darkMode ? "#f0f0f0" : "#222"
      }}>
        HISTORY 📜
      </h2>

      {/* Mood List */}
      <ul style={{ listStyleType: "none", padding: 0, textAlign: "center" }}>
        {moods.length === 0 ? (
          <p style={{ color: darkMode ? "#aaa" : "#666", fontStyle: "italic" }}>
            No moods yet. Start by logging how you feel!
          </p>
        ) : (
          moods.map((mood) => (
            <li 
              key={mood.id}
              style={{
                backgroundColor: darkMode ? "#444" : "#ffffff",
                margin: "10px auto",
                padding: "15px",
                borderRadius: "10px",
                maxWidth: "400px",
                boxShadow: darkMode 
                  ? "0 2px 8px rgba(255, 255, 255, 0.1)" 
                  : "0 2px 8px rgba(0, 0, 0, 0.1)",
                fontSize: "1.2em",
                textAlign: "center",
                color: darkMode ? "#f9f9f9" : "#333",
                position: "relative"
              }}
            >
              {getMoodIcon(mood.entry)} {mood.entry} - {formatDate(mood.date)}
              <br />
              {/* Delete button */}
              <button 
                onClick={() => handleDeleteMood(mood.id)}
                style={{
                  marginTop: "10px",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </Layout>
  );
}

export default History;
