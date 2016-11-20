'use strict'


const Database = use('Database')
const Card = use('App/Model/Card')
const Comments = use('App/Model/Card')

class HomePageController { *
  show(request, response) {

  const allCard = yield Database.table('cards').orderBy('id','desc')
  const allComments = yield Database.table('comments')
  yield response.sendView('welcome', {cards: allCard, comments: allComments})
  }
}

module.exports = HomePageController
