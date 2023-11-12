import { shield, rule, and, inputRule } from "graphql-shield";

export const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  return !!ctx.headers["user-id"];
});

export const isAdmin = rule()(async (parent, args, ctx, info) => {
  // const user = users.find(({ id }) => id === ctx.headers["user-id"]);
  // return user && user.role === "ADMIN";
  return false;
});
