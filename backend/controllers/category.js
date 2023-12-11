const { StatusCodes } = require("http-status-codes");
require("express-async-errors");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../errors");

const getAllCategories = async (_req, res) => {
  res.send("get categories");
};

const createCategory = async (_req, res) => {
  res.send("create category");
};

const updateCategory = async (req, res) => {
  res.send("update category");
};

const deleteCategory = async (req, res) => {
  res.send("delete category");
};

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
