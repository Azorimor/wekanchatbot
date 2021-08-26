import { Schema, model } from "mongoose";
import { User } from "./user.model";

export interface Conversation {
  _id: string;
  provider: string;
  user: string;
  channel: string;
  messages: string[];
}
