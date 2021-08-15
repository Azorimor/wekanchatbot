import app from "../../src/app";
import supertest from "supertest";

describe("GET /", async () => {
  await supertest(app)
    .get("/")
    .expect(200)
    .then((response) => {
      expect(response.body.message).toBeTruthy();
      expect(response.body.success).toBe(true);
    });
});
