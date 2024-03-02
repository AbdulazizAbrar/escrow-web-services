// JavaScript for responsive behavior
$(document).ready(function () {
    // Smooth scrolling
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Form submission
    $('#contact-form').submit(function (event) {
        event.preventDefault();
        // Handle form submission here
        alert('Thank you for contacting us! We will get back to you soon.');
        $(this)[0].reset();
    });
});
