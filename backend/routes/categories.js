const express = require("express");
//const { reset } = require("nodemon");
const {createCategory,getCategories,getCategory,deleteCategory,updateCategory} = require('../controllers/categoryController')

const router = express.Router();

//get all categories
router.get("/", getCategories);

//get a categorie
router.get("/:id", getCategory);

//POST a new category
router.post("/", createCategory);

//DELETE a category
router.delete("/:id",deleteCategory);

//UPDATE a category
router.patch("/:id", updateCategory);

module.exports = router;
