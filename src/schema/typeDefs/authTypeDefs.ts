import types from "./types.js";

const typeDefs = `#graphql

  ${types}

  type Query {
    register(emailL: String!, lastname: String!, firstname: String!, password: String!): [User]
    login(email: String!, password: String!): [User]
  }
`;

export default typeDefs;
