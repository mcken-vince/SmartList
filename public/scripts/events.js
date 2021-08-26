$(()=> {

  $(".user-input-toggle").on("click", () => {
    $(".header-toggle").slideToggle();
  });

  $(".fa-film").on("click", () => {
    if ($('#new-item').attr('action') !== '/movies') {
      $('#new-item').attr('action', '/movies');
    } else {
        $('#new-item').attr('action', '/reminders');
    }
    console.log($('#new-item').attr('action'))
  });

  $(".fa-shopping-cart").on("click", () => {
    if ($('#new-item').attr('action') !== '/products') {
      $('#new-item').attr('action', '/products');
    } else {
        $('#new-item').attr('action', '/reminders');
    }
    console.log($('#new-item').attr('action'))
  });

  $(".fa-utensils").on("click", () => {
    if ($('#new-item').attr('action') !== '/foods') {
      $('#new-item').attr('action', '/foods');
    } else {
        $('#new-item').attr('action', '/reminders');
    }
    console.log($('#new-item').attr('action'))
  });

  $(".fa-book").on("click", () => {
    if ($('#new-item').attr('action') !== '/books') {
      $('#new-item').attr('action', '/books');
    } else {
        $('#new-item').attr('action', '/reminders');
    }
    console.log($('#new-item').attr('action'))
  });

  $(".fa-times").on("click", () => {
    $('.modal-container').css('display', 'none')
  });

  // enlarge individual list and hide others on click
  $(".dumbledore h3").on("click", (event) => {
    const $allContainers = $('.dumbledore');
    const $container = $(event.target).parent();

    if ($container.hasClass('select-list')) {
      $allContainers.css('display', 'block');
      $container.removeClass('select-list');
    } else {
      $allContainers.css('display', 'none');
      $container.css('display', 'block');
      $container.addClass('select-list');
    }
  });
})
