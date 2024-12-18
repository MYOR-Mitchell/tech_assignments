
//initialize bootstrap popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' img src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover',
    });
});

//initialize bootstrap Toast
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))

//Function to display toast with selected options
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    //Display toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()
}


function buyTickets() {
    displaySelectedMovieOptions();
}

// Shrinks header size when the document is scrolled down by 50 pixels
$(document).on("scroll", function () {
    // When the webpage is scrolled down from the top by 50px this 
    // if statement will trigger
    if ($(document).scrollTop() > 50) {
        // Once the 50px requirement has been met add the
        // nav-shrink class selector to the same HTML element
        // that has the nav class
        $("nav").addClass("nav-shrink");
        // Adjust the position of the mobile drop menu
        // to accommodate the new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        // If the webpage has not been scrolled down or
        // is back at the top the nav-shrink class selector
        // is removed from the HTML element with the nav
        // class selector
        $("nav").removeClass("nav-shrink");
        // The margin for the drop down menu is now
        // returned to its original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

// Close mobile menu when a navigation link is clicked
$(document).ready(function () {
    // On click when an element contains just the nav-link class and not the dropdown-toggle
    // Also close when an element with the class .dropdown-item has been clicked
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function () {
        // Collapse the navbar when a link or dropdown item is clicked
        $(".navbar-collapse").collapse('hide');
    });
});