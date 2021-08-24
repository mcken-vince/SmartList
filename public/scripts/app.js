$(() => {
  const appendListElements = () => {
    $.get('/reminders')
      .then((data) => {
        $('.movies').empty();
        $('.books').empty();
        $('.foods').empty();
        $('.products').empty();
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
      });
  };

  $('#new-item').on('submit', function(event) {
    event.preventDefault();
    const $userSubmission = $(this).serialize();
    console.log($userSubmission);

    $.post('/reminders', $userSubmission)
      .then(appendListElements)
  });

  $(".user-input-toggle").on("click", () => {
    $(".header-toggle").slideToggle();
  });
  appendListElements();
});
