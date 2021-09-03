const User = require("../models/User.js")
const graphql = require("graphql")
const { UserType, NonceType } = require("./Types.js")

const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType
} = graphql

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        getNonce: { // Generate nonce
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
        authenticate: { // Create user
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
        },
        update: { // Update user details
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                address: { type: new GraphQLNonNull(GraphQLString) },
                isAdmin: { type: new GraphQLNonNull(GraphQLBoolean) }
            },
            async resolve(parent, args) {
                if (!args.id) return;

                let res = await User.findByIdAndUpdate(args.id, {
                    id: args.id,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    walletAddress: args.address,
                    isAdmin: args.isAdmin
                },{ new: true })

                return res
            }
        },
        delete: { // Delete user account
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            async resolve(parent, args) {
                if (!args.id) return;

                let res = await User.findByIdAndRemove(args.id).exec()
                return res
            }
        },

    }
})


module.exports = Mutation