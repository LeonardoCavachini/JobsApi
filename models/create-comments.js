'use strict'

const createComments = (sequelize, Datatypes) => {
  const Comment = sequelize.define('Comments', {
    description: Datatypes.STRING,
    
  });
  Comment.associate = (models) => {
    Comment.belongsTo(models.Admins, { as: 'admin', foreignKey: 'adminId'}),
    Comment.belongsTo(models.Vacancies, { as: 'vacancy', foreignKey: 'vacancyId'}),
    Comment.belongsTo(models.Candidates, { as: 'candidate', foreignKey: 'candidateId'})
  }
  return Comment;
};

module.exports = createComments;