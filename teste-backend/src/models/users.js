const createUser = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      mobile: DataTypes.STRING,
      departament: DataTypes.STRING,
      verificationCode: DataTypes.STRING,
      emailChecked: DataTypes.TINYINT(1),
      cashforceAdm: DataTypes.TINYINT(1),
    });
  
    /* User.associate = (models) => {
      User.hasMany(models.BlogPost, {
        foreignKey: 'userId', as: 'posts',
      });
    }; */
  
    return User;
  };
  
module.exports = createUser;
