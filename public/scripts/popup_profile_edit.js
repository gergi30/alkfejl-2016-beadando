$('#btnEdit').on('click', function(e) {
  e.preventDefault()

  console.log('gomb-megynom')

  const $formContainer = $('#modal1').find('.form-area')

  $formContainer.load('/user/:users/edit form', function() {
    $('#modal1').modal('open');
    const $loginForm = $('#modal1').find('form')
    $loginForm.on('submit', function(e) {
      e.preventDefault()
      const data = $(this).serializeArray()

      Promise.resolve(
        $.ajax({
          url: '/ajax/users/:user/edit',
          method: 'POST',
          data,
          dataType: 'json',
          headers: {
            'csrf-token': $('[name="_csrf"]').val()
          }
        })
      ).then(json => {
        if (json.success) {
            $('#modal1').modal('close');
            location.reload();
        } else {
          //$errorContainer.text('Hibás adatok!').show()
        }
      })
    })

  })
  $('#modal1').modal('open');

})
