const express = require("express");
const {
  postOrder,
  getAllOrder,
  cencelOrder,
  UpdateStatusOrder,
  getallOrdersByAdmin,
} = require("../controllers/order.controller");
const adminAccesssOnly = require("../middleware/admin.middleware");

const orderRouter = express.Router();

const { authenticateToken } = require("../middleware/userAuth.middleware");

orderRouter.use(authenticateToken);
orderRouter.post("/add", postOrder);
orderRouter.get("/get", getAllOrder);
orderRouter.delete("/delete", cencelOrder);
orderRouter.get("/admin", adminAccesssOnly, getallOrdersByAdmin);
orderRouter.patch("/update", adminAccesssOnly, UpdateStatusOrder);

module.exports = {
  orderRouter,
};
