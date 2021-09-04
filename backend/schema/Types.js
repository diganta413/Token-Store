const User = require("../models/User.js")
const graphql = require("graphql")

const {
    GraphQLBoolean, 
    GraphQLString, 
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt
} = graphql

// GraphQL Type for User
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLID},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString},
        walletAddress: {type: GraphQLString},
        isAdmin: {type: GraphQLBoolean}
    })
})

const NonceType = new GraphQLObjectType({
    name: "Nonce",
    fields: () => ({
        nonce: {type: GraphQLInt},
        status: {type: GraphQLInt}
    })
})

// GraphQL Type for Product
const ProductType = new GraphQLObjectType({
    name: "Product",
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
    NonceType,
    ProductType
}
