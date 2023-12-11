const router = require("express").Router();
const {
  getAllBrands,
  createBrand,
  updateBrand,
  deleteBrand,
} = require("../controllers/brand");

router.route("/new").post(createBrand);
router.route("/update").patch(updateBrand);
router.route("/delete").delete(deleteBrand);
router.route("/list").get(getAllBrands);

module.exports = router;
