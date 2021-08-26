$(()=> {

  $(".user-input-toggle").on("click", () => {
    $(".header-toggle").slideToggle();
  });


  // The below function will remove the class .fas-clicked, which will
  // reset the button to its original state...
  const clickReset = function() {
    const $filmClasses = $('.fa-film').attr('class').split(' ');
    for (const aClass of $filmClasses) {
      if (aClass === 'fas-clicked') {
        $('.fa-film').removeClass('fas-clicked')
      }
    }

    const $shoppingClasses = $('.fa-shopping-cart').attr('class').split(' ');
    for (const aClass of $shoppingClasses) {
      if (aClass === 'fas-clicked') {
        $('.fa-shopping-cart').removeClass('fas-clicked')
      }
    }

    const $utensilsClasses = $('.fa-utensils').attr('class').split(' ');
    for (const aClass of $utensilsClasses) {
      if (aClass === 'fas-clicked') {
        $('.fa-utensils').removeClass('fas-clicked')
      }
    }

    const $bookClasses = $('.fa-book').attr('class').split(' ');
    for (const aClass of $bookClasses) {
      if (aClass === 'fas-clicked') {
        $('.fa-book').removeClass('fas-clicked')
      }
    }

  };

  // This sets the POST route to movies
  $(".fa-film").on("click", () => {
    if ($('#new-item').attr('action') !== '/movies') {
      clickReset();
      $('#new-item').attr('action', '/movies');
      $(".fa-film").addClass('fas-clicked');
    } else {
        $('#new-item').attr('action', '/reminders');
        clickReset();
    }
    console.log($('#new-item').attr('action'));
  });


  // This sets the POST route to products
  $(".fa-shopping-cart").on("click", () => {
    if ($('#new-item').attr('action') !== '/products') {
      clickReset();
      $('#new-item').attr('action', '/products');
      $(".fa-shopping-cart").addClass('fas-clicked');
    } else {
        $('#new-item').attr('action', '/reminders');
        clickReset();
    }
    console.log($('#new-item').attr('action'))
  });


    // This sets the POST route to foods
  $(".fa-utensils").on("click", () => {
    if ($('#new-item').attr('action') !== '/foods') {
      clickReset();
      $('#new-item').attr('action', '/foods');
      $(".fa-utensils").addClass('fas-clicked');
    } else {
        $('#new-item').attr('action', '/reminders');
        clickReset();
    }
    console.log($('#new-item').attr('action'))
  });

  // This sets the POST route to books
  $(".fa-book").on("click", () => {
    if ($('#new-item').attr('action') !== '/books') {
      clickReset();
      $('#new-item').attr('action', '/books');
      $(".fa-book").addClass('fas-clicked');
    } else {
        $('#new-item').attr('action', '/reminders');
        clickReset();
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
    const $reminderFooter = $('.reminder-footer');

    if ($container.hasClass('select-list')) {
      $allContainers.css('display', 'block');
      $container.removeClass('select-list');
      $reminderFooter.css('display', 'none');
    } else {
      $allContainers.css('display', 'none');
      $container.css('display', 'block');
      $container.addClass('select-list');
      $reminderFooter.css('display', 'flex');
    }

  });


})
