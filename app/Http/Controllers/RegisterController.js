'use strict'
const User = use('App/Model/User')
const Helpers = use('Helpers')
const Hash = use('Hash')

class RegisterController { *
  index(request, response) {
    yield response.sendView('register')
  }

  *
  doRegister(request, response) {
    const user = new User()
    const file = request.file('file')
    console.log(file);
    const fileName = `${new Date().getTime()}_${file.clientName()}`
    console.log(fileName);
    yield file.move(Helpers.publicPath('img/avatars'), fileName)
    if (!file.moved()) {
      return
    }
    user.username = request.input('username')
    user.avatarURL = fileName
    user.email = request.input('email')
    user.firstname = request.input('first_name')
    user.lastname = request.input('last_name')
    user.password = yield Hash.make(request.input('password'))

    yield user.save()

    var registerMessage = {
      success: 'Sikeres regisztráció! Jelentkezz be!'
    }

    yield response.sendView('register', {
      registerMessage: registerMessage
    })
  }


    *
    doAjaxRegister(request, response) {
      const user = new User()
      const file = request.file('file')
      console.log(file);
      const fileName = `${new Date().getTime()}_${file.clientName()}`
      console.log(fileName);
      yield file.move(Helpers.publicPath('img/avatars'), fileName)
      if (!file.moved()) {
        return
      }
      user.username = request.input('username')
      user.avatarURL = fileName
      user.email = request.input('email')
      user.firstname = request.input('first_name')
      user.lastname = request.input('last_name')
      user.password = yield Hash.make(request.input('password'))

      yield user.save()

      response.send({
        success: true
      })

    }

}

module.exports = RegisterController
