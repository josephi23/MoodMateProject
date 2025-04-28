import Layout from './Layout';
import { useState, useEffect } from 'react';

// ✨ Mood to Emoji mapping function
function getMoodIcon(mood) {
  mood = mood.toLowerCase().trim();
  switch (mood) {
    case "happy":
      return "😀";
    case "sad":
      return "😔";
    case "angry":
      return "😡";
    case "excited":
      return "😃";
    case "tired":
      return "😴";
    case "anxious":
      return "😰";
    case "grateful":
      return "🙏";
    case "stressed":
      return "😫";
    default:
      return "📝"; // Default emoji for any other mood
  }
}

function Dashboard() {
  const [quote, setQuote] = useState("");
  const [moods, setMoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState(""); // 🆕 Selected mood

  const quotes = [
    "Believe you can and you're halfway there.",
    "You are stronger than you think.",
    "Small steps every day lead to big changes.",
    "Happiness is a journey, not a destination.",
    "Keep going. Everything you need will come to you.",
    "Your feelings are valid. Take it one day at a time.",
    "Positive thoughts lead to positive outcomes.",
    "Focus on the good and the good gets better."
  ];

  // Fetch moods and random motivational quote
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);

    // 🆕 Fetch moods from backend
    fetch("http://localhost:3000/moods")
      .then((res) => res.json())
      .then((data) => setMoods(data.reverse())) // Reverse to show most recent first
      .catch((err) => console.error('Error fetching moods:', err));
  }, []);

  // 🆕 Filter moods by selectedMood
  const filteredMoods = selectedMood
    ? moods.filter((mood) => mood.entry.toLowerCase().includes(selectedMood.toLowerCase()))
    : moods;

  return (
    <Layout>
      <div style={{ backgroundColor: '#3498db', minHeight: '100vh', padding: '20px' }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5em", marginBottom: "20px", color: "#fff" }}>
          DASHBOARD 🏠
        </h2>

        {/* Motivational Quote */}
        <p style={{ 
          textAlign: "center", 
          fontStyle: "italic", 
          fontSize: "1.3em", 
          marginBottom: "30px", 
          color: "#fff" 
        }}>
          "{quote}"
        </p>

        {/* Welcome Message */}
        <p style={{ textAlign: "center", color: "#fff", fontSize: "1.2em" }}>
          Welcome to MOODMATE: Track your moods and reflections here.
        </p>

        {/* 🆕 Mood Filter Dropdown */}
        <div style={{ textAlign: "center", margin: "20px" }}>
          <select 
            value={selectedMood}
            onChange={(e) => setSelectedMood(e.target.value)}
            style={{
              padding: "10px", 
              fontSize: "1.2em", 
              borderRadius: "5px", 
              border: "none", 
              backgroundColor: "#fff", 
              color: "#3498db",
              cursor: "pointer"
            }}
          >
            <option value="">All Moods</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="stressed">Stressed</option>
            <option value="excited">Excited</option>
            {/* You can add more moods here */}
          </select>
        </div>

        {/* 🆕 Show Filtered Moods with Emoji */}
        <ul style={{ listStyleType: "none", padding: 0, textAlign: "center", color: "#fff" }}>
          {filteredMoods.map((mood) => (
            <li 
              key={mood.id} 
              style={{
                marginBottom: "20px", 
                padding: "15px", 
                borderRadius: "10px", 
                backgroundColor: "#fff", 
                color: "#3498db", 
                fontSize: "1.2em", 
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
                width: "60%", 
                margin: "10px auto"
              }}
            >
              {getMoodIcon(mood.entry)} {mood.entry} - {new Date(mood.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default Dashboard;
