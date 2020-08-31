const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
console.log({GITHUB_TOKEN})

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
    link: new HttpLink(),
    cache: new InMemoryCache()
})
