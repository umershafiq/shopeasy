'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    color: DataTypes.STRING,
    unitprice: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};