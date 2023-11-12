import types from "./types.js";

const typeDefs = `#graphql

  ${types}

  type Query {
    user(user_id: Int!): User
    users: [User]
  }
`;

export default typeDefs;