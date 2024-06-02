const express = require("express");
const app = express();
const route = express.Router()
const {
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/getPruducts.controller");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);


module.exports = router