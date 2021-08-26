export type SynologyIncoming = {
  text: string;
  file_url?: string;
};

export type SynologyOutgoing = {
  token: string;
  channel_id: string;
  channel_name: string;
  user_id: string;
  username: string;
  post_id: string;
  timestamp: string;
  text: string;
  trigger_word: string;
};

export type SynologyBotOutgoing = {
  token: string;
  user_id: string;
  username: string;
  post_id: string;
  timestamp: string;
  text: string;
};

export type SynologyBotMessage = {
  text: string;
  user: {
    user_id?: string;
    username: string;
  };
  actions: string[];
  token: string;
};
