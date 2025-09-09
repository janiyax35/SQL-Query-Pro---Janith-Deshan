# 🚀 SQL Query Pro - Janith Deshan

<div align="center">
  <img src="https://i.giphy.com/media/LmN8STYpGGRrYn6PjY/giphy.webp" width="250" alt="Data Analytics GIF">
  <br>
  
  <p>Your interactive, client-side SQL playground for learning and exploration!</p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Technologies](https://img.shields.io/badge/Tech-HTML%2FCSS%2FJS-blue)](https://github.com/janiyax35/SQL-Query-Pro-Playground#technologies-used-%EF%B8%8F)
  [![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)]([LIVE_DEMO_URL_HERE]) 
  [![GitHub Followers](https://img.shields.io/github/followers/janiyax35?style=social)](https://github.com/janiyax35)
</div>

---

## ✨ Overview

Welcome to the **SQL Query Pro Playground**! This project is a responsive and visually appealing web application designed to help you practice and understand SQL queries directly in your browser. With pre-loaded datasets and a user-friendly interface, you can write and execute SQL statements to see instant results, explore database schemas, and get quick query tips.

It's built with a focus on modern frontend technologies, ensuring a smooth and engaging user experience.

<div align="center">
  <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM252NGRyNmV5MDRwOHJqY21naWZ4N29wMTN5OGFmZ3NmbmE3cWcxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L5oP1C83h12d3mYg14/giphy.gif" width="600" alt="Dashboard Animated GIF">
  <br>
  <em>(Imagine a GIF here showing the playground in action - writing a query, hitting run, and seeing results. You'll need to create one if you want it to be perfectly aligned with your UI!)</em>
</div>

---

## 🌟 Features

*   **Interactive SQL Editor:** Write and execute SQL queries directly in the browser.
*   **Pre-loaded Datasets:** Explore `Employees`, `Rooms`, `Meetings`, and `EmployeesMeetings` tables with sample data.
*   **Real-time Results:** See query outputs beautifully rendered in an HTML table.
*   **Database Schema Details:** A dedicated panel providing a clear overview of table structures, columns, types, and relationships (PK/FK).
*   **Helpful Query Tips:** Quick reminders and examples for common SQL operations.
*   **Responsive Design:** Optimized for seamless use on desktops, tablets, and mobile devices.
*   **Modern UI/UX:** Engaging aesthetics with Google Fonts, Font Awesome icons, and subtle AOS animations.
*   **Background Overlay Animation:** A unique, subtle animated background to enhance visual appeal.
*   **Client-side Processing:** Powered by AlaSQL for instant feedback without server interaction.

---

## 💻 Technologies Used

<div align="center">
  <img src="https://skillicons.dev/icons?i=html,css,javascript,tailwind,bootstrap,git,github" alt="Tech Stack Icons" />
  <img src="https://img.shields.io/badge/Alasql-0.6.0-orange?style=flat&logo=javascript&logoColor=white" alt="AlaSQL Badge" />
  <img src="https://img.shields.io/badge/AOS-2.3.1-blueviolet?style=flat" alt="AOS Badge" />
  <img src="https://img.shields.io/badge/Google%20Fonts-Inter%2FFira%20Code-red" alt="Google Fonts Badge" />
  <img src="https://img.shields.io/badge/Font%20Awesome-6.5.2-green" alt="Font Awesome Badge" />
</div>

<br>

*   **HTML5:** Structure of the web page.
*   **CSS3 (TailwindCSS):** Modern utility-first CSS framework for rapid styling.
*   **JavaScript:** Core logic and interactivity.
*   **AlaSQL:** Client-side in-browser SQL database engine for data management and query execution.
*   **Font Awesome:** Extensive library of vector icons.
*   **Google Fonts:** `Inter` (for general text) and `Fira Code` (for code snippets).
*   **AOS (Animate On Scroll):** Library for scroll-reveal animations.

---

## 🛠️ How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/janiyax35/SQL-Query-Pro-Playground.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd SQL-Query-Pro-Playground
    ```
3.  **Open `index.html`:** Simply open the `index.html` file in your preferred web browser. No complex setup or server required!

---

## 📊 Database Schema Details

Here's a quick look at the tables and their columns available in the playground:

### `Employees` Table
- **Description:** Stores information about employees.
- **Columns:**
    - `EmployeeID` (INT, PK): Unique identifier for the employee.
    - `FirstName` (VARCHAR(10)): Employee's first name.
    - `LastName` (VARCHAR(10)): Employee's last name.
    - `Place` (VARCHAR(15)): City or place of the employee.
    - `Country` (VARCHAR(15)): Country of the employee.
    - `PhoneNo` (CHAR(10)): Employee's phone number.

### `Rooms` Table
- **Description:** Stores details about meeting rooms.
- **Columns:**
    - `RoomID` (INT, PK): Unique identifier for the room.
    - `RoomName` (VARCHAR(20)): Name of the room (e.g., 'Training Room').
    - `Capacity` (INT): Maximum capacity of the room.

### `Meetings` Table
- **Description:** Contains information about scheduled meetings.
- **Columns:**
    - `MeetingID` (INT, PK): Unique identifier for the meeting.
    - `TimeFrom` (TIME): Start time of the meeting.
    - `TimeTo` (TIME): End time of the meeting.
    - `RoomID` (INT, FK to `Rooms(RoomID)`): Foreign key linking to the Rooms table.
    - `MeetingTitle` (VARCHAR(30)): Title or subject of the meeting.
    - `MeetingDate` (DATE): Date of the meeting.

### `EmployeesMeetings` Table
- **Description:** Junction table linking employees to meetings (many-to-many relationship).
- **Columns:**
    - `EmployeeID` (INT, PK, FK to `Employees(EmployeeID)`): Foreign key linking to the Employees table.
    - `MeetingID` (INT, PK, FK to `Meetings(MeetingID)`): Foreign key linking to the Meetings table.

---

## 💡 Query Tips

*   Use `SELECT *` to retrieve all columns from a table.
*   Filter rows with the `WHERE` clause (e.g., `SELECT * FROM Employees WHERE Country = 'India';`).
*   Combine data from multiple tables using `JOIN` statements.
*   Order your results with `ORDER BY` (e.g., `ORDER BY FirstName DESC;`).
*   Aggregate data using functions like `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()` with `GROUP BY`.
*   AlaSQL is generally case-sensitive for table and column names, match the schema exactly!

---

## 👋 Connect with Janith Deshan

Let's connect and build awesome things together!

<p align="center">
  <a href="mailto:janithmihijaya123@gmail.com" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Badge"/>
  </a>
  <a href="https://www.linkedin.com/in/janithdeshan/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <a href="https://github.com/janiyax35" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge"/>
  </a>
  <a href="https://www.instagram.com/janith_deshan11/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram Badge"/>
  </a>
  <a href="https://www.facebook.com/janith.deshan.186" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook Badge"/>
  </a>
</p>

---

Made with ❤️ by Janith Deshan
