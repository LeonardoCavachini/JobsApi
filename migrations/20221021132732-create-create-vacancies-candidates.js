'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('VacanciesCandidates', {
      candidateId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Candidates',
          key: 'id'
        }
      },
      vacancyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Vacancies',
          key: 'id'
        }
      }
    });
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('VacanciesCandidates');
  }
};