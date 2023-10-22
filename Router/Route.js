const express = require("express");
const router = express.Router();
const {
  getProduct,
  postProduct,
  getProdeuctById,
} = require("../controllers/ProductConstroller.js");
const {
  getOrder,
  postOrder,
  getOrderById,
} = require("../controllers/OrderController.js");
router.route("/product").get(getProduct).post(postProduct);
router.route("/product/:productId").get(getProdeuctById);
router.route("/order").get(getOrder).post(postOrder);
router.route("/order/:orderId").get(getOrderById);
module.exports = router;
