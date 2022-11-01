const { Router } = require('express');

const router = Router();

const { Comments }  = require('../models');

const hasAdmin = require('../middlewares/vacancy/HasAdmin');
const checkAuth = require('../middlewares/auth/CheckAuth');

router.get('/', async (req,res) => {
  const comment = await Comments.findAll();

  res.status(200).json(comment)
})

router.get('/:id', async (req,res) => {
  const { id } = req.params;

  const comment = await Comments.findByPk(id)

  res.status(200).json(comment) 
})

router.post('/', checkAuth, hasAdmin, async (req,res) => {
  const { description, adminId, vacancyId, candidateId } = req.body;

  const comment = await Comments.create({ description, adminId, vacancyId, candidateId })

  res.status(201).json(comment)
})

router.put('/:id', checkAuth, async (req,res) => {
  const { id } = req.params;
  
  const { description, adminId, vacancyId, candidateId } = req.body;

  await Comments.update(
    { description, adminId, vacancyId, candidateId },
    {
      where: { id }
    }
  )

  res.status(200).json({message: 'user was updated!'})
})

router.delete('/:id', checkAuth, async (req,res) => {
  const { id } = req.params;

  await Comments.destroy(
    {
      where: { id }
    }
  )

  res.status(200).json({message: 'user was delete.'})
})

module.exports = router