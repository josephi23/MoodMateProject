// Layout.js
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar Navigation */}
      <nav style={{ width: '200px', background: '#f4f4f4', padding: '20px' }}>
        <h3>MOODMATE</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link></li>
          <li><Link to="/journal" style={{ textDecoration: 'none', color: 'black' }}>Journal</Link></li>
          <li><Link to="/history" style={{ textDecoration: 'none', color: 'black' }}>History</Link></li>
          <li><Link to="/settings" style={{ textDecoration: 'none', color: 'black' }}>Settings</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
