import { useQuery, gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
{
    countries{
      code
      name
      phone
    }
  }
`;

export const SEARCH_COUNTRY = gql`
  query ($eq: String){
    countries(filter:{code:{eq:$eq}}){
      name
      code
      phone
      
    }
  }
`;
