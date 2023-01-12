const { response } = require("express");
const Category = require("../models/categoryModel");
const mmongoose = require("mongoose");

//GET all category
const getCategories = async (req, res) => {
  const categories = await Category.find({}).sort({ createdAt: -1 });
  res.status(200).json(categories);
};

//GET a category
const getCategory = async (req, res) => {
  const { id } = req.params;

  if (!mmongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such category" });
  }
  const category = await Category.findById(id);

  if (!category) {
    return res.status(404).json({ error: "No such category" });
  }
  res.status(200).json(category);
};

//CREATE a new category
const createCategory = async (req, res) => {
  const { mainMenu, subMenu } = req.body;

  //ADD data to DB
  try {
    const category = await Category.create({ mainMenu, subMenu });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE a category
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  if (!mmongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such category" });
  }

  const category = await Category.findOneAndDelete({ _id: id });

  if (!category) {
    return res.status(400).json({ error: "No such category" });
  }

  res.status(200).json(category);
};

//UPDATE a category
const updateCategory = async (req, res) => {
  const { id } = req.params;
  if (!mmongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such category" });
  }

  const category = await Category.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!category) {
    return res.status(400).json({ error: "No such category" });
  }

  res.status(200).json(category)
};

module.exports = { createCategory, getCategory, getCategories, deleteCategory, updateCategory };
