const router = require("express").Router();
const {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");

router.route("/new").post(createCategory);
router.route("/update").patch(updateCategory);
router.route("/delete").delete(deleteCategory);
router.route("/list").get(getAllCategories);

module.exports = router;
