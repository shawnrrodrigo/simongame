var buttoncolors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedButton = [];
var level = 0;
var i = 0;
var started = false;
$(document).keydown(()=>{
    if(!started){
        nextSequence();
        started = true;
    }
    
    $("#level-title").text("Level "+level)
    
})

function nextSequence() {
    i = 0;
    level++;
    userClickedButton = []
    $("#level-title").text("Level "+level)

    var randomNumber = Math.floor(Math.random()*4)
    console.log(randomNumber)
    var randomChosenColour = buttoncolors[randomNumber]
    setTimeout(() => {
        
        $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }, 200);
    
    gamePattern.push(randomChosenColour);
    
    console.log(randomChosenColour)   
}

$(".btn").on("click", function(){   
    if(started){

        var userChosenColor = $(this).attr("id")
        userClickedButton.push(userChosenColor)
        playSound(userChosenColor)
        animatePress(userChosenColor)
        
        if(gamePattern[i] != userClickedButton[i]){
            $("#level-title").text("Game Over")
            started = false;
            level =0;
            gamePattern = []
            setTimeout(() => {
                $("#level-title").text("Press A Key to start")  
            }, 500);
            
            return;
        }

        if(i == gamePattern.length-1){
            nextSequence();
            return;
        }

        i++;
    }  
    
});

function playSound(color){
    var audio = new Audio("sounds/"+color+".mp3")
    audio.play();
}

function animatePress(color){
    $("."+color).addClass("pressed")
    setTimeout(() => {
        $("."+color).removeClass("pressed")
    }, 100);
}



