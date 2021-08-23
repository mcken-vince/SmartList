$(() => {



  $.ajax({
    method: "GET",
    url: "/api/reminders"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
});
