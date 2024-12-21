




// Accept an input (Red, Yellow, Green) from the user.
// Use if conditions to display:
// "Stop" for Red
// "Slow Down" for Yellow
// "Go" for Green



var userInput = prompt ("Enter traffic Light Colors:")
if(userInput =="Red"){
    console.log("Stop");
}
else if(userInput =="Yellow" ){
    console.log("Slow Down")
}
else if(userInput == "Green"){
    console.log("Go")
}
else{
    console.log("Invalid Color")
}
