import axios, { AxiosRequestConfig } from "axios";
import logger from "../utils/logger";
import https from "https";
import {
  WEKAN_BASE_URL,
  WEKAN_PASSWORD,
  WEKAN_USERNAME,
} from "../utils/config";

export class WekanService {
  wekanUser = {
    id: "",
    token: "",
    tokenExpires: Date.now().toString(),
  };

  config: AxiosRequestConfig = {
    url: "users/login",
    baseURL: WEKAN_BASE_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "*/*",
      Authentication: this.wekanUser.token,
    },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }), // TODO add 400 error should not be successfull
  };

  axiosInstance = axios.create(this.config);

  async login(): Promise<void> {
    const payload = {
      username: WEKAN_USERNAME,
      password: WEKAN_PASSWORD,
    };

    try {
      const response = await this.axiosInstance.post("/users/login", payload);
      this.wekanUser = response.data;
      // Recreate instance with valid authentication token.
      this.axiosInstance = axios.create(this.config);
      logger.info({ message: "Wekan successfully authenticated." });
    } catch (error) {
      logger.error({
        message: "Wekan authentication failed.",
        metadata: error,
      });
    }
  }
}
