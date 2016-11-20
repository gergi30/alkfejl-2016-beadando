'use strict'

const Lucid = use('Lucid')

class Comment extends Lucid {
  cards () {
    return this.belongsTo('App/Model/Card')
  }
  users () {
    return this.belongsTo('App/Model/Card')
  }
}

module.exports = Comment
