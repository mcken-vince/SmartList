$(() => {
  const appendListElements = () => {
    $.get('/reminders', (data) => {
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
  };

  $('#new-item').on('submit', function(event) {
    event.preventDefault();
    let $userSubmission = $('.list-input-field').val();
    $userSubmission = JSON.stringify($userSubmission)

    $.post('/reminders', $userSubmission, appendListElements())
  })
  appendListElements();
});
