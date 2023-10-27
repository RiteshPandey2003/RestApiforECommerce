const Product = require("../models/product.js");
const mongoose = require("mongoose");

const getProduct = async (req, res) => {
  res.status(200).json({ msg: "get request" });
};

const postProduct = async (req, res) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        msg: "Post request at url /products",
        createdProduct: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });

  res.status(201).json({
    msg: "Post request at url /products",
    createdProduct: Product,
  });
};

const getProdeuctById = async (req, res) => {
  const id = req.params.productId;
  Product.findById(id)
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

const patchProdeuctById = async (req, res) => {
  const id = req.params.productId;
  res.status(200).json({
    msg: "you patch an id!",
    objid: id,
  });
};
const deleteProdeuctById = async (req, res) => {
  const id = req.params.productId;
  res.status(201).json({
    msg: "you delete an id!",
    objid: id,
  });
};

module.exports = {
  getProduct,
  postProduct,
  getProdeuctById,
  patchProdeuctById,
  deleteProdeuctById,
};
