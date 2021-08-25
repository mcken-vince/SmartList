$(() => {

  $("ul").on("click",'li', function() {
    const id = $(this).attr("class").split("-")[1];

    $.ajax({
      url: `/reminders/${id}`,
      type: 'GET',
      success: (response) => {
        console.log(response.results);
      }
    });

  });


})
