import React, { Component } from 'react'
import { ApolloProvider, Query } from 'react-apollo'
import gql from 'graphql-tag'
import client from './client'

const ME = gql`
  query me {
    user{login: "iteachonudemy} {
      name
      avatarUrl
    }
  }
`

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <div>Hello, GraphQL</div>
      </ApolloProvider>
    )
  }
}

export default App
