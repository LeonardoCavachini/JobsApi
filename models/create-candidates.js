'use strict';

const createCandidates = (sequelize, Datatypes) => {
  const Candidate = sequelize.define('Candidates', {
    name: Datatypes.STRING,
    email: Datatypes.STRING,
    phone: Datatypes.INTEGER,
    cpf: Datatypes.INTEGER,
  });

  Candidate.associate = (models) => {
    Candidate.hasMany(models.Comments, { as: 'comment', foreignKey: 'candidateId'})
  };

  return Candidate;
};

module.exports = createCandidates;