import app from "../../src/app";
import supertest from "supertest";

describe("GET /", () => {
  it("should return a status response", async () => {
    await supertest(app)
      .get("/")
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBeTruthy();
        expect(response.body.success).toBe(true);
      });
  });
});
