// -------------------------------menu && botton responsive------------------------------------

$('#dropDownBtn').on('click', function() {

    $('#divResMenu').toggle();

});

// ------------------------------disable date--------------------------------------------------------------


$(document).ready(function() {
    $("#returnDate").attr('disabled', true);
    $(".radio-cahnges").change(function() {
        if ($(this).val() == "Disable") {
            $("#returnDate").attr('checked', false);
            $("#returnDate").attr('disabled', true);
        } else {
            $("#returnDate").attr('checked', true);
            $("#returnDate").attr('disabled', false);
        }
    });
});

// -------------------------------rotate swap icon---------------------------------------------


var rotated = false;

document.getElementById('spanSwap').onclick = function() {
    var div = document.getElementById('swapIcon'),
        deg = rotated ? 0 : 180;

    div.style.webkitTransform = 'rotate(' + deg + 'deg)';
    div.style.mozTransform = 'rotate(' + deg + 'deg)';
    div.style.msTransform = 'rotate(' + deg + 'deg)';
    div.style.oTransform = 'rotate(' + deg + 'deg)';
    div.style.transform = 'rotate(' + deg + 'deg)';

    rotated = !rotated;
};

// -----------------------------swap inputs with click---------------------------------------------------


$('#spanSwap').click(function() {
    var t = $('#firstSelect').val();
    $('#firstSelect').val($('#secondSelect').val());
    $('#secondSelect').val(t);
});


// ---------------------------------------------calendar---------------------------------------------

$(".datepicker5").datepicker({
    minDate: 0,
    maxDate: "+200D"
});

// ------------------------------------------ support button -----------------------------------------

$('#support-button').on('click', function() {

    $('#support-div').slideToggle();

});

$(window).on('click', function(e) {

    let $target = $(e.target);

    if (!$target.is('#support-div') &&
        !$target.parents('#support-button').length &&
        !$target.parents('#support-div').length &&
        !$target.is('#support-button')
    ) {
        $('#support-div').slideUp();
    }

});

// -----------------------------------------error for empty input---------------------------------------

$("#submit-search-button").click(function() {
    if (($("#firstSelect").val() === "")) {
        $("#error-source").slideDown();
    } else {
        $("#error-source").slideUp();
    }
});

$(window).on('click', function(e) {

    let $target = $(e.target);

    if (!$target.is('#submit-search-button') &&
        !$target.parents('#submit-search-button').length
    ) {
        $('#error-source').fadeOut('slow');
    }

});

// ----------------------------

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

// -----------------------------------increase && decrease--------------------------------------------------------


// ------------------------slide down and up--
$('.btn-ticket').on('click', function() {

    $('.ticket-selection-ul').slideToggle();

});

$(window).on('click', function(e) {

    let $target = $(e.target);

    if (!$target.is('.ticket-selection-ul') &&
        !$target.parents('.btn-ticket').length &&
        !$target.parents('.ticket-selection-ul').length &&
        !$target.is('.btn-ticket')
    ) {
        $('.ticket-selection-ul').slideUp();
    }

});
// -------------------------------------------


$('#add').on('click', function() {
    var $qty = $(this).closest('#div-plus-and-minus').find('.number-of-tickets-1');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal < 8) {
        $qty.val(currentVal + 1);
    }
});
$('#minus').on('click', function() {
    var $qty = $(this).closest('#div-plus-and-minus').find('.number-of-tickets-1');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 1) {
        $qty.val(currentVal - 1);
    }
});



$('#add1').on('click', function() {
    var $qty = $(this).closest('#div-plus-and-minus1').find('.number-of-tickets-2');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal < 8) {
        $qty.val(currentVal + 1);
    }
});
$('#minus1').on('click', function() {
    var $qty = $(this).closest('#div-plus-and-minus1').find('.number-of-tickets-2');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 0) {
        $qty.val(currentVal - 1);
    }
});



$('#add2').on('click', function() {
    var $qty = $(this).closest('#div-plus-and-minus2').find('.number-of-tickets-3');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal < 1) {
        $qty.val(currentVal + 1);
    }
});
$('#minus2').on('click', function() {
    var $qty = $(this).closest('#div-plus-and-minus2').find('.number-of-tickets-3');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 0) {
        $qty.val(currentVal - 1);
    }
});


// ------------------------------minus disable----------------------------------------------------------

// $(document).ready(function() {
//     $("#minus1").attr('disabled', true);
//     $("#add1").change(function() {
//         if ($('.number-of-tickets-1') == 1) {
//             // $("#returnDate").attr('checked', false);
//             $("#minus1").attr('disabled', true);
//         }
//         // else {
//         // $("#returnDate").attr('checked', true);
//         // $("#minus2").attr('disabled', false);
//         // }
//     });
// });

// ----------------------------------------number of ticket-----------------------------------------------

function AdditionBy() {

    let num1 = document.getElementById("adultCount1").value;
    let num2 = document.getElementById("adultCount2").value;
    let num3 = document.getElementById("adultCount3").value;

    var x = Number(num1) + Number(num2) + Number(num3) + Number(1);
    document.getElementById("result").innerHTML = x;
}

function SubtractionBy() {
    let num1 = document.getElementById("adultCount1").value;
    let num2 = document.getElementById("adultCount2").value;
    let num3 = document.getElementById("adultCount3").value;
    var x = Math.abs(Number(num1) + Number(num2) + Number(num3) - Number(1));
    // var x = Number(num1) + Number(num2) + Number(num3);
    document.getElementById("result").innerHTML = (x);
}

function minResult() {
    let num1 = document.getElementById("adultCount1").value;
    let num2 = document.getElementById("adultCount2").value;
    let num3 = document.getElementById("adultCount3").value;
    document.getElementById("result").innerHTML = Number(1);

}
minResult();


// ------------------------------error for empty email input--------------------------------------------

$("#email-btn").click(function() {
    if (($(".email-input").val() === "")) {
        $("#error-email").slideDown();
    } else {
        $("#error-email").slideUp();
    }
});


$(window).on('click', function(e) {

    let $target = $(e.target);

    if (!$target.is('.email-button') &&
        !$target.parents('.email-button').length
    ) {
        $('#error-email').fadeOut('slow');
    }

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