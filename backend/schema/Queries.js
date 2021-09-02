const User = require("../models/User.js")
const graphql = require("graphql")

const {
    GraphQLBoolean, 
    GraphQLString, 
    GraphQLInt,
    GraphQLSchema,
    GraphQLNonNull
} = graphql