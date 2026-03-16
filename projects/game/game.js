let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let pages = 0;
let hasKey = false;
let hasGum = false;
let metTobias = false;
//If you need, add any "helper" functions here

//Make one function for each location
function room() {
    clear();
    print("\n\"WAKE UP!\" Anais wakes Gumball up and tells him to get ready for school. Gumball is still sleepy and doesn't want to get up.");
    print("\n\"5 more minutes!\" Gumball says. Anais rolls her eyes and tells him to get up now and get his 3 page essay ready to turn in.");
    print("\n\"Fine! It's in my backpack!\" Gumball says. He gets up and goes to his backpack to find his paper is not there.");
    print("\n\"Where is it?\" Gumball says. \"I know I put it in there!\" He starts to panic and looks around the room for it.");
    print("\nWhere do you want to look for the paper? Say one of these choices:" +
        "\n\tdesk" +
        "\n\tcloset" +
        "\n\tliving room");
    
    function processInput(input){
        if (input.toLowerCase() === "desk") {
            desk();
        } else {
            stayHere();
            waitThenCall(room);
        }
    }
    waitForInput(processInput);
}

function desk() {
    clear();
    print("\nGumball looks in his desk to find... nothing! \"WHAT THE WHAT?!\" He is very confused and starts to panic more.");
    print("\nWhere do you want to look for the paper? Say one of these choices:" +
        "\n\tcloset" +
        "\n\tliving room");
    function processInput(input){
        if (input.toLowerCase() === "closet") {
            closet();
        } else if (input.toLowerCase() === "living room") {
            livingRoom();
        } else {
            stayHere();
            waitThenCall(desk);
        }
    }
    waitForInput(processInput);
}

function closet() {
    clear();
    print("\nGumball looks in the closet to find... nothing! \"Bro.. This isn't funny.\" He is very confused and starts to panic more.");
    print("\nWhere do you want to look for the paper? Say one of these choices:" +
        "\n\tdesk" +
        "\n\tliving room");
    function processInput(input){
        if (input.toLowerCase() === "desk") {
            desk();
        } else if (input.toLowerCase() === "living room") {
            livingRoom();
        } else {
            stayHere();
            waitThenCall(closet);
        }
    }
    waitForInput(processInput); 
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function livingRoom() {
    clear();
    print("\nGumball slides down the stairs and goes to the living room.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tunder the couch" +
        "\n\ton the table" +
        "\n\tkitchen" +
        "\n\tschool");

    
    function processInput(input){
        if (input.toLowerCase() === "under the couch") {
            underTheCouch();
        } else if (input.toLowerCase() === "on the table") {
            onTheTable();
        } else if (input.toLowerCase() === "kitchen") {
            kitchen();
        } else {
            stayHere();
            waitThenCall(livingRoom);
        }
    }
    waitForInput(processInput);
}

function underTheCouch() {
    clear();
    print("\nGumball looks under the couch and finds... his paper! \"Oh thank god! Is that... pizza grease on my paper? Great. My grade is now 40% pepperoni.\".");
    pages++;
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\ton the table" +
        "\n\tkitchen");
    function processInput(input){
        if (input.toLowerCase() === "on the table") {
            onTheTable();
        } else if (input.toLowerCase() === "kitchen") {
            kitchen();
        } else {
            stayHere();
            waitThenCall(underTheCouch);
        }
    }
    waitForInput(processInput);
}

function onTheTable() {
    clear();
    print("\n\"Gumball I think it's here!\" Darwin says. Gumball comes over excited to find... Richard's thin sliced ham. \"Ugh, gross!\" Gumball says. \"I don't want to turn in a ham for my paper!\".");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tunder the couch" +
        "\n\tkitchen"); 
    function processInput(input){
        if (input.toLowerCase() === "under the couch") {
            underTheCouch(); 
        } else if (input.toLowerCase() === "kitchen") {
            kitchen();
        } else {
            stayHere();
            waitThenCall(onTheTable);
        }
    }
    waitForInput(processInput);
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function kitchen() {
    clear();
    print("\nGumball rushes over to the kitchen. \"We really need to clean this place...\"");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\ton the counter" +
        "\n\ton the fridge");
    function processInput(input){
        if (input.toLowerCase() === "on the counter") {
            onTheCounter();
        } else if (input.toLowerCase() === "on the fridge") {
            onTheFridge();
        } else {
            stayHere();
            waitThenCall(kitchen);
        }
    }
    waitForInput(processInput);
}

