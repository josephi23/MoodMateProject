import { useEffect, useState } from "react";
import Layout from './Layout';

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/moods")
      .then((response) => response.json())
      .then((data) => setEntries(data.reverse())) // show most recent first
      .catch((error) => console.error("Error fetching entries:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEntry.trim()) return; // Prevent empty submissions

    fetch("http://localhost:3000/moods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ entry: newEntry }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEntries([{ id: data.id, entry: newEntry, date: new Date().toISOString() }, ...entries]);
        setNewEntry("");
      })
      .catch((error) => console.error("Error saving entry:", error));
  };

  return (
    <Layout>
      <div>
        <h2 style={{ textAlign: "center", fontSize: "2em", marginBottom: "20px" }}>
          JOURNAL 📝
        </h2>
        
        {/* Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
          <textarea
            placeholder="Add a reflection..."
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            maxLength={1000} // 🔥 Limit to 1000 characters
            style={{ width: "100%", height: "100px", marginBottom: "10px" }}
          ></textarea>

          {/* Character counter */}
          <p style={{ fontSize: "0.9em", color: "gray", marginBottom: "10px" }}>
            {newEntry.length}/1000 characters
          </p>

          {/* Save button */}
          <button 
            type="submit" 
            style={{ padding: "8px 16px" }}
            disabled={!newEntry.trim()} // 🔥 Disable button if no real text
          >
            Save
          </button>
        </form>

        {/* Previous Entries */}
        <h3 style={{ textAlign: "center", fontSize: "1.5em", marginBottom: "20px" }}>
          Previous Entries
        </h3>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {entries.map((entry) => (
            <div 
              key={entry.id}
              style={{
                background: "#f9f9f9",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
                width: "90%",
                maxWidth: "500px",
                textAlign: "left",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
              }}
            >
              <p>{entry.entry}</p>
              <p style={{ fontSize: "0.9em", color: "gray" }}>
                {new Date(entry.date).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
