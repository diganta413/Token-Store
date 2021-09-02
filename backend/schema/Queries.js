const User = require("../models/User.js")
const graphql = require("graphql")
const { UserType } = require("./Types.js")

const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLObjectType
} = graphql

const Query = new GraphQLObjectType({
    name: "Queries",
    fields: {
        user: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                address: { type: new GraphQLNonNull(GraphQLString) }
            },

            async resolve(parent, args) {
                return null;
            }
        }
    }
})

module.exports = Query