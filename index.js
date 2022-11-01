const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3001

app.use(bodyParser.json())

const VacancyController = require('./controllers/VacanciesController');
const CandidateController = require('./controllers/CandidatesController');
const AdminController = require('./controllers/AdminController');
const CommentController = require('./controllers/CommentsController');

app.use('/vacancy', VacancyController)
app.use('/candidate', CandidateController)
app.use('/admin', AdminController)
app.use('/comment', CommentController)

app.listen(port, () => console.log('application running...'))

exports.module = app