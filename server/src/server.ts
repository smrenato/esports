import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([
    { id: 1, nome: "teste" },
    { id: 2, nome: "teste2" },
  ]);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
