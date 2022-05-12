const { order, provider, buyer, cnpj } = require('../models');

const getAll = async () => {
  try {
    const orders = await order.findAll({
      include: [
        { model: provider, as: 'providers', include: [{ model: cnpj, as: 'cnpj' }] },
        { model: buyer, as: 'buyers' },
      ],
    });

    return orders;
  } catch (error) {
    console.log(error);
    return { message: 'Erro no Servidor' };
  }
};

module.exports = {
    getAll,
  };
