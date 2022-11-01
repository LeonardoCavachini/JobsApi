const { Admins, Vacancies } = require('../../models');

const hasAdmin = async (req, res, next) => {
  const { adminId, vacancyId } = req.body;

  const checkAdmin = await Admins.findByPk(adminId);

  if (!checkAdmin) return res.status(404).json({ message: 'admin not found'});

  const adminVerify = await Vacancies.findByPk(vacancyId);
  
  if (!adminVerify) return res.status(404).json({ message: 'vancancy not found'});
  
  if (adminVerify.adminId !== adminId) return res.status(404).json({ message: 'admin não contém essa vaga'});
  next();
};

module.exports = hasAdmin;