# InterviewPrepAI: AI-Powered Mock Interview Platform

_Built with Next.js, Firebase, Vapi.ai, and TailwindCSS_

🚀 **Launch your interview confidence with AI** → [Live Demo](https://interview-prep-ai-inky.vercel.app/)

---

## 📋 Table of Contents

- [✨ Key Features](#-key-features)
- [🛠 Tech Stack](#-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [🔧 Environment Setup](#-environment-setup)

---

## ✨ Key Features

✅ **AI-Powered Mock Interviews**

- Realistic voice conversations with Vapi.ai agents
- Customizable for 50+ job roles (Tech, Business, Healthcare)

✅ **Smart Feedback Engine**

- Instant analysis on content, tone, and pacing
- Gemini-powered improvement suggestions

✅ **User-Friendly Dashboard**

- Track progress with performance analytics
- Replay past interviews with transcripts

✅ **Secure & Scalable**

- Firebase authentication (Email/Google)
- Responsive design (Desktop + Mobile)

---

## 🛠 Tech Stack

| Category      | Technologies                       |
| ------------- | ---------------------------------- |
| **Frontend**  | Next.js 14, TailwindCSS, shadcn/ui |
| **Backend**   | Firebase (Auth/Firestore), Vapi.ai |
| **AI**        | Google Gemini, Custom LLM prompts  |
| **Utilities** | Zod (Validation), FFmpeg (Audio)   |

---

## 🚀 Quick Start

### Prerequisites

- Node.js v18+
- Firebase account
- Vapi.ai API key

### 1. Clone Repository

```bash
git clone https://github.com/kgaurav152/InterviewPrepAI.git
```

```bash
cd InterviewPrepAI
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create `.env.local`:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com

# Vapi.ai
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_token
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_workflow

# Gemini
GOOGLE_GENERATIVE_AI_API_KEY=your_key
```

### 4. Run Dev Server

```bash
npm run dev
```

Open → http://localhost:3000

## 🔧 Environment Setup

Detailed guides for:

- [Firebase Configuration](https://firebase.google.com/)
- [Vapi.ai Agent Setup](https://docs.vapi.ai/welcome)
- [Deploying to Vercel](https://vercel.com/docs/deployments)

---

💡 **Need Help?**  
Drop me a mail at [kgaurav152@gmail.com](mailto://kgaurav152@gmail.com) or open an [Issue](https://github.com/kgaurav152/InterviewPrepAI/issues).
