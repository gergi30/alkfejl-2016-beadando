'use strict'

const Route = use('Route')

//Route.on('/').render('welcome')
Route.get('/', 'HomePageController.show')


Route.get('/login', 'AuthController.index')
Route.post('/login', 'AuthController.login')
Route.get('/logout', 'AuthController.logout')

Route.get('/register', 'RegisterController.index')
Route.post('register', 'RegisterController.doRegister')

Route.get('/cards/create', 'CardController.create')
Route.get('/user/:users/cards', 'CardController.show')
Route.get('/user/:users/cards/:id/edit' , 'CardController.showEdit')
Route.post('/cards/create', 'CardController.doCreate')
Route.post('/user/:users/cards/:id/edit' , 'CardController.doEdit')
Route.post('/user/:users/cards/:id/delete' , 'CardController.delete')
Route.post('/user/:user_id/cards/:card_id/sendComment' , 'CardController.sendComment')

Route.get('/user/:users/edit', 'ProfileController.show')
Route.post('/user/:users/edit', 'ProfileController.edit')
Route.post('/user/:users/delete', 'ProfileController.delete')
