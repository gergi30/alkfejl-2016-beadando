'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static get primaryKey(){
      return 'id'
  }

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  cards () {
    return this.belongsToMany('App/Model/Card','comments')
    }
  }

module.exports = User
