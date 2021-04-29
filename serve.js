const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  let size = req.query.size || "200x200";
  let data = req.query.data || "https://aziz.albasyir.com";
  
  let qr = await axios.get(`https://chart.googleapis.com/chart?cht=qr&chld=H|1&chs=${size}&chl=${data}`);
  
  res.send(qr)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
