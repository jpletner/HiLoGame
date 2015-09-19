$(document).ready(function() {

var secretNumber = Math.floor((Math.random() * 101) + 1);
var numAttempts = 0;
    
console.log(secretNumber);

    
$('.playBtn').hide();   

    
$('.guessBtn').click(function () {
    var guess = $('.textBox').val();
    numAttempts += 1;
    console.log(numAttempts);  
    
    if (guess == secretNumber) { 
        $('.response').text('You guessed right! Congrats!');
        $('.playBtn').show();
    }
     if (guess > secretNumber) { 
         $('.response').text('Too high. You have ' + (3-numAttempts) + ' tries available.');
         $('.playBtn').hide();
    }
    if (guess < secretNumber) { 
         $('.response').text('Too low. You have ' + (3-numAttempts) + ' more tries available.');
         $('.playBtn').hide();
    } 
    
 
    if (numAttempts == 3 && guess !== secretNumber) {
        $('.response').append(' Sorry. Game Over.');
        $('.playBtn').show();
    }
});

    

    
$('.playBtn').click(function() {
    location.reload(true);
});
     
 //To be able to click return key
    $('.txtBox').keydown(function(event) {
        if (event.keyCode == 13) {
            $('.guessBtn').trigger('click');

        }
    });
    

});  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    