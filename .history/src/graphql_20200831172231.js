
const ME = gql`
  query me {
    user(login: "toshiaki-hondo-d") {
      name
      avatarUrl
    }
  }
`