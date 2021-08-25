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
})