'use strict'

const Schema = use('Schema')

class CardsTableSchema extends Schema {

  up () {
    this.create('cards', (table) => {
      table.increments()
      table.string('avatarURL').notNullable()
      table.string('username').unsigned().references('username').inTable('users')
      table.string('category').notNullable()
      table.string('date').notNullable()
      table.string('imageURL').notNullable()
      table.text('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cards')
  }

}

module.exports = CardsTableSchema
