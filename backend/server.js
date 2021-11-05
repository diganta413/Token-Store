const express = require("express")
const {graphqlHTTP} = require('express-graphql')
const cors = require("cors")
const config = require('dotenv').config()
const schema = require("./schema/Schema.js")
const mongoose = require('mongoose')
const paymentRoute = require("./routes/payment")

const app = express()
app.use(cors())
app.use(express.json())

const mongoURL = config.parsed.MONGO_URL
console.log(mongoURL)
mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection.once('open', () => console.log("DB connected..."))

app.use('/graphql', graphqlHTTP({
	schema,
    graphiql: true
}))

app.get("/",(req,res) => {
	res.status(200).send("Welcome to token store")
})

app.use("/payment",paymentRoute)

app.listen(5000,()=> {
	console.log("Listening to port 5000")
} )
