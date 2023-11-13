import jwt from "jsonwebtoken";
import db from "./db.js";
import { randomUUID } from "crypto";

const privateKey = "SomeAwesomePrivateKey";

export function getUserFromRequest(req: any) {
    const userEmail = req.headers.userEmail;
    const user = db("user").where({ email: userEmail }).first();
    return user;
}

export function generateAuthToken(userEmail: string) {
  const authToken = jwt.sign(
    { 
        exp: Math.floor(Date.now() / 1000) + 60 * 15, // 15 minutes
        issuer: "idSxanner",
        userEmail: userEmail,
        admin: false,
        iat: Date.now(),
    },
    privateKey,
  );

    return authToken;
}

export function generateRefreshToken(userEmail: string) {
  const refreshToken = jwt.sign(
    { 
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
        issuer: "idSxanner",
        userEmail: userEmail,
        admin: false,
        iat: Date.now(),
        jwtid: randomUUID(),
    },
    privateKey,
  );

    return refreshToken;
}
