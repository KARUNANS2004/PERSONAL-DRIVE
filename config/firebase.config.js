const Firebase=require('firebase-admin')
const serviceAccount=require('../drive-clone-e70b3-firebase-adminsdk-3fyxq-968b6f6603.json')

const firebase=Firebase.initializeApp({
    credential:Firebase.credential.cert(serviceAccount),
    storageBucket:'drive-clone-e70b3.firebasestorage.app',
})

module.exports=Firebase;