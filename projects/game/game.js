let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let pages = 0;

//If you need, add any "helper" functions here

//Make one function for each location
function room() {
    clear();
    print("\n\"WAKE UP!\" Anais wakes Gumball up and tells him to get ready for school. Gumball is still sleepy and doesn't want to get up.");
    print("\n\"5 more minutes!\" Gumball says. Anais rolls her eyes and tells him to get up now and get his paper ready to turn in.");
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
    moved --;
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
    moved --;
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
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            room();
    }
    waitForInput(processInput);
}