const express = require("express");

const app = express();
const port = 80;

const routers = require("./routes");
routers.qr(app);

app.listen(port, () => {
  console.log(`Run at http://localhost:${port}`);
});
