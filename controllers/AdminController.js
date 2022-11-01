const { Router } = require('express');

const router = Router();

const { Admins, Vacancies }  = require('../models')

const createToken = require('../auth/createToken')

const checkAdmin = require('../middlewares/admin/CheckAdmin')
const checkAuth = require('../middlewares/auth/CheckAuth')
const checkRegister = require('../middlewares/admin/CheckRegister')

router.get('/', checkAuth, async (req,res) => {
  const admin = await Admins.findAll({order:['id']});

  res.status(200).json(admin)
})

router.get('/:id', checkAuth, async (req,res) => {
  const { id } = req.params;

  const admin = await Admins.findByPk(id,{
    includes: { model: Vacancies, as: 'vacancies'}
  })

  res.status(200).json(admin)
})

router.post('/', checkRegister, async (req,res) => {
  const { name, email, cpf } = req.body;

  const admin = await Admins.create({ name, email, cpf })

  res.status(201).json(admin)
})

router.put('/:id', checkAuth, async (req,res) => {
  const { id } = req.params;

  const { name, email, cpf } = req.body;

  await Admins.update(
    { name, email, cpf },
    {
      where: { id }
    }
  )

  res.status(200).json({message: 'usuario foi atualizado!'})
})

router.delete('/:id', checkAuth, async (req,res) => {
  const { id } = req.params;

  await Admins.destroy(
    {
      where: { id }
    }
  )

  res.status(200).json({message: 'o usuario foi excluido.'})
})

router.post('/login', checkAdmin, async (req,res) => {
  const { email, cpf } = req.body;

  const token = createToken(req.body);

  const { id } = await Admins.findOne({ where: {email, cpf}})
  
  res.status(201).json({ data: { token, id, email, cpf }});
})

module.exports = router