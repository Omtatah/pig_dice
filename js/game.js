$(document).ready(function () {
    $('#l_portal').click(function () {
        $('.col-md-4').hide();
        $('#col-md-8-r').show();
        $('#l_portal').hide();
        $('.g_portal_1').show();
        $('#col-md-8-h').hide();
        $('.g_portal_2').hide();
        $('#r_portal').show();
    })
    $('#r_portal').click(function () {
        $('.col-md-4').hide();
        $('#col-md-8-h').show();
        $('#col-md-8-r').hide();
        $('#r_portal').hide();
        $('.g_portal_2').show();
        $('.g_portal_1').hide();
        $('#l_portal').show();
    })
    $('.g_portal_1').click(function () {
        $('.col-md-4').show();
        $('#col-md-8-r').hide();
        $('#l_portal').show();
        $('.g_portal_1').hide();
    })
    $('.g_portal_2').click(function () {
        $('.col-md-4').show();
        $('#col-md-8-h').hide();
        $('#r_portal').show();
        $('.g_portal_2').hide();
    })
})
    
function rollDice(number) {
    var randomNumberOne = function () {
        var number = Math.floor(Math.random() * 6) + 1;
        alert(number);
        if (randomNumberOne() === 1) {
            document.getElementById("face_status_1").innerHTML = "1";
        } else if (randomNumberOne() === 2) {
            document.getElementById("face_status_1").innerHTML = "1";
        } else if (randomNumberOne() === 3) {
            document.getElementById("face_status_1").innerHTML = "1";
        } else if (randomNumberOne() === 4) {
            document.getElementById("face_status_1").innerHTML = "1";
        } else if (randomNumberOne() === 5) {
            document.getElementById("face_status_1").innerHTML = "1";
        } else if (randomNumberOne() === 6) {
            document.getElementById("face_status_1").innerHTML = "1";
        } else {
            alert('Dice is chipped')
        }
    }
    alert('hi')
}