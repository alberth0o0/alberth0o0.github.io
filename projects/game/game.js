let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let pages = 0;
let position = "";
let visitedroom = false;
let visitedCouch = false;
let visitedFridge = false;
let visitedLab = false;
let hasKey = false;
let hasGum = false;
let metTobias = false;
//If you need, add any "helper" functions here

function pageCounter(){
    print("Pages collected: " + pages + "/3");
}

//Make one function for each location
function room() {
    clear();
    if (visitedroom === false) {
        print("\n\"WAKE UP!\" Anais wakes Gumball up and tells him to get ready for school. Gumball is still sleepy and doesn't want to get up.");
        print("\n\"5 more minutes!\" Gumball says. Anais rolls her eyes and tells him to get up now and get his 3 page essay ready to turn in.");
        print("\n\"Fine! It's in my backpack!\" Gumball says. He gets up and goes to his backpack to find his paper is not there.");
        print("\n\"Where is it?\" Gumball says. \"I know I put it in there!\" He starts to panic and looks around the room for it.");
        visitedroom = true;
    }
    if (visitedroom === true) {
        pageCounter();
        print("\n\"I know I put it in here!\" Gumball says. He starts to panic and looks around the room for it.");
    }

    print("\nWhere do you want to look for the paper? Say one of these choices:" +
        "\n\tdesk" +
        "\n\tcloset" +
        "\n\tliving room");
    
    function processInput(input){
        if (input.toLowerCase() === "desk") {
            desk();
        } 
        else if (input.toLowerCase() === "closet") {
            closet();
        }
        else if (input.toLowerCase() === "living room") {
            livingRoom();
        }
        else {
            stayHere();
            waitThenCall(room);
        }
    }
    waitForInput(processInput);

}

function desk() {
    clear();
    pageCounter();
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
    pageCounter();
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
    pageCounter();
    if (position === "kitchen" || position === "school") {
        print("\nGumball goes back to the living room.");
    }
    else{
        print("\nGumball slides down the stairs and goes to the living room.");
    }
    
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tunder the couch" +
        "\n\ton the table" +
        "\n\tkitchen" +
        "\n\tbedroom" +
        "\n\tschool");

    
    function processInput(input){
        if (input.toLowerCase() === "under the couch") {
            underTheCouch();
        } else if (input.toLowerCase() === "on the table") {
            onTheTable();
        } else if (input.toLowerCase() === "kitchen") {
            kitchen();
        } else if (input.toLowerCase() === "bedroom") {
            room();
        } else if (input.toLowerCase() === "school") {
            school();
        } else {
            stayHere();
            waitThenCall(livingRoom);
        }
    }
    waitForInput(processInput);
}

function underTheCouch() {
    clear();
    
    if (visitedCouch === false) {
        pages++;
        pageCounter();
        print("\nGumball looks under the couch and finds... his paper! \"Oh thank god! Is that... pizza grease on my paper? Great. My grade is now 40% pepperoni.\".");
        
        visitedCouch = true;
    }
    else if (visitedCouch === true) {
        pageCounter();

        print("\nGumball looks under the couch again and finds... nothing! \"Bro, I already looked here!\"");
    }
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\ton the table" +
        "\n\tbedroom" +
        "\n\tkitchen" +
        "\n\tschool");
    function processInput(input){
        if (input.toLowerCase() === "on the table") {
            onTheTable();
        } else if (input.toLowerCase() === "kitchen") {
            kitchen();
        } else if (input.toLowerCase() === "bedroom") {
            room();
        } 
        else if (input.toLowerCase() === "school") {
            school();
        }
        else {
            stayHere();
            waitThenCall(underTheCouch);
        }
    }
    waitForInput(processInput);
}

function onTheTable() {
    clear();
    pageCounter();
    print("\n\"Gumball I think it's here!\" Darwin says. Gumball comes over excited to find... Richard's thin sliced ham. \"Ugh, gross!\" Gumball says. \"I don't want to turn in a ham for my paper!\".");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tunder the couch" +
        "\n\tbedroom" +
        "\n\tkitchen" +
        "\n\tschool"); 
    function processInput(input){
        if (input.toLowerCase() === "under the couch") {
            underTheCouch(); 
        } else if (input.toLowerCase() === "bedroom") {
            room();
        } else if (input.toLowerCase() === "kitchen") {
            kitchen();
        } else if (input.toLowerCase() === "school") {
            school();
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
    pageCounter();
    position = "kitchen";
    print("\nGumball rushes over to the kitchen. \"We really need to clean this place...\"");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\ton the counter" +
        "\n\ton the fridge" +
        "\n\tliving room");
    function processInput(input){
        if (input.toLowerCase() === "on the counter") {
            onTheCounter();
        } else if (input.toLowerCase() === "on the fridge") {
            onTheFridge();
        } 
        else if (input.toLowerCase() === "living room") {
            livingRoom();
        }
        else {
            stayHere();
            waitThenCall(kitchen);
        }
    }
    waitForInput(processInput);
}

