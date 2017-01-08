$('#btnReg').on('click', function(e) {
  e.preventDefault()

  console.log('reg-gomb-megynom')

  const $formContainer = $('#modal1').find('.form-area')

  $formContainer.load('/register form', function() {
    $('#modal1').modal('open');
    const $loginForm = $('#modal1').find('form')
    $loginForm.on('submit', function(e) {
      e.preventDefault()
      const data = $(this).serializeArray()

      Promise.resolve(
        $.ajax({
          url: '/ajax/register',
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
