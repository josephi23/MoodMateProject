# Phase 2 – Implementation

## Backend Setup

- Node.js + Express server created.
- SQLite database (`journal.db`) initialized.
- API Endpoints:
  - `GET /api`: Basic welcome message.
  - `GET /api/welcome`: Additional welcome endpoint for frontend fetch testing.
  - `GET /moods`: Fetch all journal entries.
  - `POST /moods`: Add a new journal entry.
  - `DELETE /moods/:id`: Delete a journal entry by ID.

- Middleware:
  - CORS enabled for frontend ports (`5173`, `5176`).
  - JSON body parsing enabled.

- Database Management:
  - Creates `journal` table if it doesn't exist.
  - Inserts a sample entry if the database is empty.

- Server listens on port `3000`.

## Frontend Setup

- React app scaffolded with Vite.
- Folder structure:
  - `src/`
    - `App.jsx` (Routing setup)
    - `Dashboard.jsx` (Landing page)
    - `Journal.jsx` (Create journal entries)
    - `MoodLog.jsx` (Separate mood log form, optional)
    - `History.jsx` (View all previous moods)
    - `Settings.jsx` (Manage reminders/settings)
    - `Layout.jsx` (Navigation and layout wrapper)

- Pages fetch and display data from backend.

- Styling:
  - Basic CSS with light/dark theme support (`:root` color scheme).

- Navigation:
  - Sidebar links using `react-router-dom`.

- User Experience:
  - Immediate feedback after adding or deleting entries.
  - Forms and buttons are styled for usability.
  - Form validations (e.g., cannot submit empty entry).

## Deployment

- Local testing done on:
  - Backend: `http://localhost:3000`
  - Frontend: `http://localhost:5173`
