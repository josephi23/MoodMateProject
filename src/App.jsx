import { Routes, Route, Navigate } from "react-router-dom";
import Journal from "./Journal.jsx";
import Dashboard from "./Dashboard.jsx";
import MoodLog from "./MoodLog.jsx";
import History from "./History.jsx";
import Settings from "./Settings.jsx";

export default function App() {
  return (
    <Routes>
      {/* Redirect the root path (/) to /journal */}
      <Route path="/journal" element={<Journal />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/moodlog" element={<MoodLog />} />
      <Route path="/history" element={<History />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}