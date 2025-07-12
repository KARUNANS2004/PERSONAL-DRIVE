const Firebase=require('firebase-admin')
// const serviceAccount=require('../drive-clone-e70b3-firebase-adminsdk-3fyxq-968b6f6603.json')

const firebase=Firebase.initializeApp({
    credential:Firebase.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
    storageBucket:'drive-clone-e70b3.firebasestorage.app',
})

module.exports=Firebase;