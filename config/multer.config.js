const { credential } = require('firebase-admin')
const multer=require('multer')
const firebaseStorage=require('multer-firebase-storage')
const firebase=require('./firebase.config')
const serviceAccount=require('../drive-clone-e70b3-firebase-adminsdk-3fyxq-968b6f6603.json')

const storage=firebaseStorage({
    credentials:firebase.credential.cert(serviceAccount),
    bucketName:'drive-clone-e70b3.firebasestorage.app',
    unique:true,
})


const upload=multer({
    storage:storage,
})

module.exports=upload;