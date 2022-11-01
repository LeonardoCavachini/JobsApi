'use strict';

const createAdmins = (sequelize, Datatypes) => {
  const Admin = sequelize.define('Admins', {
    name: Datatypes.STRING,
    email: Datatypes.STRING,
    cpf: Datatypes.INTEGER,
  });

  Admin.associate = (models) => {
    Admin.hasMany(models.Vacancies, { as: 'vacancy', foreignKey: 'adminId'})
  };

  return Admin;
};

module.exports = createAdmins;