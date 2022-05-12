const createCnpj = (sequelize, DataTypes) => {
    const Cnpj = sequelize.define('cnpj', {
      cnpj: DataTypes.STRING,
      companyType: DataTypes.STRING,
    });

    Cnpj.associate = (models) => {
      Cnpj.hasOne(models.provider,
        { foreignKey: 'cnpjId', as: 'providers' });
      Cnpj.hasOne(models.buyer,
        { foreignKey: 'cnpjId', as: 'buyers' });
      Cnpj.hasMany(models.order,
        { foreignKey: 'cnpjId', as: 'orders' });
    };
  
    return Cnpj;
  };
  
module.exports = createCnpj;
