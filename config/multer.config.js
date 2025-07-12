const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');

const storage = firebaseStorage({
  credentials: {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  bucketName: 'drive-clone-e70b3.appspot.com', // 🔁 Make sure this is correct
  unique: true,
  name: (req, file) => {
    return `${Date.now()}-${file.originalname}`;
  },
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
