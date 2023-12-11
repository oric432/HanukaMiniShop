const { StatusCodes } = require("http-status-codes");
require("express-async-errors");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../errors");

const getAllImages = async (_req, res) => {
  res.send("get Image");
};

const createImage = async (_req, res) => {
  res.send("create Image");
};

const updateImage = async (req, res) => {
  res.send("update Image");
};

const deleteImage = async (req, res) => {
  res.send("delete Image");
};

module.exports = {
  getAllImages,
  createImage,
  updateImage,
  deleteImage,
};
