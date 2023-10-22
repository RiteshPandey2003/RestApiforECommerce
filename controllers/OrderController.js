const getOrder = async (req, res) => {
  res.status(200).json({ msg: "orders are fetched" });
};
const postOrder = async (req, res) => {
  res.status(201).json({ msg: "orders are created" });
};
const getOrderById = async (req, res) => {
  const id = req.params.orderId;
  if (id === "special") {
    res.status(200).json({
      msg: "order get by special id",
      objid: id,
    });
  } else {
    res.status(200).json({
      msg: "order by id!",
    });
  }
};

const patchOrderById = async (req, res) => {
  const id = req.params.orderId;
  res.status(200).json({
    msg: "order update by id !",
    objid: id,
  });
};
const deleteOrderById = async (req, res) => {
  const id = req.params.orderId;
  res.status(201).json({
    msg: "order delete an id!",
    objid: id,
  });
};

module.exports = {
  getOrder,
  postOrder,
  getOrderById,
  patchOrderById,
  deleteOrderById,
};
