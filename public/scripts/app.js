$(() => {
  const appendListElements = () => {
    $.get('/reminders')
      .then((data) => {
        $('.movies').empty();
        $('.books').empty();
        $('.foods').empty();
        $('.products').empty();
        for (const item of data['reminders']) {
          const listElement = `<li class="reminder-${item.id}">${item.name}<i class="fas fa-solid fa-trash"></i></li>`;
          switch(item['type_id']) {
            case 1:
              $('.movies').append(listElement);
              break;
            case 2:
              $('.books').append(listElement);
              break;
            case 3:
              $('.foods').append(listElement);
              break;
            case 4:
              $('.products').append(listElement);
              break;
          }
        }
      })
      .catch((err) => {
        console.log('error message: ', err)
      });
  };

  $("ul").on("click",'.fa-trash', function() {
    const id = $(this).parent().attr("class").split("-")[1];

    $.ajax({
      url: `/reminders/${id}`,
      type: 'DELETE',
      success: () => {
        appendListElements();
      }
    });
  });

  $('#new-item').on('submit', function(event) {
    event.preventDefault();
    const $userSubmission = $(this).serialize();
    console.log($userSubmission);

    $.post($(this).attr('action'), $userSubmission)
      .then(appendListElements)
  });
  appendListElements();
});
