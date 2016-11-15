'use strict'


const Database = use('Database')
const Card = use('App/Model/Card')

class HomePageController { *
  show(request, response) {
  const allCard = yield Database.table('cards').orderBy('id','desc')
  yield response.sendView('welcome', {cards: allCard})
  }
}

module.exports = HomePageController
