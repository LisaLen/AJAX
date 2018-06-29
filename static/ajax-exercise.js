"use strict";


// PART 1: SHOW A FORTUNE

function placeFortune(result){
    let fortune = result;
    $("#fortune-text").html(fortune);

}

function showFortune(evt) {
    console.log('showFortune works')

    $.get('/fortune',placeFortune);

}
    // TODO: get the fortune and show it in the #fortune-text div



$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER
function showForcast(result){
    let forecast = result["forecast"];
    alert("This is the forcast: "+ forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

$.get(url, formData, showForcast)

    // TODO: request weather with that URL and show the forecast in #weather-info
}


$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function showStatus(result){
    console.dir(result);
    console.log(result);
    let code = result["code"];
    let messege = result["msg"];
    if (code === 'ERROR') {
        $("#order-status").addClass('order-error');
    }
     $("#order-status").html(messege);
}


function orderMelons(evt) {
    evt.preventDefault();
    let url = "/order-melons.json";
    let formData = {
        "qty": $("#qty-field").val(),
        "melon_type": $("#melon-type-field").val(),
    };

    $.post(url, formData, showStatus);

        // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


