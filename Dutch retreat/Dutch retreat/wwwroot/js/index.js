$(document).ready(function () {

    var x = 0;
    var s = "";

    console.log("Hi suleman");

    var theform = jQuery("#theform");
    theform.hide();

    var button = $("#buybutton");
    button.on("click", function () {
        console.log("buying item");
    });

    var productinfo = $(".product-props li");
    productinfo.on("click", function () {
        console.log("You cliked on " + $(this).text());
    });


    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $popupForm.on("click", function () {
        console.log("this one worked pop")
    });

    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(1000);
    });


});