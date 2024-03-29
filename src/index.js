const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRouter = require('./router/auth')
const authMiddleware = require('./middleware/auth')
const productRoutes = require('./router/product')
const organiztion = require('./router/organiztion')
const transaction = require('./router/transaction')

const emailRoutes = require('./router/verifyemail')

const app = express()

dotenv.config()

app.use(bodyParser.json({limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))

const subPath ='/api'

app.get(subPath+'/test',(req,res) => {
    return res.send('ok')
})

app.use(subPath+'', authRouter)
app.use(subPath+'/product', authMiddleware, productRoutes)
app.use(subPath+'/organiztion', authMiddleware, organiztion)
app.use(subPath+'/transaction', authMiddleware, transaction)

app.use(subPath+'/email',  emailRoutes)

const PORT = process.env.PORT_JOHN || 5000
app.listen(PORT,() => {
    console.log('Server Running on port :' + PORT);
})

const DB_USERNAME = process.env.DB_USERNAME_JOHN || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD_JOHN || 'password'
const DB_HOST =process.env.DB_HOST_JOHN || 'localhost'
const DB_NAME = process.env.DB_NAME_JOHN || 'mymongodb'


const CONNECTION_URL = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:27017/${DB_NAME}?authSource=admin`;

mongoose.set('strictQuery', true)
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((error) => console.log(`${error} did not connect`))

const db = mongoose.connection

db.once("open", () => {
    console.log("MongoDB database connection established successfully");
})
