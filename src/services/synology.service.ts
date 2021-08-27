import axios, { AxiosRequestConfig } from "axios";
import logger from "../utils/logger";
import https from "https";
import { SYNOLOGY_BOT_INCOMING_URL } from "../utils/config";
import { SynologyBotMessage, SynologyIncoming } from "../types/synology.types";

export class SynologyService {
  readonly url = SYNOLOGY_BOT_INCOMING_URL;

  async sendDefault(data: SynologyIncoming): Promise<void> {
    const payload = "payload=" + JSON.stringify(data);
    const config: AxiosRequestConfig = {
      method: "post",
      url: this.url,
      headers: {
        "Content-Type": "text/plain",
      },
      data: payload,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false, // FIXME: Add proper https support.
      }),
    };
    try {
      const response = await axios(config);
      logger.info({ message: "Sended wekan message", metadata: response });
    } catch (error) {
      logger.error(error);
    }
  }

  async sendMessaage(data: SynologyBotMessage): Promise<void> {
    const payload = "payload=" + JSON.stringify(data);

    const config: AxiosRequestConfig = {
      // TODO make one config
      method: "post",
      url: this.url,
      headers: {
        "Content-Type": "text/plain",
      },
      data: payload,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false, // FIXME: Add proper https support.
      }),
    };
  }
}
