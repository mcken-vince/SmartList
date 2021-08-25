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


  const showModal = (data) => {
    $('.modal-title').html(`${data.name}`);
    $('.modal-description').html(`${data.description}`);
    $('.modal-image').attr('src', data.image_link);
    $('.modal-container').css('display', 'flex');
  };


  $("ul").on("click",'.fa-trash', function(event) {
    // stopPropagation prevents 'li' click event listener from firing
    event.stopPropagation();
    const id = $(this).parent().attr("class").split("-")[1];

    $.ajax({
      url: `/reminders/${id}`,
      type: 'DELETE',
      success: () => {
        appendListElements();
      }
    });
  });


  $("ul").on("click",'li', function() {
    const id = $(this).attr("class").split("-")[1];

    $.ajax({
      url: `/reminders/${id}`,
      type: 'GET',
      success: (response) => {
        console.log(response.results);
        showModal(response.results);
      }
    });

  });


  $('#new-item').on('submit', function(event) {
    event.preventDefault();
    
    const $userSubmission = $(this).serialize();
    console.log($('.list-input-field').val());
    
    if ($('.list-input-field').val()) {
      $(this).css('display', 'none');
      $('.loader').css('display','flex');
      $.post($(this).attr('action'), $userSubmission)
      .then(appendListElements)
      .then((response) => {
        $(this).css('display', 'block');
        $('.loader').css('display','none');
        $('.list-input-field').val('');
      })
      .catch((err) => {
        $(this).css('display', 'block');
        $('.loader').css('display','none');
        $('.list-input-field').val('');
      })
    }
    
    
  });

  appendListElements();

});
