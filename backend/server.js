const express = require("express")
const {graphqlHTTP} = require('express-graphql')
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

app.use('/graphql', graphqlHTTP({
	/* Schema */
    graphiql: true
}))

app.get("/",(req,res) => {
	res.status(200).send("Welcome to token store")
})

app.listen(5000,()=> {
	console.log("Listening to port 5000")
} )
