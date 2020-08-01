// -------------------------------menu && botton responsive------------------------------------

$('#dropDownBtn').on('click', function() {

    $('#divResMenu').toggle();

});

// ---------------------------------------------calendar---------------------------------------------

$(".datepicker5").datepicker({
    minDate: 0,
    maxDate: "+200D"
});


// ------------------------------error for empty email input--------------------------------------------
$("#emailBtnTwo").click(function() {
    if (($("#emailInputTwo").val() === "")) {
        $("#errorEmailTwo").slideDown();
    } else {
        $("#errorEmailTwo").slideUp();
    }
});

// -----------------------------------------error for empty input---------------------------------------

$("#submit-search-button").click(function() {
    if (($("#secondSelect").val() === "")) {
        $("#error-destination").slideDown();
    } else {
        $("#error-destination").slideUp();
    }
});

$("#submit-search-button").click(function() {
    if (($("#returnDate").val() === "") && ($("#returnDate").attr('disabled') !== 'disabled')) {
        $("#error-calendar2").slideDown();
    } else {
        $("#error-calendar2").slideUp();
    }
});

$("#submit-search-button").click(function() {
    if (($("#calendar1").val() === "")) {
        $("#error-calendar1").slideDown();
    } else {
        $("#error-calendar1").slideUp();
    }
});

// --------------------------------go to top icon-----------------------------------------

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
        $('.go-to-up').fadeIn();
    } else {
        $('.go-to-up').fadeOut();
    }
});

// -----------------------------------multi slider-------------------------------------------
$('#exampleSlider').multislider();


$('#exampleSlider').multislider({
    // interval: 0,
    slideAll: true
});
// -----------------------------------fade carousel-------------------------------------------
$('#carouselHacked').carousel();