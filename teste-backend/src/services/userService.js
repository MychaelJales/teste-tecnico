const { user } = require('../models');

const msgError = { error: 500, message: 'Erro no Servidor' };

const getAll = async () => {
  try {
    const users = await user.findAll();
    return users;
  } catch (error) {
    console.log(error);
    return msgError;
  }
};

module.exports = {
    getAll,
  };
