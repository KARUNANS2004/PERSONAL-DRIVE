const express=require('express')
// we will use bcrypt to provide hashing to our user's passwords
const bcrypt=require("bcrypt")
const cookieParser=require('cookie-parser')

const userRouter=require('./routes/user.routes')
const indexRouter=require('./routes/index.routes')
const dotenv=require('dotenv')
dotenv.config()
const connectToDb=require('./config/db')
connectToDb();



const app=express()

app.set('view engine','ejs');
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.use('/',indexRouter)
app.use('/user',userRouter) 



app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000/user/login`);
});