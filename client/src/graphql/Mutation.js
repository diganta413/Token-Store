import {gql} from "@apollo/client"

export const GET_NONCE = gql`
	mutation($address: String!){
		getNonce(address: $address){
			nonce,
			status,
			userId
		}
	}
`

export const ADD_PRODUCT = gql`
	mutation($name: String!,$price: String!,$desc: String!,$category: String!){
		createProduct(name: $name,price: $price,desc: $desc,category: $category){
			name,
			id
		}
	}
`

export const DELETE_PRODUCT = gql`
	mutation($id: ID!){
		deleteProduct(id: $id){
			id
		}
	}
`

export const UPDATE_PRODUCT = gql`
	mutation($name: String!,$price: String!,$desc: String!,$category: String!){
		updateProduct(name: $name,price: $price,desc: $desc,category: $category){
			id,
			name
		}
	}
`

export const CREATE_USER = gql`
	mutation($firstName: String!,$lastName: String!,$email: String!,$address: String!){
		authenticate(firstName: $firstName,lastName: $lastName,email: $email,address: $address){
			id,
			firstName,
			lastName,
			walletAddress,
			email,
			isAdmin
		}
	}
`

export const DELETE_USER = gql`
	mutation($id: ID!){
		delete(id: $id){
			id
		}
	}
`

export const UPDATE_USER = gql`
	mutation($id: ID!,$firstName: String!,$lastName: String!,$email: String!,$address: String!){
		update(id: $id,firstName: $firstName,lastName: $lastName,email: $email,address: $address){
			id
		}
	}
`
