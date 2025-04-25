import { useEffect, useState } from "react";

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
        // Assuming the API returns the newly created entry
        setEntries([...entries, { id: data.id, entry: newEntry, date: new Date().toISOString() }]);
        setNewEntry(""); // Clear the input field after submission
      })
      .catch((error) => console.error("Error saving entry:", error));
  };

  return (
    <div>
      <h2>JOURNAL</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Add a reflection..."
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        ></textarea>
        <button type="submit">Save</button>
      </form>
      <h3>Previous Entries</h3>
      <div>
        {entries.map((entry) => (
          <div key={entry.id}>
            <p>{entry.entry}</p>
            <p>{new Date(entry.date).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
