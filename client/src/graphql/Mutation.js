import {gql} from "@apollo/client"

export const addProduct = gql`
	mutation($name: String!,$price: String!,$desc: String!,$category: String!){
		createProduct(name: $name,price: $price,desc: $desc,category: $category){
			name,
			id
		}
	}
`

export const deleteProduct = gql`
	mutation($id: ID!){
		deleteProduct(id: $id){
			id
		}
	}
`

export const updateProduct = gql`
	mutation($name: String!,$price: String!,$desc: String!,$category: String!){
		updateProduct(name: $name,price: $price,desc: $desc,category: $category){
			id,
			name
		}
	}
`

export const authenticate = gql`
	mutation($firstName: String!,$lastName: String!,$email: String!,$address: String!){
		authenticate(firstName: $firstName,lastName: $lastName,email: $email,address: $address){
			id,
			firstName
		}
	}
`

export const deleteUser = gql`
	mutation($id: ID!){
		delete(id: $id){
			id
		}
	}
`

export const updateUser = gql`
	mutation($id: ID!,$firstName: String!,$lastName: String!,$email: String!,$address: String!){
		update(id: $id,firstName: $firstName,lastName: $lastName,email: $email,address: $address){
			id
		}
	}
`


export default authenticate
