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
const app = express()

dotenv.config()

app.use(bodyParser.json({limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))

const subPath ='/api'

app.get(subPath+'test',(req,res) => {
    return res.send('ok')
})

app.use(subPath+'', authRouter)
app.use(subPath+'/product', authMiddleware, productRoutes)
app.use(subPath+'/organiztion', authMiddleware, organiztion)
app.use(subPath+'/transaction', authMiddleware, transaction)

app.listen(5000,() => {
    console.log('Server Running on port : 5000');
})

const DB_USERNNAME = process.env.DB_USERNNAME || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || 'password'
const DB_HOST =process.env.DB_HOST || 'localhost'
const DB_NAME = process.env.DB_NAME || 'mymongodb'

const CONNECTION_URL = `mongodb://${DB_USERNNAME}:${DB_PASSWORD}@${DB_HOST}:27017/${DB_NAME}?authSource=admin`;

mongoose.set('strictQuery', true)
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((error) => console.log(`${error} did not connect`))

const db = mongoose.connection

db.once("open", () => {
    console.log("MongoDB database connection established successfully");
})
