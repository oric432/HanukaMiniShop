const router = require("express").Router();
const {
  getAllImages,
  createImage,
  updateImage,
  deleteImage,
} = require("../controllers/image");

router.route("/new").post(createImage);
router.route("/update").patch(updateImage);
router.route("/delete").delete(deleteImage);
router.route("/list").get(getAllImages);

module.exports = router;
