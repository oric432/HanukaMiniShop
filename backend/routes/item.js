const router = require("express").Router();
const {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/item");

router.route("/new").post(createItem);
router.route("/update").patch(updateItem);
router.route("/delete").delete(deleteItem);
router.route("/list").get(getAllItems);

module.exports = router;
