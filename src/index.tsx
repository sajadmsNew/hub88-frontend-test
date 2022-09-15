
import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css'
import { ApolloClient, ApolloLink, InMemoryCache ,ApolloProvider , HttpLink} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
const httpLink = new HttpLink({

  uri: "https://countries.trevorblades.com/",

});



export const client = new ApolloClient({

  cache: new InMemoryCache(),

  link: ApolloLink.from([errorLink,httpLink]),

});


export const Index =()=>{
  return (<>
  <ApolloProvider client={client}>
      <App />
</ApolloProvider>
</>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement || document.createElement('div')).render(
  <Index/>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
