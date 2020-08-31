import React, { Component } from 'react'
import { ApolloProvider, Query } from 'react-apollo'
import gql from 'graphql-tag'
import client from './client'

const ME = gql`
  query me {
    user(login: "toshiaki-hondo-d") {
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
        <Query query={ME}>
        {
          ({ loading, error, data}) => {
            if (loading) return `loading...`
            if (error) return `Error! &{error.message}`

            return <div>{data.user.name}</div>
          }
        }
        </Query>
      </ApolloProvider>
    )
  }
}

export default App
