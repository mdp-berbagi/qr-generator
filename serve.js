const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // https://chart.googleapis.com/chart?cht=qr&chld=H|1&chs=[200x200]&chl=[your_data]
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
