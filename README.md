## 📦 Server-Side Routes Overview – Personal Drive 🗂️

This app replicates core functionality of **Google Drive**, with a secure backend and server-rendered navigation using Express, MongoDB, JWT & Firebase.

---

### 🔐 Authentication Routes (user.routes.js)

| Route         | Method | Description                                      |
|---------------|--------|--------------------------------------------------|
| `/register`   | GET    | Renders user registration form 📝               |
| `/register`   | POST   | Registers user with hashed password 🔒           |
| `/login`      | GET    | Renders login page 🔑                            |
| `/login`      | POST   | Authenticates user & issues cookie-based JWT 🧾 |

> ⚠️ All credentials are securely handled and tokens are stored in cookies via `cookie-parser`.

---

### 📂 File Handling Routes (index.routes.js)

| Route                  | Method | Protected | Description                                           |
|------------------------|--------|-----------|-------------------------------------------------------|
| `/home`                | GET    | ✅        | Renders dashboard showing all user files 📋          |
| `/upload`              | POST   | ✅        | Uploads a file to Firebase Storage + stores metadata ⬆️ |
| `/download/:path`      | GET    | ✅        | Validates and provides a signed download URL 🔗      |

🔐 Auth is handled via a middleware (`authMiddleware`) that:
- Verifies JWT from cookies
- Redirects unauthenticated users to `/login`

---

### 🔄 Route Navigation Flow (ASCII Diagram)

