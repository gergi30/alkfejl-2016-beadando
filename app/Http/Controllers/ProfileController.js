'use strict'

const Database = use('Database')
const Helpers = use('Helpers')
const Card = use('App/Model/Card')
const User = use('App/Model/User')
const Category = use('App/Model/Category')

class ProfileController { *
  show(request, response) {
    yield response.sendView('profileEdit', {})
  }

  *
  edit(request, response) {
    const userName = request.input('user_name')
    const lastName = request.input('last_name')
    const firstName = request.input('first_name')
    const description = request.input('description')

    const userCards = yield Database.from('cards').where('username', userName).orderBy('id', 'desc')
    const cardNumberJson = yield Database.from('cards').where('username', userName).count('* as osszeg')
    const cardNumber = cardNumberJson[0].osszeg;

    yield Database
      .table('users')
      .where('username', userName)
      .update({ lastname: lastName, firstname: firstName , description: description})

  /*  yield response.sendView('profileShow', {
      cards: userCards,
      cardNumber: cardNumber
    })*/

    response.redirect('/user/'+userName+'/cards')
  }
}

module.exports = ProfileController
