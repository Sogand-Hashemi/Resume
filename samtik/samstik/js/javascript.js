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

// -----------------------------------increase && decrease--------------------------------------------------------

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



$('#add').on('click', function() {
    var $qty = $(this).closest('#div-plus-and-minus').find('.number-of-tickets');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal <= 8) {
        $qty.val(currentVal + 1);
    }
});
$('#minus').on('click', function() {
    var $qty = $(this).closest('#div-plus-and-minus').find('.number-of-tickets');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 1) {
        $qty.val(currentVal - 1);
    }
});



$('#add1').on('click', function() {
    var $qty = $(this).closest('#div-plus-and-minus1').find('.number-of-tickets');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal <= 7) {
        $qty.val(currentVal + 1);
    }
});
$('#minus1').on('click', function() {
    var $qty = $(this).closest('#div-plus-and-minus1').find('.number-of-tickets');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 0) {
        $qty.val(currentVal - 1);
    }
});



$('#add2').on('click', function() {
    var $qty = $(this).closest('#div-plus-and-minus2').find('.number-of-tickets');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal <= 0) {
        $qty.val(currentVal + 1);
    }
});
$('#minus2').on('click', function() {
    var $qty = $(this).closest('#div-plus-and-minus2').find('.number-of-tickets');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 0) {
        $qty.val(currentVal - 1);
    }
});
// ------------------------------minus disable----------------------------------------------------------

$(document).ready(function() {
    $("#minus").attr('disabled', true);
    $("#add").change(function() {
        if ($(this).val() == "Disable") {
            $("#minus").attr('checked', false);
            $("#minus").attr('disabled', true);
        } else {
            $("#minus").attr('checked', true);
            $("#minus").attr('disabled', false);
        }
    });
});


// ------------------------------error for empty email input--------------------------------------------

$("#email-btn").click(function() {
    if (($(".email-input").val() === "")) {
        $("#error-email").slideDown();
    } else {
        $("#error-email").slideUp();
    }
});

// ----------------------------------------number of ticket-----------------------------------------------


let num1 = document.getElementById("adultCount1").value;
let num2 = document.getElementById("adultCount2").value;
let num3 = document.getElementById("adultCount3").value;

function AdditionBy() {
    let num1 = document.getElementById("adultCount1").value;
    let num2 = document.getElementById("adultCount2").value;
    let num3 = document.getElementById("adultCount3").value;

    document.getElementById("result").innerHTML = Number(num1) + Number(num2) + Number(num3) + Number(1);

}

function SubtractionBy() {
    let num1 = document.getElementById("adultCount1").value;
    let num2 = document.getElementById("adultCount2").value;
    let num3 = document.getElementById("adultCount3").value;

    document.getElementById("result").innerHTML = Number(num1) - Number(num2) - Number(num3);

}
AdditionBy();
SubtractionBy();