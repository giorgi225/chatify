# 💬 Real-Time Chat Application

A fast, clean, and responsive real-time chat application built with **Next.js** (frontend) and **Express.js** (backend).  
Stay connected with friends instantly through real-time messaging, typing indicators, and smooth UI.

---

## ✨ Features

- 🔥 **Instant Messaging** — Send and receive messages in real-time with zero delay.
- ✍️ **Typing Indicator** — See when your friend is typing (three dots animation).
- 🟢 **Online/Offline Status** — Know who's available to chat.
- 🧼 **Clean UI** — Simple, minimal, and modern user experience.
- 🛡️ **Secure Communication** — Built with best practices (HTTP-only cookies, WebSocket security).
- ⚡ **Socket.IO Powered** — Real-time communication under the hood.

---


## 🛠 Tech Stack

| Frontend              | Backend            | Real-time         | Database (Optional) |
| --------------------- | ------------------ | ----------------- | ------------------- |
| Next.js (App Router)   | Express.js (Node.js) | Socket.IO          | (Postgres) |

---

## 🚀 Getting Started Locally

1. **Clone the repository**

### 1. Clone the repository

```bash
git clone https://github.com/giorgi225/chatify.git
```

### 2. Navigate into the project

```bash
cd chatify
```

### 3. Install frontend dependencies

```bash
cd client
npm install
```

### 4. Set frontend environment variables

Create a `.env.local` file inside the `client/` folder:

```env
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

### 5. Start the frontend server

```bash
npm run dev
```

### 6. Install backend dependencies

```bash
cd ../server
npm install
```

### 7. Set backend environment variables

Create a `.env` file inside the `server/` folder:

```env
# Application URLs
FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:8000

# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/db_name"

# Authentication Settings
ACCESS_SECRET="your_jwt_access_token_secret"
ACCESS_SECRET_EXPIRES_IN="10m"
REFRESH_SECRET="your_jwt_refresh_token_secret"
REFRESH_SECRET_EXPIRES_IN="1d"

# Email Settings
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
EMAIL_VERIFICATION_EXPIRES_IN="5m"
EMAIL_VERIFICATION_MAX_ATTEMPTS="1"
EMAIL_VERIFICATION_COOLDOWN="30s"

# OAuth Settings (Google)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GOOGLE_CALLBACK_URL="http://localhost:3000/api/auth/google/callback"
```

### 8. Start the backend server

```bash
npm run dev
```

### 9. Ready!

Visit [http://localhost:3000](http://localhost:3000) and start chatting!
