# Project Phase 1 – Definition and Planning

MoodMate is a daily journaling and mood tracking web app designed to help users reflect on their emotions, form positive habits, and gain insights into their mental well-being over time.

## 1. UI Prototypes

Figma link:https://www.figma.com/proto/BWemAEvPVI0Q5P1Hg2nUJR/Untitled?node-id=1-3&p=f&t=y8bvZUoGoJC5N3Bm-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1

Wireframes will be designed using Figma (or any preferred tool) and will include:

- Dashboard – Mood selection and daily quote
- Mood Log Page – Emoji mood picker + text input
- Journal Page – Write and save reflections
- History Page – View mood logs
- Settings Page – Set reminders and customize preferences

Prototypes will aim for a soft, calming design with intuitive navigation.

## 2. User Personas

**Sarah – The Overwhelmed Student**

- Age: 21
- Uses MoodMate to manage anxiety and reflect on stressful school days.
- Needs fast, friendly mood logging and uplifting quotes.

**James – The Busy Professional**

- Age: 28
- Wants to track stress levels during work weeks.
- Interested in mood history and simple journal tracking.

**Alex – The Mindfulness Beginner**

- Age: 16
- Curious about self-reflection and emotional growth.
- Enjoys inspirational content and a visually appealing experience.

## 3. Use Cases and User Flows

**Use Case 1: Log a Mood**
- User selects mood emoji (e.g., happy, stressed) and adds an optional note.
- Flow: Dashboard → Select Mood → Write Note → Save

**Use Case 2: Write a Journal Entry**
- User opens the journal page and writes a reflection about their day.
- Flow: Navigation → Journal → Write → Save

**Use Case 3: View Mood History**
- User views a history list or calendar of their past moods.
- Flow: Navigation → History → View Logs

**Use Case 4: Get Daily Quote**
- User sees an inspirational quote when opening the app.
- Flow: Dashboard → Quote Display

**Use Case 5: Set Reminder**
- User selects a time of day to receive a mood logging reminder.
- Flow: Settings → Set Reminder → Confirm

## 4. Information Architecture and Technical Design

**Tech Stack:**

- Frontend: React
- Backend: Node.js + Express
- Database: PostgreSQL
- Hosting: Vercel (Frontend), Render (Backend)

**Backend Routes:**

- POST /api/mood – Add new mood entry
- GET /api/moods – Retrieve mood history
- POST /api/journal – Save journal entry
- GET /api/quote – Get daily quote

**Navigation Structure:**

- / – Dashboard
- /log – Mood entry
- /journal – Journal entry
- /history – Mood log history
- /settings – User preferences

## 5. Project Management and User Testing

**Timeline:**

| Week | Task                                   |
|------|----------------------------------------|
| 1    | Define personas and use cases          |
| 2    | Create UI prototypes                   |
| 3–4  | Develop frontend and backend           |
| 5    | Connect database + test flows          |
| 6    | Final testing + polish UI              |

**Tools:**

- Git + GitHub for version control
- Trello for task tracking
- Figma for UI design

**User Testing Plan:**

- Conduct informal testing by the project manager (me).
- Focus on mood logging, journal entry, and ease of use.
- Collect written feedback on UI clarity and usability.