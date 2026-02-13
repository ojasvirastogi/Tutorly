

<h1 align="center" style="font-size:26px;">
  📚 Tutorly
</h1>

## <h1 align="center" style="font-size:20px;">
📌 Overview
</h1>


**Tutorly** is an intelligent AI-driven learning platform that revolutionizes how students interact with study materials. Upload your PDF documents and unlock a suite of AI-powered tools including contextual chat, auto-generated flashcards, smart quizzes, and comprehensive analytics.

Powered by **Google Gemini AI**, Tutorly understands your documents deeply to provide personalized learning experiences that adapt to your study needs.

---

## ✨ Features

### 🔐 User Authentication
- Secure login & signup using JWT
- Protected routes with authentication middleware
- Persistent login sessions using httpOnly cookies

### 📄 PDF Upload & Management
- Upload and store study documents securely via Cloudinary
- File size tracking for storage monitoring
- Organized document management system

### 📖 Embedded PDF Viewer
- View PDFs directly within the app without downloading
- Smooth in-app reading experience with page navigation

### 🤖 AI-Powered Tools
| Feature | Description |
|---------|-------------|
| **Smart Chat** | Ask context-aware questions about uploaded documents |
| **AI Summary** | Generate concise one-click document overviews |
| **Concept Explainer** | Get detailed explanations of complex topics |
| **Flashcard Generator** | Auto-create interactive flashcards with flip animations |
| **Quiz Builder** | Generate configurable multiple-choice quizzes from document content |

### 📊 Analytics & Progress Tracking
- Detailed quiz results with score breakdown and explanations
- Progress dashboard monitoring documents, flashcards, and quiz attempts
- Recent activity feed
- Favorites system for marking important flashcards

### 📱 Responsive Design
- Built with Tailwind CSS for modern, clean UI
- Fully mobile-friendly and responsive across all devices

---

## 🛠️ Tech Stack

**Frontend:** React.js, Tailwind CSS, Zustand (State Management)  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**AI Integration:** Google Gemini API  
**Authentication:** JWT + Cookie-based sessions  
**Cloud Storage:** Cloudinary  

---

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB instance
- Google Gemini API key
- Cloudinary account

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ojasvirastogi/Tutorly.git
cd Tutorly

2️⃣ Install Dependencies
Backend
bash
Copy
cd backend
npm install
Frontend
bash
Copy
cd ../project
npm install
3️⃣ Configure Environment Variables
Create a .env file in the backend directory:
env
Copy
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
API_KEY=your_google_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
4️⃣ Start the Application
Start Backend
bash
Copy
cd backend
npm run dev
Start Frontend
bash
Copy
cd project
npm run dev
