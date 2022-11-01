const { Router } = require('express');

const router = Router();

const { Vacancies, Candidates, Comments }  = require('../models')

const checkVacancy = require('../middlewares/vacancy/CheckVacancy')
const checkAuth = require('../middlewares/auth/CheckAuth')

router.get('/', async (req,res) => {
  const vacancy = await Vacancies.findAll();

  res.status(200).json(vacancy)
})

router.get('/:id',checkVacancy, async (req,res) => {
  const { id } = req.params;

  const vacancy = await Vacancies.findByPk(id, 
    {include: { model: Candidates, as:'candidates',attributes: ['name'],
    include: { model: Comments, as: 'comment', attributes: ['adminId','description']}
    }});

  res.status(200).json(vacancy)
})

router.post('/', checkAuth, async (req,res) => {
  const { name, level, adminId } = req.body;

  const vacancy = await Vacancies.create({ name, level, adminId })

  res.status(201).json(vacancy)
})

router.post('/:id/add-candidates', checkVacancy, async (req,res) => {
  const { candidateId } = req.body;

  const vacancy = await Vacancies.findByPk(req.params.id)

  const candidate = await Candidates.findByPk(candidateId)

  await vacancy.addCandidate(candidate)

  res.status(200).json({message: 'appication sucessfull.'})
})

router.put('/:id', checkAuth, checkVacancy, async (req,res) => {
  const { id } = req.params;
  
  const { name } = req.body;

  await Vacancies.update(
    { name},
    {
      where: { id }
    }
  )

  res.status(200).json({message: 'user was updated!'})
})

router.delete('/:id', checkAuth, checkVacancy, async (req,res) => {
  const { id } = req.params;

  await Vacancies.destroy(
    {
      where: { id }
    }
  )

  res.status(200).json({message: 'user was delete.'})
})

module.exports = router