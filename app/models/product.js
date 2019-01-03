'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    title: DataTypes.STRING,
    number: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    unit_price: DataTypes.INTEGER,
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    weight: DataTypes.STRING
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};