# Phase 3 – Further Development

## Objective
In Phase 3, I chose to further develop the **MoodMate** application by improving the **View Mood History** feature.  
The goal is to enhance the user's ability to track and analyze their emotional trends more effectively.

---

## Motivation
- Based on the original Phase 1 use case: **"View Mood History."**
- In Phase 2, users could only **see a list** of past moods.
- However, there was **no graphical view** or **analysis** to help users reflect deeper on their emotional patterns.
- Improving this would greatly enhance **user experience** and **self-awareness**.

---

## Improvement Plan

**1. Add a Mood Trends Chart**  
- Implement a **line graph** or **bar chart** to show mood entries over time.
- Use a simple charting library like **Chart.js** or **Recharts** inside React.

**2. Display Statistics**  
- Show:
  - Total number of entries
  - Most common mood
  - Longest streak (days with consistent mood logging)

**3. UI Enhancements**  
- Organize the **History** page with tabs:  
  - "Mood List" (existing list view)  
  - "Mood Trends" (new graph view)

**4. Backend Changes (Optional)**  
- No major backend changes are needed.
- Only frontend visualization based on the already available `/moods` API.

---

## Technologies and Tools
- Frontend: React
- Charting Library: Chart.js (or Recharts)
- Backend: Node.js + Express (existing)
- Database: SQLite (existing)

---

## Expected Benefits
- Better **user engagement** by making mood tracking fun and insightful.
- Easier for users to **spot emotional patterns** and reflect on their well-being.
- Provides a **visual summary** in addition to raw mood logs.

---

## Stretch Goals (Optional)
- Allow users to filter mood trends by **week, month, or year**.
- Allow users to export their mood history as a **CSV file**.

---

## 📈 Example of the New History Page Structure
| Tab         | Feature                              |
|-------------|--------------------------------------|
| Mood List   | View mood entries chronologically (existing) |
| Mood Trends | View graphical mood trends (new)     |

---
