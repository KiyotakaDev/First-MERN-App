import jwt from "jsonwebtoken";
import { config as dotenv } from "dotenv";

dotenv();
const SECRET_TOKEN = process.env.SECRET_TOKEN;

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET_TOKEN, { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};
