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


const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: NonceType,
            args: {
                address: {type: new GraphQLNonNull(GraphQLString)},
            },
            async resolve(parent, args){
                let res = await User.findOne({ walletAddress: args.address })
                if(res){
                    let nonce = Math.floor(Math.random() * 1000000)
                }
                else{
                    let nonce = Math.floor(Math.random() * 1000000)
                }
                return res
            }
        },
        registerUser: {
            type: UserType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
            }
        }
    }
})