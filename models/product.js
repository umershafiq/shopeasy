'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    tittle: DataTypes.STRING,
    price: DataTypes.INTEGER,
    size: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};