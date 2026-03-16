let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let loop = 0;

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
                if (loop === 0) {
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
                } 
                
                else if (loop === 1) {
                    print("Your head shot up and your body was trembling. You touched your body for any injuries but you were completely fine.");
                    print("12:00AM, August 15th on the clock.\n. You look around and see the blue-ish moonlit room around you.\n\"What the heck... I already worked on these...\n\nWas that a dream?\"");
                    print("\n\nPress 'enter' to continue...");
                }
                },1000);
        },750);
    },750);
    
    function processInput(input){
        if (loop === 0) {
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
        else if (loop === 1) {
            if (input.toLowerCase() === "") {
                street();
            }
            else {
                stayHere();
                waitThenCall(room());
            }
        }

        
    }
    waitForInput(processInput);
}

function street() {
    clear();
    if (loop === 0) {
        print("You decide to take a walk to clear your head and get some fresh air. As you step outside, you feel the cool breeze on your face and the warmth of the sun on your skin. You take a deep breath and enjoy the moment.");
        print("The sun makes the day nice, but it's rays are piercing your skin a bit too much.");
        print("Amidst the heat, you see a ice cream shop across the street.\nDo you want to go get some (ice cream) or (keep walking)?");
    }
    else if (loop === 1) {
        print("You walk down the street with your ice cream in hand still processing the shock.");
        print("A kitten suddenly jumps out from behind a bush and startles you again.");
        print("\"I've seen you before...\" You say to yourself. You bend down and try to pet it, but it runs away.");
        print("You look to your left as the kitten ran across the crosswalk. You look to your right and see a truck speeding towards the kitten!");
        print("BAM! The truck swerves to avoid the kitten and crashes into the light pole");
        print("Do you (chase) the kitten or (call 911) for help?");
    }
    function processInput(input){
        if (loop === 0) {
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
        else if (loop === 1) {
            if (input.toLowerCase() === "chase") {
                crosswalk();
            }
            else if (input.toLowerCase() === "call 911") {
                clear();
                print("You quickly call 911 to report the accident. The operator asks for your location and details about the incident.");
                print("As you explain the situation, steel beams being carried by a crane above you SNAPS and falls on top of you.");
                loop += 1;
                print("Press 'enter' to continue...");
            
                gameActive = false;
            }
            else {
                stayHere();
                waitThenCall(street());
            } 
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
    if(loop === 0) {
        print("You decide to chase the kitten and follow it across the street. As you run after it, you see a truck speeding towards the kitten! You quickly jump out of the way just in time, but unfortunately, you sprain your ankle in the process.");
        print("The truck swerves back and forth. CRASH! The car hits a nearby light pole. Your heart races, trying to find any way out of this situation now with your ankle sprained.");
        print("You feel helpless. You turn to look to the truck and suddenly metal cylinders start falling out of the truck towards you. You close your eyes and braced.");
        loop += 1;
        print("Press 'enter' to continue...");
    }
    else if (loop === 1){
        print("You catch up with the cat and caught it in your arms. You look around and see the truck smoking and people gathering around it in the distance.");
        print("You want to go away from the situation as fast as possible.");
        print("Do you call a (taxi) or the (train)?");
    }

    function processInput(input){
        if (loop === 0) {
            if (input.toLowerCase() === "") {
                room();
            }
            else {
                stayHere();
                waitThenCall(crosswalk());
            }
        }
        else if (loop === 1) {
            if (input.toLowerCase() === "taxi") {
                clear();
                print("You called a taxi to take you away from the scene. You get in and give the driver your concert's location. As you drive away, you stroke the kitten's head and try to calm it down.");
                print("Staring out the window, you slowly close your eyes to get some rest from this traumatic experience.");
                setTimeout(function() {
                    print("...");
                    setTimeout(function() {
                        print("...");
                        setTimeout(function() {
                            print("\nWEE-WOO-WEE-WOO! You wake up to the sound of sirens");
                            print("You look out the window to see the situation you just left.");
                            print("Suddenly, BOOM! The truck explodes into flames, engulfing the sky with smoke and fire. You watched in horror.");
                            print("The taxi driver, startled, swerves into incoming traffic and crashes.");
                            gameActive = false;
                        },2000);
                    },2000);
                },2000);
            }
            else if (input.toLowerCase() === "train") {
                trainStation();
            }
            else {
                stayHere();
                waitThenCall(crosswalk());
            }
        }

    }
    waitForInput(processInput);
}

function trainStation() {
    clear();
    setTimeout(function() {
        print("You catch your breath by the stairs leading down to the train station.");
        print("After, the train comes just in time for you to hop on, taking you to your concert. The cat, still in your arms, purrs as you stroke its head.");
    },20000);
    concert();
}

function concert() {
    clear();
    print("\nYou arrive at your concert and get ready backstage. The cat sits on your dressing table as you pass out the plans you worked so hard on to your crew. You take a deep breath and prepare for the show.");
    print("The curtains open and the crowd goes wild. You perform your heart out, giving the best show of your life. The cat watches from the side of the stage, purring in approval.\n\"What a day...:\" You say to yourself as you take your final bow.");
    gameActive = false;
    //Good ending!
}

function start(){
    print("Press `enter` to start...");

    function processInput(input){
            room();
    }
    waitForInput(processInput);
}
