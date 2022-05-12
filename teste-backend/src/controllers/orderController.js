const orderService = require('../services/orderService');

const msgError = { message: 'Erro no Servidor' };

const getAll = async (req, res) => {
    try {
      const orders = await orderService.getAll();
      return res.status(200).json(orders).end();
    } catch (error) {
      console.log(error);
      return res.status(500).json(msgError);
    }
  };

module.exports = {
  getAll,
};
