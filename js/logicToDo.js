$(".newToDo").fadeOut(0);

// Create listener for completed
$(".task").on("click", "li", function() {
  $(this).toggleClass("completed");
});
// Delete Todo
// Create Listener
$(".task").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, "linear", function() {
      $(this).remove();
    });
  event.stopPropagation();
});
// Add new todo
$(".newToDo").on("keypress", function(event) {
  if (event.which == 13) {
    var newToDo = " " + this.value;
    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'> </i></span>" + newToDo + "</li>"
    );
    this.value = "";
  }
});

$(".fa-plus-square").on("click", function() {
  $(".newToDo").fadeToggle();
});
