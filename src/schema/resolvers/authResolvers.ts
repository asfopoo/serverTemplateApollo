import bcrypt from "bcrypt";

import { generateAuthToken, generateRefreshToken } from "../../auth.js";
import db from "../../db.js";

const saltRounds = 10;

type User = {
  id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
} | undefined;

const authResolvers = {
  Query: {},
  Mutation: {
    register: async(_parent: any, args: any) => {
      let user: User;
      try {
        const returnedUser = await db("user").insert({
          email: args.email.toLowerCase(),
          first_name: args.firstname,
          last_name: args.lastname,
        }).returning("*");
        user = returnedUser[0];
      }
      catch (err) {
        console.log(`${Date.now()} registration error `, err);
        throw new Error("User already exists");
      }

      try {
        bcrypt.hash(args.password, saltRounds, async function(err, hash) {
          if (err) {
            console.log(`${Date.now()} registration error `, err);
            throw new Error("Password error");
          }
          await db("credentials").insert({ password: hash, user_id: user.id });
        });
      }
      catch (err) {
        console.log(`${Date.now()} registration error `, err);
        db.delete("user").where({ email: args.email });
        user = undefined;
        throw new Error("Password error");
      }
      return user;
    },
    login: async(_parent: any, args: any) => {
      const email = args.email.toLowerCase();
      const user = await db("user").leftJoin("credentials", "user.id", "credentials.user_id").where({ email: email }).first();

      if (!user) {
        console.log(`${Date.now()} User not found `);
        throw new Error("login error");
      }
      const match = await bcrypt.compare(args.password, user.password);
      if (!match) {
        console.log(`${Date.now()} Wrong password `);
        throw new Error("login error");
      }
      
      const authToken = generateAuthToken(user.email);
      const refreshToken = generateRefreshToken(user.email);

      try {
        await db("credentials").update({ refresh_token: refreshToken}).where({ user_id: user.user_id });
      } catch (err) {
        console.log(`${Date.now()} login error `, err);
        throw new Error("login error");
      }

      return { user, authToken, refreshToken };
    },
  },
};

export default authResolvers;
