import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "test":
    path = `${__dirname}/../../.env.test`;
    break;
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
  // "mongodb://admin:securePassword@localhost:27018/wekanbot";
  "mongodb://localhost:27018/wekanbot";
export const LOG_MONGO = process.env.LOG_MONGO === "true";
export const SYNOLOGY_BOT_INCOMING_URL =
  process.env.SYNOLOGY_BOT_INCOMING_URL ||
  "https://172.12.0.1/webapi/entry.cgi?api=SYNO.Chat.External&method=incoming&version=2&token=YOUR_TOKEN";
export const WEKAN_USERNAME = process.env.WEKAN_USERNAME || "SynologyChatBot";
export const WEKAN_PASSWORD = process.env.WEKAN_PASSWORD || "securePassword";
export const WEKAN_BASE_URL = process.env.WEKAN_BASE_URL || "http://127.0.0.1";
export const WEKAN_TOKEN = process.env.WEKAN_TOKEN || "";
export const DEFAULT_LANGUAGE = process.env.DEFAULT_LANGUAGE || "en";
