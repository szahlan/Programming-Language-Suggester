$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    const phone = $("#phone").val();
    const science = $("#science").val();
    const color = $("#color").val();
    const food = $("#food").val();
    const animal = $("animal").val();
  });  
});
