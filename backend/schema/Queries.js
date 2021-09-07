const User = require("../models/User.js")
const Product = require("../models/Product")
const graphql = require("graphql")
const { UserType,ProductType } = require("./Types.js")

const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType,
	GraphQLList
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
        },
		product: {
			type: ProductType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) }
			},
			async resolve(parent,args) {
				const product = Product.findById(args.id)
				return product
			}
		},
		products: {
			type: new GraphQLList(ProductType),
			async resolve(parent,args) {
				const products = await Product.find()
				return products
			}
		}
    }
})

module.exports = Query
