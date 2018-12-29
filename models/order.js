'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    type_payment: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};