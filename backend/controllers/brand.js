const { StatusCodes } = require("http-status-codes");
require("express-async-errors");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../errors");
const Brand = require("../models/Brand");

const getAllBrands = async (_req, res) => {
  try {
    const [results, _fields] = await Brand.getAllBrands();

    if (!results) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "brands not found", data: [] });
    }

    return res
      .status(StatusCodes.OK)
      .json({ msg: "brands successfully fetched", data: results });
  } catch (error) {
    throw error;
  }
};

const createBrand = async (_req, res) => {
  res.send("create Brand");
};

const updateBrand = async (req, res) => {
  res.send("update Brand");
};

const deleteBrand = async (req, res) => {
  res.send("delete Brand");
};

module.exports = {
  getAllBrands,
  createBrand,
  updateBrand,
  deleteBrand,
};
