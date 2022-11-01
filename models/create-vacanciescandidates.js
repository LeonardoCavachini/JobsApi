'use strict';
const createCampaignProduct = (sequelize, Datatypes) => {
  const VacanciesCandidates = sequelize.define('VacanciesCandidates', {}, { timestamps: false } );

  VacanciesCandidates.associate = (models) => {
    models.Candidates.belongsToMany(models.Vacancies, {
      as: 'vacancies',
      through: VacanciesCandidates,
      foreignKey: 'candidateId',
      otherKey: 'vacancyId'
    });
    models.Vacancies.belongsToMany(models.Candidates, {
      as: 'candidates',
      through: VacanciesCandidates,
      foreignKey: 'vacancyId',
      otherKey: 'candidateId'
    })
  }
  return VacanciesCandidates;
};

module.exports = createCampaignProduct;