import { shield, and, allow, deny } from "graphql-shield";

import { isAuthenticated, isAdmin } from "./rules.js";

const sheild = shield({
    Query: {
      // "*": deny,
      // "*": allow,
      // users: and(isAuthenticated, isAdmin),
      user: isAuthenticated,
      users: and(isAuthenticated, isAdmin),
    },
    Mutation: {
        login: allow,
        register: allow,
    },
  });

export default sheild;