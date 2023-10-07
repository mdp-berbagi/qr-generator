const axios = require("axios");

module.exports = class QrController {
  /**
   * show landing page of service
   */
  static async index(req, res) {
    return res.send(`
    <h1>soon i will update</h1>
    <p>
      But u can create your QR from my API by use :
      <a href='https://qr.albasyir.com/render?size=200&data=qr.albasyir.com'>
      https://qr.albasyir.com/render?size=200&data=qr.albasyir.com
      </a>
    </p>
    <p>
      Feel free change size and data
    </p>
  `);
  }

  /**
   * take request from other service / client
   * allow to get QR code
   *
   */
  static async renderQR(req, res) {
    let width = req.query.width || 0;
    let hight = req.query.hight || 0;
    let size = req.query.size || 200;
    let data = req.query.data || "https://qr.albasyir.com";

    let imageResolution = [width || size, hight || size].join("x");

    let endpoint = `https://chart.googleapis.com/chart?cht=qr&chld=H|1&chs=${imageResolution}&chl=${data}`;

    let qr = await axios.get(endpoint, {
      responseType: "arraybuffer",
    });

    let binaryPic = Buffer.from(qr.data, "binary");

    return res
      .contentType("png")
      .status(200)
      .send(binaryPic);
  }
};
