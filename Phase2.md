MoodMate - Advanced Web Development Report
1. Environment
Frontend Framework: React.js (with Vite as the build tool)

Backend Framework: Node.js with Express.js

Database: SQLite (via sqlite3 Node package)

Development Tools: Visual Studio Code, npm

Version Control: Git

Operating System: Windows

2. Backend
Server: Node.js using Express.js.

Endpoints:

GET /api: Welcome message

GET /api/welcome: Secondary welcome message

GET /moods: Fetch all journal/mood entries

POST /moods: Add a new journal/mood entry

DELETE /moods/:id: Delete an entry by ID

Middleware:

express.json() to parse JSON requests.

cors configured to allow frontend requests from ports 5173 and 5176.

Database: SQLite file (journal.db) managed inside the backend folder.

3. Frontend
Main Frontend Technology: React.js

Routing: React Router (BrowserRouter with Routes and Route)

Pages/Components:

Dashboard.jsx - Welcome page

Journal.jsx - Add journal entries

History.jsx - View all past entries

Settings.jsx - Static settings page

MoodLog.jsx - Mood logging (additional feature)

Layout: Common navigation sidebar built with Layout.jsx and used across pages.

API Requests: Fetch API used to communicate with the backend.

4. Database
Database Used: SQLite

File: journal.db

Table: journal

Columns:

id: INTEGER PRIMARY KEY AUTOINCREMENT

entry: TEXT (user journal entry)

date: TEXT (auto-filled with current datetime)

Operations: Create, Read, Insert, and Delete journal entries.

5. Basic Structure and Architecture
Project Structure:

markdown
Copy
Edit
/backend
  - server.js
  - journal.db
/public
/src
  - assets/
  - App.jsx
  - Dashboard.jsx
  - History.jsx
  - Journal.jsx
  - Layout.jsx
  - MoodLog.jsx
  - Settings.jsx
Architecture:

Frontend (React) communicates to Backend (Express) via REST API.

Backend interacts with SQLite database for storage.

Communication: JSON payloads are used for all frontend-backend communication.

6. Functionalities
Add a Mood Entry: Users can add daily reflections/moods.

View Mood History: Past moods are displayed with timestamps.

Delete Mood Entry: Users can delete an entry from history.

Reminders in Settings Page: Static reminder sample shown.

Mood Logging: An additional MoodLog page to submit moods directly.

Navigation Bar: Easy page-to-page movement via sidebar links.

7. Code Quality and Documentation
Coding Style: Consistent formatting (prettified JSX, use of hooks).

Documentation:

Clear comments in server.js explaining endpoints.

Meaningful file and component names.

Versioning: Backend and frontend have separate package.json files.

Error Handling: Try-catch used in promises (frontend); error responses returned from server.

8. Testing and Error Handling
Manual Testing: Application tested locally on localhost:5173 and backend on localhost:3000.

Backend Error Handling:

500 error if database issues occur.

400 error if invalid POST request (e.g., missing entry).

404 error if trying to delete a non-existing entry.

Frontend Error Handling:

Catches and logs fetch errors to console.

Displays fallback behavior when server errors happen.

9. User Interface and Interaction
Design: Minimalist and responsive design.

Styling: Basic CSS with light/dark theme support (:root color scheme).

Navigation: Sidebar links using react-router-dom.

User Experience:

Immediate feedback after adding or deleting entries.

Forms and buttons are styled for usability.

Form validations (e.g., cannot submit empty entry).