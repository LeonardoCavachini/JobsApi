const { Vacancies } = require('../../models');

const checkVacancy = async (req, res, next) => {
  const { id } = req.params;

  const vacancyVerify = await Vacancies.findByPk(id);

  if (!vacancyVerify) return res.status(404).json({ message: 'vacancy not found'});
  next();
};

module.exports = checkVacancy;