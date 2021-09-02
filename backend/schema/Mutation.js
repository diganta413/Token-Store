const User = require("../models/User.js")
const graphql = require("graphql")
const { UserType, NonceType } = require("./Types.js")

const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLObjectType
} = graphql


const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        getNonce: {
            type: NonceType,
            args: {
                address: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parent, args) {
                let res = await User.findOne({ walletAddress: args.address })
                if (res) {
                    let nonce = Math.floor(Math.random() * 1000000)
                    return { nonce, status: 1 }
                }
                else {
                    let nonce = Math.floor(Math.random() * 1000000)
                    return { nonce, status: 0 }
                }
            }
        },
        authenticate: {
            type: UserType,
            args: {
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                address: { type: new GraphQLNonNull(GraphQLString) }
            },
            async resolve(parent, args) {
                const user = new User({
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    walletAddress: args.address,
                    isAdmin: false
                })
                let res = await user.save()
                return res
            }
        }
    }
})


module.exports = Mutation