const QrController = require("../controllers/QrController");

module.exports = function(router) {
  /**
   * landing page of page
   */
  router.get("/", QrController.index);

  /**
   * render endpoint, accept query string
   */
  router.get("/render", QrController.renderQR);
};
