'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    unit_price: DataTypes.INTEGER,
    quantity: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    payment_type: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};