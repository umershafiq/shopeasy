'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    payment_method: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};