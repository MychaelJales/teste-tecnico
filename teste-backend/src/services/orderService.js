const { order, provider, buyer, cnpj } = require('../models');

const getAll = async () => {
  try {
    const orders = await order.findAll({
      attributes: ['nNf', 'emissionDate', 'value', 'orderStatusBuyer'],
      include: [{
          model: provider,
          as: 'providers',
          attributes: ['name', 'tradingName'],
          include: [{ model: cnpj, as: 'cnpj', attributes: ['cnpj'] }],
        },
        {
          model: buyer,
          as: 'buyers',
          attributes: ['name', 'tradingName'],
        },
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
