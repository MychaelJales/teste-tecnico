const createOrder = (sequelize, DataTypes) => {
    const Order = sequelize.define('order', {
      orderNfId: DataTypes.STRING,
      orderNumber: DataTypes.STRING,
      orderPath: DataTypes.STRING,
      orderFileName: DataTypes.STRING,
      orderOriginalName: DataTypes.STRING,
      emissionDate: DataTypes.STRING,
      pdfFile: DataTypes.STRING,
      emitedTo: DataTypes.STRING,
      nNf: DataTypes.STRING,
      CTE: DataTypes.STRING,
      value: DataTypes.STRING,
      orderStatusBuyer: DataTypes.STRING,
      orderStatusProvider: DataTypes.STRING,
      deliveryReceipt: DataTypes.STRING,
      cargoPackingList: DataTypes.STRING,
      deliveryCtrc: DataTypes.STRING,
      cnpjId: { type: DataTypes.INTEGER, foreignKey: true },
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      buyerId: { type: DataTypes.INTEGER, foreignKey: true },
      providerId: { type: DataTypes.INTEGER, foreignKey: true },
    });

    Order.associate = (models) => {
      Order.belongsTo(models.user, {
        foreignKey: 'userId', as: 'users',
      });
    };

    Order.associate = (models) => {
      Order.belongsTo(models.cnpj, {
        foreignKey: 'cnpjId', as: 'cnpjs',
      });
    };

    Order.associate = (models) => {
      Order.belongsTo(models.providerId, {
        foreignKey: 'providerId', as: 'providers',
      });
    };

    Order.associate = (models) => {
      Order.belongsTo(models.buyer, {
        foreignKey: 'buyerId', as: 'buyers',
      });
    };
  
    return Order;
  };
  
module.exports = createOrder;