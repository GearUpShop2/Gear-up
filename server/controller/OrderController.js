const Order = require('../model/Order');
const Cart =require('../model/Cart Model')



exports.createOrder = async (req, res) => {
  try {
    const userId = req.user._id;
    const { name, email, street, city, country, zip, total, itemId } = req.body;

    const newOrder = new Order({
      user: userId,
      name,
      email,
      street,
      city,
      country,
      zip,
      total,
    });

    const savedOrder = await newOrder.save();

    await Cart.deleteMany({ userId: userId });

    res.json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user._id;

    const userOrders = await Order.find({ user: userId }).sort({ createdAt: -1 });

    res.json(userOrders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};