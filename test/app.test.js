const request = require("supertest");
const app = require("../");

describe("GET /", () => {
  it("should return 'Hello, World this is a practice for CICD!'", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello, World this is a practice for CICD!");
  });
});

describe("GET /non-existent-route", () => {
  it("should return 404 for non-existent route", async () => {
    const response = await request(app).get("/non-existent-route");
    expect(response.statusCode).toBe(404);
  });
});