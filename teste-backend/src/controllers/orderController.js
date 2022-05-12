const orderService = require('../services/orderService');

const getByUserId = async (req, res) => {
    const { id } = req.params;
    try {
      const orders = await orderService.getByUserId(id);
      return res.status(200).json(orders).end();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro no Servidor' });
    }
  };

module.exports = {
  getByUserId,
};
