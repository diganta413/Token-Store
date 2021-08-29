const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/",(req,res) => {
	res.status(200).send("Welcome to token store")
})

app.listen(5000,()=> {
	console.log("Listening to port 5000")
} )
