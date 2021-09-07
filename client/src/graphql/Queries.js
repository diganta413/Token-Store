import {useMutation,useQuery,gql} from "@apollo/client"

export const getProduct = gql`
		Query Product($id: ID!){
		product(id: $id){
			name,
			category,
			price,
			desc
		}
		}
		
`

export const getUser = gql`
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

const getProducts = gql`
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
