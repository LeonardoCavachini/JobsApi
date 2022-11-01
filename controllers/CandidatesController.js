const { Router } = require('express');

const router = Router();

const createToken = require('../auth/createToken')

const { Candidates }  = require('../models')

const checkCandidate = require('../middlewares/candidate/CheckCandidate')

router.get('/', async (req,res) => {
  const candidate = await Candidates.findAll({order:['id']});

  res.status(200).json(candidate);
})

router.get('/:id', async (req,res) => {
  const { id } = req.params;

  const candidate = await Candidates.findByPk(id);

  const comment = await candidate.getComment({attributes: ['description', 'adminId', 'vacancyId']});

  res.status(200).json({...candidate.dataValues, comment});
})

router.post('/', checkCandidate, async (req,res) => {
  const { name, email, phone, cpf } = req.body;

  const candidate = await Candidates.create({ name, email, phone, cpf })

  res.status(201).json(candidate)
})

router.put('/:id', async (req,res) => {
  const { id } = req.params;
  const { name } = req.body;

  await Candidates.update(
    { name },
    {
      where: { id }
    }
  )

  res.status(200).json({message: 'usuario foi atualizado!'})
})

router.delete('/:id', async (req,res) => {
  const { id } = req.params;

  await Candidates.destroy(
    {
      where: { id }
    }
  )

  res.status(200).json({message: 'o usuario foi excluido.'})
});

router.post('/login', async (req,res) => {
  const { email, cpf } = req.body;
  const { id } = await Candidates.findOne({ where: {email, cpf}})
  res.status(201).json({ data: { id, email, cpf }});
});


module.exports = router