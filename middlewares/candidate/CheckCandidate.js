const { Candidates } = require('../../models');

const registerVerify = async (req, res, next) => {
  const { cpf } = req.body;

  const candidateVerify = await Candidates.findAll({
    where: {
      cpf
    }

  });
  if (candidateVerify.length > 0) return res.status(302).json({ message: 'candidate already exists' });
  next();
};

module.exports = registerVerify;