const QrController = require("../controllers/QrController");

module.exports = function(router) {
  router.get("/", QrController.index);
  router.get("/render", QrController.renderQR);
};
