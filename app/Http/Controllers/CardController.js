'use strict'

const Database = use('Database')
const Helpers = use('Helpers')
const Card = use('App/Model/Card')
const User = use('App/Model/User')
const Category = use('App/Model/Category')
const Comment = use('App/Model/Comment')

class CardController { *
  create(request, response) {
      const categories = yield Category.all()
      yield response.sendView('cardCreate', {
        categories: categories.toJSON()
      })
    } *
    delete(request, response) {
      const cardId = request.input('id')
      const userName = request.input('user_name')
      yield Database
        .table('cards')
        .where({ username: userName, id: cardId })
        .delete()
      response.redirect('/user/' + userName + '/cards')
    }  *
  doCreate(request, response) {

      function getFormattedDate() {
        var date = new Date();
        var str = date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate() + "."

        return str;
      }

      const card = new Card()
      const file = request.file('file')
      console.log(file);
      const fileName = `${new Date().getTime()}_${file.clientName()}`
      yield file.move(Helpers.publicPath('img/cardimages'), fileName)
      if (!file.moved()) {
        return
      }

      card.user_id = request.input('user_id')
      card.avatarURL = request.input('avatar_url')
      card.username = request.input('user_name')
      card.category = request.input('category_name')
      card.date = getFormattedDate()
      card.imageURL = fileName
      card.description = request.input('description')

      yield card.save();
      yield response.redirect('/user/'+card.username+'/cards')

    } *
    show(request, response) {
      const userName = request.param('users')
      const userCards = yield Database.from('cards').where('username', userName).orderBy('id', 'desc')
      const cardNumberJson = yield Database.from('cards').where('username', userName).count('* as osszeg')
      const cardNumber = cardNumberJson[0].osszeg;
      //  yield response.send(cardNumberJson)
      yield response.sendView('profileShow', {
        cards: userCards,
        cardNumber: cardNumber
      })
    } *
    showEdit(request, response) {
      const cardId = request.param('id')
      const cards = yield Database.from('cards').where('id', cardId)
        //console.log(cards)
      const categories = yield Category.all()
      yield response.sendView('cardEdit', {
        categories: categories.toJSON(),
        cards: cards
      })
    } *
    doEdit(request, response) {
      const cardId = request.param('id')
      const userName = request.input('user_name')
      const category = request.input('category_name')
      const description = request.input('description')

      yield Database
        .table('cards')
        .where('id', cardId)
        .update({
          description: description,
          category: category
        })

      response.redirect('/user/' + userName + '/cards')
    }
    *
    sendComment(request, response) {
        const comment = new Comment()

        comment.card_id = request.param('card_id')
        comment.user_id = request.param('user_id')
        comment.text = request.input('comment')
        comment.username = request.currentUser.username

        yield comment.save();
        response.redirect('back')
    }

    *
  doAjaxCreate(request, response) {

      function getFormattedDate() {
        var date = new Date();
        var str = date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate() + "."

        return str;
      }

      const card = new Card()
      const file = request.file('file')
      console.log(file);
      const fileName = `${new Date().getTime()}_${file.clientName()}`
      yield file.move(Helpers.publicPath('img/cardimages'), fileName)
      if (!file.moved()) {
        return
      }

      card.user_id = request.input('user_id')
      card.avatarURL = request.input('avatar_url')
      card.username = request.input('user_name')
      card.category = request.input('category_name')
      card.date = getFormattedDate()
      card.imageURL = fileName
      card.description = request.input('description')

      yield card.save();

      response.send({
        success: true
      })

    }

}

module.exports = CardController
