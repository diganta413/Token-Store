const User = require("../models/User.js")
const graphql = require("graphql")
const { UserType } = require("./Types.js")

const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType
} = graphql

const Query = new GraphQLObjectType({
    name: "Queries",
    fields: {
        user: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            async resolve(parent, args) {
                const user = await User.findById(args.id)
                return user
            }
        }
    }
})

module.exports = Query