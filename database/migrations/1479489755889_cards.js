'use strict'

const Schema = use('Schema')

class CardsTableSchema extends Schema {

  up () {
    this.create('cards', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('avatarURL').notNullable()
      table.string('username').unsigned().references('username').inTable('users')
      table.string('category').notNullable().references('name').inTable('categories')
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
