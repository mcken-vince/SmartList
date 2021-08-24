$(() => {
  const appendListElements = () => {
    $.get('/reminders')
      .then((data) => {
        for (const item of data['reminders']) {
          switch(item['type_id']) {
            case 1:
              $('.movies').append(`<li>${item.name}</li>`);
              break;
            case 2:
              $('.books').append(`<li>${item.name}</li>`);
              break;
            case 3:
              $('.foods').append(`<li>${item.name}</li>`);
              break;
            case 4: 
              $('.products').append(`<li>${item.name}</li>`);
              break;
          }
        }
      })
      .catch((err) => {
        console.log('error message: ', err)
      })
  };

  $('#new-item').on('submit', function(event) {
    event.preventDefault();
    let $userSubmission = $('.list-input-field').val();

    $.post('/reminders', $userSubmission, appendListElements())
  })
  appendListElements();
});