function onTheCounter() {
    clear();
    print("\nGumball looks on the oil covered counter. gulp.. \"I don't want to turn in a paper that smells like french fries.\" Gumball says.");
    print("thankfully, Gumball's paper is not on the counter.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\ton the fridge" +
        "\n\tliving room");
    function processInput(input){
        if (input.toLowerCase() === "on the fridge") {
            onTheFridge();
        } else if (input.toLowerCase() === "living room") {
            livingRoom();
        } else {
            stayHere();
            waitThenCall(onTheCounter);
        }
    }
    waitForInput(processInput);
}

function onTheFridge() {
    clear();
    print("\nGumball takes a quick look on the fridge and finds... his paper! \"Why is my test stuck to the fridge?! Mom magnetized my future!\"");
    pages++;
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\ton the counter" +
        "\n\tliving room");
    function processInput(input){
        if (input.toLowerCase() === "on the counter") {
            onTheCounter();
        } else if (input.toLowerCase() === "living room") {
            livingRoom();
        } else {
            stayHere();
            waitThenCall(onTheFridge);
        }
    }
    waitForInput(processInput);
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function school() {
    clear();
    if (metTobias === false) {
        print("\nGumball walks into school and sighs. \"There's no way my paper is here man...\"");
    }
    else if (metTobias === true && hasGum === false){
        print("\n\"I remember seeing gum in the kitchen before...\"");
    }
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tScience lab" +
        "\n\tBathroom" +
        "\n\tMs. Simian's class" +
        "\n\tLiving room");
    function processInput(input){
        if (input.toLowerCase() === "science lab") {
            scienceLab();
        } else if (input.toLowerCase() === "bathroom") {
            bathroom();
        } else if (input.toLowerCase() === "ms. simian's class") {
            msSimianClass();
        } else {
            stayHere();
            waitThenCall(school);
        }
    }
    waitForInput(processInput);

}

function bathroom() {
    clear();
    print("\nGumball makes his way to the bathroom and looks around. \"What you lookin' for?\" Tobias says. \"My paper...\"\n\"Oh.. What a shame it would be if someone just left it in the science lab...\" Tobias says. Gumball looks at him and says \"You wouldn't do that to me, would you?\" Tobias just smirks and walks away.");
    print("\"HEY MAN WAIT! I NEED THIS PLEASE MAN.\" Tobias stops and looks at Gumball. \"Fine, but you gotta do something for me first.\" Tobias says. \"What?\" Gumball says. \"I need some gum.\" Tobias says.");
    print("\n\"Bro what.\" Gumball says. \"I gotta get the hot babes! My breath smells like a dead fish!\" Tobias says. Gumball is very confused and doesn't know what to do. \"Fine, I'll get some gum.\" Gumball says.");
    print("\nPress any key to go back.");
    function processInput(input){
        school();
    }
    waitForInput(processInput);
}

function scienceLab() {
    clear();
    if (hasKey === false) {
        print("\n\"What the heck? Why is it locked?! I gotta find a key somehow.\"");
    }
    else {
        print("\nGumball uses the key to open the science lab and finds... his paper! \"YEAHHHHHHHHHHHHHHHHHHHHHH!\" His cries of joy blasted a shockwave that blew out all the windows in the school. \"I don't care! I found my paper!\"");
        pages++;
    }
    print("\nPress any key to go back.");
    function processInput(input){
        school();
    }
    waitForInput(processInput);

}


//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            room();
    }
    waitForInput(processInput);
}