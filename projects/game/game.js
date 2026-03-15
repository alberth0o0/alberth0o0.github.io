let gameActive = true; //this variable is required. 


                       //to stop the game, set it to false.

//Declare your other global variables here
let knowledge = 0;

//If you need, add any "helper" functions here


//Make one function for each location
function room() {
    clear();
    print("\nBEEP!");
    setTimeout(function() {
        print(" BEEP!");
        setTimeout(function() {
            print(" BEEP!");
            setTimeout(function() {
                },1000);
        },500);
    },500);
    print("\nYou reluctantly throw your arms up to let your hand get in reach for your alarm clock. 12:00AM, August 15th on the clock.");
    print("\nYou slowly raise your head and rubbed your eyes, then looked at the blue-ish moonlit room around you.");
    print("\nYawwwwwwwn! After analyzing your surroundings, you look down to an absolute mess of stage plans, dance routines, and music sheets scattered all over the desk.");
    print("\n\"Oh shoot! It's my concert today!\" You exclaimed to yourself. \"I must've passed out working on these.. My gosh..\"");
    print("\nWith some coffee still left over in your cup by the top left corner of your desk, you continue working throughout the night.");
    
    print("\n\nPress `enter` to continue");
    function processInput(input){
        if (input.toLowerCase() === "") {
            print("\n\nAfter a while of planning, the sun's rays pierces through your window illuminating everything into visibility.");
            print("\nYou sit up from your chair and take a looooong stretch.");
            print("\n4PM August 15th. Time flies by..");
            print("\nYou feel a bit sleepy but know the show must go on..");
            print("\nShould you take a (walk) or (stay home)?");
        }
        function processInput2(input){
            if input
        else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nYou are in location B!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationA");
    
    function processInput(input){
        if (input.toLowerCase() === "locationa") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Dazey Daze\n\n");

    function processInput(input){
            room();
    }
    waitForInput(processInput);
}
