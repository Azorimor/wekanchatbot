import { Schema, model } from "mongoose";

interface User {
  _id: string;
  synology?: {
    id: number;
    name: string;
  };
  wekan?: {
    id: string;
    username: string;
  };
  verification: {
    success: boolean;
    wekan?: {
      board_id: string;
      list_id: string;
      card_id: string;
    };
    token: string;
    started: Date;
    ended?: Date;
  };
}

const schema = new Schema<User>({
  synology: {
    name: { type: String },
    id: { type: Number },
  },
  wekan: {
    id: { type: String },
    username: { type: String },
  },
  verification: {
    success: { type: Boolean, required: true },
    wekan: {
      board_id: { type: String },
      list_id: { type: String },
      card_id: { type: String },
    },
    token: { type: String, required: true },
    started: { type: Date, default: Date.now },
    ended: { type: Date },
  },
});

export const UserModel = model<User>("User", schema);
