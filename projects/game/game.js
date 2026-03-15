let gameActive = true; //this variable is required. 


                       //to stop the game, set it to false.

//Declare your other global variables here
let knowledge = 0;

//If you need, add any "helper" functions here


//Make one function for each location
function room() {
    clear();
    print("BEEP!");
    setTimeout(function() {
        print(" BEEP!");
        setTimeout(function() {
            print("  BEEP!");
            setTimeout(function() {
                print("You reluctantly throw your arms up to let your hand get in reach for your alarm clock. 12:00AM, August 15th.");
                print("You slowly raise your head and rubbed your eyes, then looked at the blue-ish moonlit room around you.");
                print("Yawwwwwwwn! After analyzing your surroundings, you look down to an absolute mess of stage plans, dance routines, and music sheets scattered all over the desk.");
                print("\"Oh shoot! It's my concert today!\" You exclaimed to yourself. \"I must've passed out working on these.. My gosh..\"");
                print("With some coffee still left over in your cup by the top left corner of your desk, you continue working throughout the night.");
    
                print("\n\nAfter a while of planning, the sun's rays pierces through your window illuminating everything into visibility.");
                print("You sit up from your chair and take a looooong stretch.");
                print("4PM August 15th. Time flies by..");
                print("You feel a bit sleepy but know the show must go on..");
                print("Should you take a (walk) or (stay home)?");
                },1000);
        },750);
    },750);
    
    function processInput(input){
        if (input.toLowerCase() === "walk") {
            street();
        }

        else if (input.toLowerCase() === "stay home") {
            clear();
            print("You decide to stay home and take a little nap as a reward for your hard work (you did stay up all night after all).");
            setTimeout(function() {
                print("...");
                setTimeout(function() {
                    print("...");
                    setTimeout(function() {
                        print("\nYou wake up and realize you have a concert to perform in a few hours. You quickly get ready and rush out the door, but unfortunately, you missed your show.");
                        print("Better luck next time!");
                        gameActive = false;
                    },2000);
                },2000);
            },5000);
        }
        else {
            stayHere();
            waitThenCall(room);
        }
        
    }
    waitForInput(processInput);
}

function street() {
    clear();
    print("You decide to take a walk to clear your head and get some fresh air. As you step outside, you feel the cool breeze on your face and the warmth of the sun on your skin. You take a deep breath and enjoy the moment.");
    print("The sun makes the day nice, but it's rays are piercing your skin a bit too much.");
    print("Amidst the heat, you see a ice cream shop across the street.\nDo you want to go get some (ice cream) or (keep walking)?");
    
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
    print("Press `enter` to start...");

    function processInput(input){
            room();
    }
    waitForInput(processInput);
}
