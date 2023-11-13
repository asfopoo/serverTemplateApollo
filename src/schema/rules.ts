import { shield, rule, and, inputRule } from "graphql-shield";
import jwt from "jsonwebtoken";

const privateKey = "SomeAwesomePrivateKey";

export const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  const token = ctx.req.headers?.token;
  try {
    const decoded = jwt.verify(token, privateKey);
    if (decoded) {
      return true;
    } else {
     return false;
    }
  } catch (err) {
    return false;
  }
});

export const isAdmin = rule()(async (parent, args, ctx, info) => {
  // const user = users.find(({ id }) => id === ctx.headers["user-id"]);
  // return user && user.role === "ADMIN";
  return false;
});
