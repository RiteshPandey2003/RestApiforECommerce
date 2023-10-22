const getProduct = async (req, res) => {
  res.status(200).json({ msg: "get request" });
};
const postProduct = async (req, res) => {
  res.status(201).json({ msg: "Post request" });
};
const getProdeuctById = async(req, res) => {
  const id = req.params.productId;
  console.log(id)
  if (id === 'special') {
    res.status(200).json({
      msg: "you discovered a special id!",
      objid: id,
    });
  } else {
    res.status(200).json({
      msg: "you discoverd and id!",
    });
  }
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
