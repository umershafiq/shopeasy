'use strict';
module.exports = (sequelize, DataTypes) => {
  const Use_roles = sequelize.define('Use_roles', {
    roleid: DataTypes.INTEGER
  }, {});
  Use_roles.associate = function(models) {
    // associations can be defined here
  };
  return Use_roles;
};