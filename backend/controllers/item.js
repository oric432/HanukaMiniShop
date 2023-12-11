const { StatusCodes } = require("http-status-codes");
require("express-async-errors");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../errors");

const getAllItems = async (_req, res) => {
  res.send("get Item");
};

const createItem = async (_req, res) => {
  res.send("create Item");
};

const updateItem = async (req, res) => {
  res.send("update Item");
};

const deleteItem = async (req, res) => {
  res.send("delete Item");
};

module.exports = {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
};
