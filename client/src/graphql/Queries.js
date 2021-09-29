import { useMutation, useQuery, gql } from "@apollo/client"

export const GET_PRODUCT = gql`
	query Product($id: ID!){
		product(id: $id){
			name,
			category,
			price,
			desc
		}
	}
		
`

export const GET_USER = gql`
	query User($id: ID!){
		user(id: $id){
			id,
			firstName,
			lastName,
			email,
			walletAddress,
			isAdmin
		}
	}
`

export const GET_PRODUCTS = gql`
	query Products{
		products{
			id,
			name,
			category,
			price,
			desc
		}		
	}
`

