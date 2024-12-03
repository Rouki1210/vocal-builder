const express = require('express')

const app = express()
const port = 3000      

const mongoose = require('mongoose')
const database = "mongodb+srv://vinhntgch220581:ftduLf2C7iMKK7mM@cluster0.kxmxy.mongodb.net/MEVN"     
mongoose.connect(database)
   .then(() => console.log('connect to db succeed !'))
.catch((err) => console.error('connect to db failed !' + err))

//declare "body-parser" library/package/module: to take input's value
const bodyParser = require('body-parser')
//config "body-parser"
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//declare "cors" library: to share API with "client" (front-end)
const cors = require('cors')
//enable cors : VERY IMPORTANT
app.use(cors())

//declare router (route)
const vocabRouter = require ('./routes/vocabRouter')
//register router: VERY IMPORTANT
vocabRouter(app)

//run server: listen to port
app.listen(port, () => {
   console.log('Backend server is running at http://localhost:' + port)
})