const userService = require('../services/userService');

const msgError = { message: 'Erro no Servidor' };

const getAll = async (req, res) => {
    try {
      const users = await userService.getAll();
      
      return res.status(200).json(users).end();
    } catch (error) {
      console.log(error);
      return res.status(500).json(msgError);
    }
  };

module.exports = {
  getAll,
};
