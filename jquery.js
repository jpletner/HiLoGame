$(document).ready(function() {
var secretNumber = Math.floor((Math.random() * 101) + 1);
var numAttempts = 0;
    
console.log(secretNumber);
 $('.game').hide();
 $('.responseHeader').hide();
 $('.tryAgainBtn').hide();
    
$('.playBtn').click(function() {
    $('.game').show();
    $('.coverPage').hide();
});

$('#guessBtn').click(function () {
    var guess = $('#txtBox').val();
    numAttempts += 1;
    console.log(numAttempts);  
    
    if (guess == secretNumber) { 
        $('.responseHeader').text('You guessed right! Congrats!').show();
    } else if (guess > secretNumber) { 
        $('.responseHeader').text('Too high. Lives = ' + (7-numAttempts)).show();
    } else if (guess < secretNumber) { 
         $('.responseHeader').text('Too low. Lives = ' + (7-numAttempts)).show();
    } 
    
 
    if (numAttempts == 7 && guess !== secretNumber) {
        $('.responseHeader2').text('Game Over');
        $('.tryAgainBtn').show();
    } else if (numAttempts == 7 && guess == secretNumber) {
        $('.responseHeader2').text ('You guessed right! Congrats!');
        $('.tryAgainBtn').show();
    }

});


$('.tryAgainBtn').click(function() {
        $('.coverPage').show();
        $('.game').hide();
        $('.responseHeader').hide();
        $('.responseHeader2').hide();
        $('.tryAgainBtn').hide();
});
     
//To be able to click return key for play button
    
$(document).bind('keypress', function(e) {
            if(e.keyCode==13){
                 $('.playBtn').trigger('click');
             }
});


});  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    