import {useMutation,useQuery,gql} from "@apollo/client"

export const GET_PRODUCT = gql`
		Query Product($id: ID!){
		product(id: $id){
			name,
			category,
			price,
			desc
		}
		}
		
`

export const GET_USER = gql`
	Query User($id: ID!){
		user(id: $id){
			firstName,
			lastName,
			email,
			walletAddress,
			isAdmin
		}
	}
`

const GET_PRODUCTS = gql`
	{
		products{
			id,
			name,
			category,
			price,
			desc
		}		
	}
`

export default getProducts
