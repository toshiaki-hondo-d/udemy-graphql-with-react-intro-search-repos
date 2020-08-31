const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
console.log({GITHUB_TOKEN})

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'

const headersLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            Authorization: 'Bearer ${GITHUB_TOKEN}'
        }
    })
    return forward(operation)
})

const endpoint='https://api.github.com/graphql'
const httpLink = new HttpLink({ uri: endpoint })
const link = ApolloLink.from([headersLink, httpLink])

export default new ApolloClient({
    link: new HttpLink(),
    cache: new InMemoryCache()
})
