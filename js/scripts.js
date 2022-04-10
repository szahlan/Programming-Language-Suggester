$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    const phone = $("#phone").val();
    const science = $("#science").val();
    const color = $("#color").val();
    const food = $("#food").val();
    const animal = $("#animal").val();

    if(phone === "Android" && science === "Physics" && color === "Red" && food === "Hot Dogs" && animal === "Cats") {
      $("#output").text("You should learn C#!");
    } else if (phone === "Apple" && science === "Biology" && color === "Blue" && food === "Cheese Burgers" && animal === "Dogs") {
      $("#output").text("You shoud learn Python!");
    } else if (phone === "Microsoft" && science === "Chemistry" && color === "Green" && food === "Pizza" && animal === "Guinea Pigs") {
      $("#output").text("You should learn Ruby!");
    } else {
      $("#output").text("You should learn JavaScript!");
    }
  });  
});
