const createProvider = (sequelize, DataTypes) => {
  const Provider = sequelize.define('provider', {
    name: DataTypes.STRING,
    tradingName: DataTypes.STRING,
    cashforceTax: DataTypes.STRING,
    responsibleName: DataTypes.STRING,
    responsibleEmail: DataTypes.STRING,
    responsiblePosition: DataTypes.STRING,
    responsiblePhone: DataTypes.STRING,
    responsibleMobile: DataTypes.STRING,
    website: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    bank: DataTypes.STRING,
    bankAgency: DataTypes.STRING,
    account: DataTypes.STRING,
    documents: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    email: DataTypes.STRING,
    cnpjId: { type: DataTypes.INTEGER, foreignKey: true },
  });

  Provider.associate = (models) => {
    Provider.belongsTo(models.cnpj,
      { foreignKey: 'cnpjId', as: 'cnpj' });
  };

  Provider.associate = (models) => {
    Provider.hasMany(models.order,
      { foreignKey: 'providerId', as: 'providers' });
  };

  return Provider;
};

module.exports = createProvider;