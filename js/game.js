//user logic
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
    $('#rD').click(function () {
        $('#rA').show();
        $('#rD').hide();
    })
    $('#rD_1').click(function () {
        $('#rA_1').show();
        $('#rD_1').hide();
    })
    $('#hold2').click(function () {
        $('#active1').show();
        $('#inactive1').hide();
        $('#active2').hide();
        $('#inactive2').show();
    })
})


//business logic starts here
function rollDice(number) {
    var faceStatus2 = document.getElementById('faceStatus2');
    var rollStatus2 = document.getElementById('rollStatus2');
    var number = Math.floor(Math.random() * 6) + 1;
    faceStatus2.innerHTML = number;
    rollStatus2.innerHTML = number;
}


function rollAgain() {
    var number = document.getElementById('rollStatus2').innerHTML;
    var otherNumber = Math.floor(Math.random() * 6) + 1;
    var rollStatus2 = document.getElementById('rollStatus2');
    rollStatus2.innerHTML = parseFloat(number) + parseFloat(otherNumber);
    faceStatus2.innerHTML = otherNumber;
    totalStatus2.innerHTML = rollStatus2.innerHTML;
    if (otherNumber === 1) {
        alert('Too bad, you rolled 1 so you get no points.');
        hold();
    } else if (otherNumber === 2) {
        rollStatus2.innerHTML = parseFloat(number) + parseFloat(otherNumber);
    } else if (otherNumber === 3) {
        rollStatus2.innerHTML = parseFloat(number) + parseFloat(otherNumber);
    } else if (otherNumber === 4) {
        rollStatus2.innerHTML = parseFloat(number) + parseFloat(otherNumber);
    } else if (otherNumber === 5) {
        rollStatus2.innerHTML = parseFloat(number) + parseFloat(otherNumber);
    } else if (otherNumber === 6) {
        rollStatus2.innerHTML = parseFloat(number) + parseFloat(otherNumber);
    } else {
        alert('Dice chipped')
    }
}

function hold() {
    var number = document.getElementById('rollStatus2').innerHTML;
    totalStatus2.innerHTML = parseFloat(number);
    $(document).ready(function () {
        $('inactive1').show();
        alert('Values Held! It is now the other player\'s turn to try his/her luck and roll the dice!')
    })
}

function rollDice1(number) {
    var faceStatus1 = document.getElementById('faceStatus1');
    var rollStatus1 = document.getElementById('rollStatus1');
    var number = Math.floor(Math.random() * 6) + 1;
    faceStatus1.innerHTML = number;
    rollStatus1.innerHTML = number;
}
function rollAgain1() {
    var number = document.getElementById('rollStatus1').innerHTML;
    var otherNumber = Math.floor(Math.random() * 6) + 1;
    var rollStatus1 = document.getElementById('rollStatus1');
    rollStatus1.innerHTML = parseFloat(number) + parseFloat(otherNumber);
    faceStatus1.innerHTML = otherNumber;
    totalStatus1.innerHTML = rollStatus1.innerHTML;
    if (otherNumber === 1) {
        alert('Too bad, you rolled 1 so you get no points.');
        hold();
    } else if (otherNumber === 2) {
        rollStatus1.innerHTML = parseFloat(number) + parseFloat(otherNumber);
    } else if (otherNumber === 3) {
        rollStatus1.innerHTML = parseFloat(number) + parseFloat(otherNumber);
    } else if (otherNumber === 4) {
        rollStatus1.innerHTML = parseFloat(number) + parseFloat(otherNumber);
    } else if (otherNumber === 5) {
        rollStatus1.innerHTML = parseFloat(number) + parseFloat(otherNumber);
    } else if (otherNumber === 6) {
        rollStatus1.innerHTML = parseFloat(number) + parseFloat(otherNumber);
    } else {
        alert('Dice chipped')
    }
}
function hold_1() {
    var number = document.getElementById('rollStatus1').innerHTML;
    totalStatus1.innerHTML = parseFloat(number);
    $(document).ready(function () {
        $('inactive2').show();
        alert('Values Held! It is now the other player\'s turn to try his/her luck and roll the dice!')
    })
}