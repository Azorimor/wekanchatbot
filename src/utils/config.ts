import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  // case "test":
  //   path = `${__dirname}/../../.env.test`;
  //   break;
  case "production":
    path = `${__dirname}/../../.env`;
    break;
  default:
    path = `${__dirname}/../../.env.development`;
}
dotenv.config({ path: path });

export const PROD = process.env.NODE_ENV === "production";
export const APP_ID = process.env.APP_ID || "WekanChatBot";
export const LOG_LEVEL = process.env.LOG_LEVEL || "debug";
export const PORT = process.env.PORT || 3000;
export const MONGO_URI =
  process.env.MONGO_URI ||
  // "mongodb://admin:securePassword@localhost:27017/wekanbot";
  "mongodb://localhost:27017/wekanbot";
