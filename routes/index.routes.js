const express=require('express')
const router=express.Router();
const upload=require('../config/multer.config')
const fileModel=require('../models/files.model')
const authMiddleware=require('../middlewares/auth')
const firebase=require('../config/firebase.config')

router.get('/home',authMiddleware,async (req,res)=>{

    const userFiles=await fileModel.find({
        user:req.user.userId
    })

    res.render('home',{
        files:userFiles,
    })
})

router.post('/upload',authMiddleware,upload.single('file'),async (req,res)=>{
    const newFile=await fileModel.create({
        path:req.file.path,
        originalName:req.file.originalname,
        user:req.user.userId
    })

    res.json(newFile)
})

router.get('/download/:path',authMiddleware,async (req,res)=>{
    const loggedInUserid=req.user.userId;
    const path=req.params.path;

    const file=await fileModel.findOne({
        user:loggedInUserid,
        path:path
    })

    if(!file){
        return res.status(401).json({
            message:'Unauthorized'
        })
    }

    const signedURL=await firebase.storage().bucket().file(path).getSignedUrl({
        action:'read',
        expires:Date.now() + 1000*60 
    })

    res.redirect(signedURL[0])
})

module.exports=router;