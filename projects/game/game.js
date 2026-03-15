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
            waitThenCall(room());
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
        if (input.toLowerCase() === "ice cream") {
            iceCreamShop();
        } 
        else if (input.toLowerCase() === "keep walking") {
            clear();
            print("You decide to keep walking and endure the heat for a bit longer. Soon  you realize you can't take it much longer and head back home to cool down.");
            print("Exhausted, you take a nice, cool shower. You lose track of time and before you know it, it's 7PM. You missed your show.");
            gameActive = false;
        }
        else {
            stayHere();
            waitThenCall(street());
        }
        
    }
    waitForInput(processInput);
}

function iceCreamShop() { 
    clear();
    print("You decide to go get some ice cream to cool down. As you enter the shop, the sweet aroma of freshly made waffle cones fills the air. You look at the menu and see a variety of flavors to choose from. You decide to go with a classic vanilla cone and walk out the store.");
    print("\"Thank you!\" You say to the cashier as you leave. You take a few licks of your ice cream, savoring the cool treat.");
    print("As you continue walking, a cat suddenly jumps out from behind a bush and startles you.");
    print("Processing the shock, you see the cat is actually a cute little kitten. You bend down and try to pet it, but it runs away.");
    print("Should you (chase) the kitten or (ignore) it and continue walking?");

    function processInput(input){
        if (input.toLowerCase() === "chase") {
            crosswalk();
        }
        else if (input.toLowerCase() === "ignore") {
            clear();
            print("You decide to ignore the kitten and continue walking. As you walk, you feel more relaxed, but you lose yourself in thought and before you know it, it's 7PM. You missed your show.");
            gameActive = false;
        }
        else {
            stayHere();
            waitThenCall(iceCreamShop());
        }
    }
    waitForInput(processInput);
}

function crosswalk() {
    clear();
    print("You decide to chase the kitten and follow it across the street. As you run after it, you see a truck speeding towards the kitten! You quickly jump out of the way just in time, but unfortunately, you sprain your ankle in the process.");
    print("The truck swerves back and forth. CRASH! The car hits a nearby light pole. Your heart races, trying to find any way out of this situation now with your ankle sprained.");
    print("You feel helpless. You turn to look to the truck and suddenly metal cylinders start falling out of the truck towards you. You close your eyes and braced.");
    knowledge += 1;
    print("Press 'enter' to continue...");

    function processInput(input){
        if (input.toLowerCase() === "") {
            room();
        }
        else {
            stayHere();
            waitThenCall(crosswalk());
        }
    }
    waitForInput(processInput);
}

function start(){
    print("Press `enter` to start...");

    function processInput(input){
            room();
    }
    waitForInput(processInput);
}
