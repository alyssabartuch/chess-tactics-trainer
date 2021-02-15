const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

async function fetchTactic() {
  return await axios.post(`https://chessblunders.org/api/blunder/get`, {
    type: "explore",
  });
}

app.get("/", async (req, res) => {
  const tacticRes = await fetchTactic();
  const tacticData = await tacticRes.data.data;
  console.log(tacticData);
  res.status(200).send(tacticData);
});

app.listen(8080);
