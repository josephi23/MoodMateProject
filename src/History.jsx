import { useEffect, useState } from 'react';
import Layout from './Layout';

function History() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/moods')
      .then(res => res.json())
      .then(data => setMoods(data))
      .catch(err => console.error('Error fetching moods:', err));
  }, []);

  return (
    <Layout>
      <h2>HISTORY 📜</h2>
      <ul>
        {moods.map((mood) => (
          <li key={mood.id}>
            {mood.entry} - {new Date(mood.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default History;
