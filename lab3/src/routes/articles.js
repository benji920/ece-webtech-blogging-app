const articles = require('express').Router()
const db = require('../db')

articles.route('/')
  .get((req, res) => {
  	res.send(db.articles);
  })
  .post((req, res) => {
  	db.articles.push(req.body)
  	res.send(req.body)
  })

articles.route('/:articleId')
  .get((req, res) => {
  	const article = db.articles.find( article => article.id == req.params.articleId)
  	if (article) res.send(article)
  	else res.sendStatus(404)
  })

articles.route('/:articleId/comments')
  .get((req, res) => {
    // TODO
  })
  .post((req, res) => {
    // TODO
  })

articles.route('/:articleId/comments/:commentId')
  .get((req, res) => {
  	// TODO
  })

module.exports = articles;
