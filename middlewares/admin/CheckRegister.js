const { Admins } = require('../../models');

const checkRegister = async (req, res, next) => {
  const { email, cpf } = req.body;

  const adminVerify = await Admins.findAll({
    where: {
      email,
      cpf
    }

  });
  if (adminVerify.length > 0) return res.status(302).json({ message: 'admin already exists' });
  next();
};

module.exports = checkRegister;