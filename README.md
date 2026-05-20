# Bhuvan M — Interactive OS-Style Portfolio

Welcome to my portfolio! This is an interactive, macOS/OS-styled web desktop designed to showcase my engineering projects, skills, and contact information. Built with a modern frontend stack and styled for premium visual excellence.

🌐 **Live Portfolio:** [Visit my website](https://github.com/BhuvanM17) *(or insert your deployment URL)*

---

## 🚀 Key Features

* **macOS/OS Interface:** Draggable, resizable windows, a fully responsive desktop system dock, and top-bar clock/menus.
* **Interactive Projects App:** Explore my key developments organized in a clean finder/directory view.
* **Terminal App:** A functional command-line simulator where visitors can run commands to learn about my background.
* **Responsive Styling:** Sleek animations, high-contrast layouts, and glassmorphism styling utilizing Tailwind CSS.

---

## 🛠️ Featured Project: BizzHub AI & n8n Automation

A multi-stage lead management and customer qualification pipeline combining AI agents with serverless workflows:
* **Workflow Engine:** Designed and built using **n8n** to automate the lead-to-outreach cycle.
* **AI Qualification:** Leverages **Google Gemini** to converse with prospects, extract qualification details (space type, seat counts, locations, duration, contact details), and package it into structured JSON objects.
* **Data Pipelines:** Integrated with **Google Sheets API** for secure, automated CRM logging.
* **Gmail Notification Alerts:** Sends instant rich-text alerts to the sales team upon lead qualification.
* **AI Follow-up Dashboard:** Facilitates drafting and sending personalized follow-up emails directly to qualified leads using automated templates.

### Tech Stack Used in BizzHub:
`n8n` | `Google Gemini API` | `Google Sheets API` | `Gmail API` | `React` | `Tailwind CSS`

---

## 💻 Technical Stack & Libraries

* **Core:** React, JavaScript (ES6+), HTML5, CSS3
* **Styling & Motion:** Tailwind CSS, Framer Motion, Lucide React (Icons)
* **State Management:** Zustand (for OS window tracking, active app layouts, and desktop state)
* **Build Tools:** Create React App, npm

---

## 🛠️ Getting Started

To run this project locally, clone the repository and execute the following:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run in Development Mode
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 3. Build for Production
```bash
npm run build
```
This compiles and optimizes your production assets inside the `build` directory, ready to deploy.
