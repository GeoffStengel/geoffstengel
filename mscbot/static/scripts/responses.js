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
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Geoff-Bot Here 🤖 Beep boop bop!  Testing this out so can chat direct, but it's still in the works so bare with please thank you. Email directly to deeznuts@gmail.com(jk)🦧";
    }

}