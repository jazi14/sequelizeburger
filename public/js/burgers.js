// Javascript data to grab the button info and put in the AJAX request
$(function() {
    $(".change-devoured").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        console.log(id);
        //    Send PUT request
        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: id
        }).then(
            function() {
                console.log("Changed devoured state");
                location.reload();
            }
        )
    })

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burgername: $("#bu").val().trim()
        };
        console.log(newBurger)

        // Send the POST request
        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Added new burger");
                // Reloads
                location.reload();
            }
        )
    })
})