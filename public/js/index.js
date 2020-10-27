$(document).ready(function () {
    $(".play-btn").on("click", function(event) {
        event.preventDefault();
        window.location.replace("jeopardyBoard");
      });
    
    $(".logout-btn").on("click", function(event) {
        event.preventDefault();
        window.location.replace("login");
      });
});