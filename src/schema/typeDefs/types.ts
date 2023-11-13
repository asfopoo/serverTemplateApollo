const types = `#graphql

type User {
    id: String!
    last_name: String!
    first_name: String!
    email: String!
  }

  type AuthToken {
    authToken: String!
  }

  type RefreshToken {
    refreshToken: String!
  }

  type UserLoginResponse {
    user: User!
    authToken: String!
    refreshToken: String!
  }

`;

export default types