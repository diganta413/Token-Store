const User = require("../models/User.js")
const graphql = require("graphql")
const Mutation = require("./Mutation.js")
const Query = require("./Queries.js")

const { GraphQLSchema } = graphql

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
})