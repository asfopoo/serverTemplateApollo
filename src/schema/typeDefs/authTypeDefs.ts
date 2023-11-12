import types from "./types.js";

const typeDefs = `#graphql

  ${types}

  type Mutation {
    register(email: String!, lastname: String!, firstname: String!, password: String!): [User]
    login(email: String!, password: String!): [User]
  }
`;

export default typeDefs;
