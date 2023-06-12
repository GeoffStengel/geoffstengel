function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "Hello") {
        return "Hello there!";        
    } else if (input == "hi") {
        return "What's shakin Bacon!";
    } else if (input == "Hi") {
        return "What's shakin Bacon!";        
    } else if (input == "great") {
        return "What can i help ya with!";
    } else if (input == "Great") {
        return "What can i help ya with!";        
    } else if (input == "good") {
        return "What can i help ya with!";
    } else if (input == "Thank you") {
        return "Thank you as well Enjoy the day!!";
    } else if (input == "thank you") {
        return "Thank you as well Enjoy the day!!";
    } else if (input == "thanks") {
        return "Thank you as well Enjoy the day!!";
    } else if (input == "Thanks") {
        return "Thank you as well Enjoy the day!!";                                                
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "Goodbye") {
        return "Talk to you later!";            
    } else {
        return "Geoff-Bot Here 🤖 Beep boop bop!  Testing this out so can chat direct, still in the works bare with please! </br> Thank you 🙏🏽 </br> </br> 💻 Website Clients Read This Blog /blogs/website_info.html  </br> </br> For all else, Lets Play Rock Paper Scissors!!";
    }

}