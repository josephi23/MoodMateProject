import { useEffect, useState } from "react";
import Layout from './Layout';

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");

  // Fetch existing journal entries on component mount
  useEffect(() => {
    fetch("http://localhost:3000/moods")
      .then((response) => response.json())
      .then((data) => setEntries(data))
      .catch((error) => console.error("Error fetching entries:", error));
  }, []);

  // Handle form submission to save a new entry
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEntry) return;

    fetch("http://localhost:3000/moods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ entry: newEntry }), // API expects `entry`, not `mood`
    })
      .then((response) => response.json())
      .then((data) => {
        setEntries([...entries, { id: data.id, entry: newEntry, date: new Date().toISOString() }]);
        setNewEntry("");
      })
      .catch((error) => console.error("Error saving entry:", error));
  };

  return (
    <Layout>
      <div>
        <h2>JOURNAL 📝</h2>
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
          <textarea
            placeholder="Add a reflection..."
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            style={{ width: "100%", height: "100px", marginBottom: "10px" }}
          ></textarea>
          <button type="submit" style={{ padding: "8px 16px" }}>Save</button>
        </form>
        <h3>Previous Entries</h3>
        <div>
          {entries.map((entry) => (
            <div key={entry.id} style={{ background: "#f9f9f9", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
              <p>{entry.entry}</p>
              <p style={{ fontSize: "0.9em", color: "gray" }}>{new Date(entry.date).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
