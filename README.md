# PERSONAL-DRIVE
This is just a backend project to show and understand the functioning of google drive clone so used ejs for a simple frontend

#🔐 Authentication Routes (user.routes.js)

GET /register
Renders the user registration page.

Fields: email, username, password

POST /register
Validates and registers a new user.

Hashes password using bcrypt before saving.

Responds with the created user object.

GET /login
Renders the login form.

Fields: username, password

POST /login
Authenticates user credentials.

On success:

Creates a JWT token

Stores it in cookies using cookie-parser

Redirects user to /home

On failure: returns error JSON.

#📂 File Management Routes (index.routes.js)

These routes are protected using a custom middleware: authMiddleware, which verifies JWT from cookies.

GET /home
Dashboard view: lists all files uploaded by the logged-in user.

Uses res.render('home') to display files dynamically.

POST /upload
Uploads a single file to Firebase Cloud Storage.

Stores file metadata in MongoDB:

originalName

path (Firebase file path)

user (userId reference)

GET /download/:path
Validates the file belongs to the logged-in user.

If valid:

Generates a signed URL from Firebase.

Redirects user to download the file.

If not found or unauthorized:

Responds with 401 Unauthorized.

#🛡️ Middleware: authMiddleware.js

Extracts JWT from cookies.

Verifies using JWT_SECRET from .env.

If valid: adds user data to req.user.

If invalid or missing: redirects to /login.

