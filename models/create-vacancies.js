'use strict';

const createVacancies = (sequelize, Datatypes) => {
  const Vacancy = sequelize.define('Vacancies', {
    name: Datatypes.STRING,
    level: Datatypes.STRING,
    adminId: Datatypes.INTEGER
  });
  Vacancy.associate = (models) => {
    Vacancy.belongsTo(models.Admins, { as: 'admin', foreignKey: 'adminId'}),
    Vacancy.hasMany(models.Comments, { as: 'comment', foreignKey: 'vacancyId'})
  }
  return Vacancy;
};

module.exports = createVacancies;