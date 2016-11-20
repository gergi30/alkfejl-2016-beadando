'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.increments()
      table.integer('card_id').unsigned().references('id').inTable('cards')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('text', 60).notNullable()
      table.string('username', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
