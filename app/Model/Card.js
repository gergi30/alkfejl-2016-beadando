'use strict'

const Lucid = use('Lucid')

class Card extends Lucid {
  static get primaryKey(){
      return 'id'
  }

  users () {
    return this.belongsToMany('App/Model/User')
  }

  category () {
     return this.belongsTo('App/Model/Category','comments')
 }
}

module.exports = Card
