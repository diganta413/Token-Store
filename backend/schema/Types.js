const User = require("../models/User.js")
const graphql = require("graphql")

const {
    GraphQLBoolean, 
    GraphQLString, 
    GraphQLInt,
    GraphQLSchema,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLID
} = graphql


const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLID},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        walletAddress: {type: GraphQLString},
        password: {type: GraphQLString},
        isAdmin: {type: GraphQLBoolean}
    })
})

const ProductType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        category: {type: GraphQLString},
        price: {type: GraphQLFloat},
        desc: {type: GraphQLString}
    })
})

module.exports = {
    UserType,
    ProductType
}