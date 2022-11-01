const { Admins } = require('../../models');

const checkAdmin = async (req, res, next) => {
  const { email, cpf } = req.body;
  
    const adminVerify = await Admins.findAll({
      where: {
        email,
        cpf
      }
  
    });
    if (adminVerify.length < 1) return res.status(404).json({ message: 'admin not found'});
  next();
};

module.exports = checkAdmin;