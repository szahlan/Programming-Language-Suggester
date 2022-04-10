$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    const phone = $("#phone").val();
    const science = $("#science").val();
    const color = $("#color").val();
    const food = $("#food").val();
    const animal = $("#animal").val();

    if(phone === "Android" && science === "Physics" && color === "Red" && food === "Hot Dogs" && animal === "Cats") {
      $(".language").text("C#");
    } else if (phone === "Apple" && science === "Biology" && color === "Blue" && food === "Cheese Burgers" && animal === "Dogs") {
      $(".language").text("Python");
    } else if (phone === "Microsoft" && science === "Chemistry" && color === "Green" && food === "Pizza" && animal === "Guinea Pigs") {
      $(".language").text("Ruby");
    } else {
      $(".language").text("JavaScript");
    }

    $("#output").show();
  });  
});
