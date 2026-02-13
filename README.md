📚 AI Study Companion: Smart Document Learning Platform
📌 Overview

AI Study Companion is a powerful AI-driven learning platform that allows users to upload study documents, interact with them intelligently, and generate personalized learning materials. It combines secure authentication, PDF management, AI-powered chat, flashcards, quizzes, and analytics into one seamless learning ecosystem.

The platform enhances productivity by transforming static documents into interactive learning experiences using Google Gemini AI.

🚀 Features
🔐 User Authentication

Secure login & signup using JWT

Protected routes with authentication middleware

Persistent login sessions using cookies

📄 PDF Upload & Management

Upload and store study documents securely

File size tracking for storage monitoring

Organized document management system

📖 Embedded PDF Viewer

View PDFs directly within the app

No need to download files

Smooth in-app reading experience

🤖 AI-Powered Chat

Ask context-aware questions about uploaded documents

Intelligent responses powered by Google Gemini

Understands document content before answering

📝 AI Document Summary

Generate concise summaries instantly

One-click full document overview

Saves time during revision

📘 AI Concept Explainer

Get detailed explanations of specific topics

Simplifies complex concepts

Helps in deeper understanding

🗂️ Auto-Generated Flashcards

Automatically generate flashcards from document content

Interactive flip animation

Quick revision mode

🧠 AI Quiz Generator

Generate multiple-choice quizzes

Configurable question count

Instant question creation from document context

📊 Quiz Results & Analytics

Detailed score breakdown

View correct answers with explanations

Performance tracking

📈 Progress Tracking Dashboard

Monitor total uploaded documents

Track flashcards created

View quiz attempts

Recent activity feed

⭐ Favorites System

Mark important flashcards

Quick review section

Personalized learning focus

📱 Responsive UI

Built with Tailwind CSS

Modern, clean design

Fully mobile-friendly

🛠️ Tech Stack
Frontend

React.js

Tailwind CSS

Zustand (State Management)

Backend

Node.js

Express.js

MongoDB

AI Integration

Google Gemini API

Authentication

JWT (JSON Web Token)

Cookie-based session handling

🔧 Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install Dependencies
Backend
cd backend
npm install

Frontend
cd ../project
npm install

3️⃣ Configure Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=
JWT_SECRET=
API_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

4️⃣ Start the Application
Start Backend
cd backend
npm run dev

Start Frontend
cd project
npm run dev
