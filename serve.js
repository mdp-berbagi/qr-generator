const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>soon i will update</h1>
    <p>
      But u can create your QR from my API by use :
      qr.albasyir.com/render?size=200x200&data=qr.albasyir.com
    </p>
    <p>
      Feel free change size and data, please use size with "x", example 300x300
    </p>
  `);
});

app.get("/render", async (req, res) => {
  let size = req.query.size || "200x200x";
  let data = req.query.data || "qr.albasyir.com";
  let target = `https://chart.googleapis.com/chart?cht=qr&chld=H|1&chs=${size}&chl=${data}`;

  let qr = await axios.get(target, {
    responseType: "arraybuffer",
  });

  let result = Buffer.from(qr.data, "binary");

  res.contentType("png").status(200).send(result);
});

app.listen(port, () => {
  console.log(`Run at http://localhost:${port}`);
});
