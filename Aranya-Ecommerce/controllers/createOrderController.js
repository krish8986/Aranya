export const createOrderController = async (req, res) => {
  try {
    const { products, payment, buyer } = req.body;
    const order = await new OrderModel({ products, payment, buyer }).save();
    res.json(order);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in order creation",
      error,
    });
  }
};