function onTheCounter() {
    clear();
    pageCounter();
    if (metTobias === false) {
        print("\nGumball looks on the oil covered counter. gulp.. \"I don't want to turn in a paper that smells like french fries.\" Gumball says.");
        print("thankfully, Gumball's paper is not on the counter.");
    }
    else if (metTobias === true && hasGum === false){
        print("\nGumball searches the counter again and finds GUM! \"Lemme get that!\" Gumball says.");
        hasGum = true;
    }
    else {
        print("\n\"I already got the gum and looked for my paper here.\"");
    }
    
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
    
    if (visitedFridge === false) {
        pages++;
        pageCounter();
        print("\nGumball takes a quick look on the fridge and finds... his paper! \"Why is my test stuck to the fridge?! Mom magnetized my future!\"");
        visitedFridge = true;
    }
    else if (visitedFridge === true) {
        pageCounter();
        print("\"I'm not that big back, man. I don't need to look here again.\"");
    }
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
    pageCounter();
    position = "school";
    if (metTobias === false) {
        print("\nGumball walks into school and sighs. \"There's no way my paper is here man...\"");
    }
    else if (metTobias === true && hasGum === false){
        print("\n\"I remember seeing gum in the kitchen before...\"");
    }
    else {
        print("\n\"Let's give this uggo his gum...\"");
    }
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tScience lab" +
        "\n\tBathroom" +
        "\n\tMs. Simian's class" +
        "\n\tGo home");
    function processInput(input){
        if (input.toLowerCase() === "science lab") {
            scienceLab();
        } else if (input.toLowerCase() === "bathroom") {
            bathroom();
        } else if (input.toLowerCase() === "ms. simian's class") {
            msSimianClass();
        } 
        else if (input.toLowerCase() === "go home") {
            livingRoom();
        }
        else {
            stayHere();
            waitThenCall(school);
        }
    }
    waitForInput(processInput);

}

function bathroom() {
    clear();
    pageCounter();
    if (metTobias === false) {
        print("\nGumball makes his way to the bathroom and looks around. \"What you lookin' for?\" Tobias says. \"My paper...\"\n\"Oh.. What a shame it would be if someone just left it in the science lab...\" Tobias says. Gumball looks at him and says \"You wouldn't do that to me, would you?\" Tobias just smirks and walks away.");
        print("\"HEY MAN WAIT! I NEED THIS PLEASE MAN.\" Tobias stops and looks at Gumball. \"Fine, but you gotta do something for me first.\" Tobias says. \"What?\" Gumball says. \"I need some gum.\" Tobias says.");
        print("\n\"Bro what.\" Gumball says. \"I gotta get the hot babes! My breath smells like a dead fish!\" Tobias says. Gumball is very confused and doesn't know what to do. \"Fine, I'll get some gum.\" Gumball says.");
        metTobias = true;
    }
    else if (metTobias === true && hasGum === false){
        print("\n\"Where's my gum man?\" Tobias says. \"No gum, no paper.\"");
    }
    else {
        print("\nAs Gumball enters the bathroom, Tobias' eyes lit up. \"You got the gum?\" Tobias says. Gumball hands him the gum. \"Pleasure doing business with you.\"");
        print("\nTobias takes the gum and gives Gumball a key. \"This is for the science lab.\"");
        hasKey = true;
    }
    print("\nPress `enter` to go back.");
    function processInput(input){
        school();
    }
    waitForInput(processInput);
}

function scienceLab() {
    clear();
    if (hasKey === false) {
        pageCounter();
        print("\n\"What the heck? Why is it locked?! I gotta find a key somehow.\"");
    }
    else {
        if (visitedLab === false) {
            pages++
            pageCounter();
            print("\nGumball uses the key to open the science lab and finds... his paper! \"YEAHHHHHHHHHHHHHHHHHHHHHH!\" His cries of joy blasted a shockwave that blew out all the windows in the school. \"I don't care! I found my paper!\"");
            visitedLab = true;
        }
        else {
            print("\n\"I've already found the page.. I don't think I'll ever bee in this room again unless it has explosives\"");
        }
    }
    print("\nPress `enter` to go back.");
    function processInput(input){
        school();
    }
    waitForInput(processInput);

}

function msSimianClass() {
    clear();
    if (pages < 3){
        pageCounter();
        print("\n\"I can't walk in here without my paper! I only got " + pages + " pages.\"");
        print("\nPress `enter` to go back.");
        function processInput(input){
            school();
        }
        waitForInput(processInput);
    }
    else {
        print("\nGumball walks into Ms. Simian's class relaxed and confident. \"Gumball, I see you have your paper!\" Ms. Simian says. \"Yes ma'am!\" Gumball says. \"Great! You can turn it in now.\" Ms. Simian says. Gumball turns in his paper and gets an A+! \"YESSSSSSSSSSSSSSSSSSSSSS!\" Gumball screams as he runs out of the classroom.");
        print("\nCongratulations! You win!");
        gameActive = false;
    }
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Collect all 3 of Gumball's essay pages he convinced his sister, Anais, to write before his class starts!" +
        "\nPress `enter` to start");

    function processInput(input){
            room();
    }
    waitForInput(processInput);
}