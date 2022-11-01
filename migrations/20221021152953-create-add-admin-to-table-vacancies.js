'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.addColumn('Vacancies', 'adminId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: 'Admins',
        key: 'id'
      }
    });
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Vacancies', 'adminId');
  }
};