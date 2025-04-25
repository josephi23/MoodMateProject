import { useEffect, useState } from 'react';

function History() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/moods')
      .then(res => res.json())
      .then(data => setMoods(data))
      .catch(err => console.error('Error fetching moods:', err));
  }, []);

  return (
    <div>
      <h2>HISTORY 📜</h2>
      <ul>
        {moods.map((mood) => (
          <li key={mood.id}>
            {mood.entry} - {new Date(mood.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
