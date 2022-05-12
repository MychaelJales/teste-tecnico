const createCnpj = (sequelize, DataTypes) => {
    const Cnpj = sequelize.define('cnpj', {
      cnpj: DataTypes.STRING,
      companyType: DataTypes.STRING,
    });

    Cnpj.associate = (models) => {
      Cnpj.hasOne(models.buyer,
        { foreignKey: 'cnpjId', as: 'buyers' });
    };

    Cnpj.associate = (models) => {
      Cnpj.hasMany(models.order,
        { foreignKey: 'cnpjId', as: 'orders' });
    };

    Cnpj.associate = (models) => {
      Cnpj.hasOne(models.provider,
        { foreignKey: 'cnpjId', as: 'providers' });
    };
  
    return Cnpj;
  };
  
module.exports = createCnpj;
