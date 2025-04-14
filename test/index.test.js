const request = require("supertest");
const express = require("express");

describe("Simple Test", () => {
    let app;
    let server;
  
    // Setup before tests
    beforeAll(async () => {
      app = express();
      
      app.get("/", (req, res) => {
        res.send("Hello World!");
      });
  
      return new Promise((resolve) => {
        server = app.listen(0, () => {  // Using port 0 for random available port
          resolve();
        });
      });
    });
  
    // Cleanup after tests
    afterAll((done) => {
      if (server) {
        server.close(() => {
          done();
        });
      } else {
        done();
      }
    });
  
    it("should return Hello World!", async () => {
      const response = await request(app).get("/");
      expect(response.status).toBe(200);
      expect(response.text).toBe("Hello World!");
    });
  });
  