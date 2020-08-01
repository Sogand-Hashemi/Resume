// -------------------------------menu && botton responsive------------------------------------

$('#dropDownBtn').on('click', function() {

    $('#divResMenu').toggle();

});
// -------------------------------------fadeIn and Out for res menu---------------------------
$('.dropdown-btn').on('click', function() {

    $('.div-res-menu').fadeToggle('slow');

});


$(window).on('click', function(e) {

    let $target = $(e.target);

    if (!$target.is('.dropdown-btn') &&
        !$target.parents('.div-res-menu').length &&
        !$target.parents('.dropdown-btn').length &&
        !$target.is('.div-res-menu')
    ) {
        $('.div-res-menu').fadeOut('slow');
    }

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


$(window).on('click', function(e) {

    let $target = $(e.target);

    if (!$target.is('.email-button') &&
        !$target.parents('.email-button').length
    ) {
        $('#errorEmailTwo').fadeOut('slow');
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

$(window).on('click', function(e) {

    let $target = $(e.target);

    if (!$target.is('#submit-search-button') &&
        !$target.parents('#submit-search-button').length
    ) {
        $('#error-destination').fadeOut('slow');
    }

});

// ---------------------------

$("#submit-search-button").click(function() {
    if (($("#returnDate").val() === "") && ($("#returnDate").attr('disabled') !== 'disabled')) {
        $("#error-calendar2").slideDown();
    } else {
        $("#error-calendar2").slideUp();
    }
});

$(window).on('click', function(e) {

    let $target = $(e.target);

    if (!$target.is('#submit-search-button') &&
        !$target.parents('#submit-search-button').length
    ) {
        $('#error-calendar2').fadeOut('slow');
    }

});

// ---------------------------

$("#submit-search-button").click(function() {
    if (($("#calendar1").val() === "")) {
        $("#error-calendar1").slideDown();
    } else {
        $("#error-calendar1").slideUp();
    }
});

$(window).on('click', function(e) {

    let $target = $(e.target);

    if (!$target.is('#submit-search-button') &&
        !$target.parents('#submit-search-button').length
    ) {
        $('#error-calendar1').fadeOut('slow');
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