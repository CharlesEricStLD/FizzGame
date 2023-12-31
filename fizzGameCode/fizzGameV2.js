import {AddNodeToDOM,styleNode} from "./specialisedFunction.js"

//New updated version of Fizz game///

//Pseudo-code//
// 1.Add event listener to start button//
//  2.When start button push, show personalisez input message//
    //2.1 Code alert message //
    //2.1 Ask user to enter a number of turn to play and a number of turn.
        //(create node + styling)
        //2.1.1 : Input mesage =  DIv --> 2 TextInput --> h2 : + h2 //
        //2.1.2 : Get back the input enter in the form
    //2.2 : Loop ask user next number (...)
        // 2.2 condition... fizzGame, buzzz, buzzfizz
    //2.3: Throw GAME OVER -- Replace text with Game OVER body text OR personalised alert
    // 2.4 Throw WIN -- Replace text with Game OVER body text OR personalised alert
    //Add style.
//3 : Extra : 
    //Add timer 
    //Add level of difficulty//
    //Add life//

    //https://www.altcademy.com/blog/how-to-get-user-input-in-javascript///
    //https://www.google.com/search?q=Ask+input+to+the+user+J+S&sca_esv=569877865&ei=n7UZZYXMI4ep5NoPlPq02Aw&ved=0ahUKEwjFl-ncuNWBAxWHFFkFHRQ9DcsQ4dUDCBA&uact=5&oq=Ask+input+to+the+user+J+S&gs_lp=Egxnd3Mtd2l6LXNlcnAiGUFzayBpbnB1dCB0byB0aGUgdXNlciBKIFMyBRAhGKABMgUQIRigATIFECEYoAEyCBAhGBYYHhgdMggQIRgWGB4YHTIIECEYFhgeGB0yCBAhGBYYHhgdMggQIRgWGB4YHTIIECEYFhgeGB0yCBAhGBYYHhgdSLosUABYjCtwA3gAkAEAmAF7oAGmEqoBBDIzLjS4AQPIAQD4AQGoAgrCAhYQABgDGI8BGOUCGOoCGLQCGIwD2AEBwgIWEC4YAxiPARjlAhjqAhi0AhiMA9gBAcICCBAAGIoFGJECwgIREC4YgwEYxwEYsQMY0QMYgATCAg4QLhiABBixAxjHARjRA8ICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICCxAuGIAEGMcBGNEDwgILEAAYigUYsQMYgwHCAgcQABiKBRhDwgINEC4YigUYxwEY0QMYQ8ICDRAuGIoFGLEDGIMBGEPCAgsQLhiKBRixAxiDAcICCBAuGIAEGLEDwgILEC4YgAQYsQMYgwHCAhAQLhjHARixAxjRAxiKBRhDwgIREC4YigUYsQMYgwEYxwEYrwHCAgkQABiKBRgKGEPCAhAQLhiKBRixAxjHARjRAxhDwgIFEAAYgATCAgUQLhiABMICHBAuGIoFGMcBGNEDGEMYlwUY3AQY3gQY4ATYAQLCAgsQABgWGB4Y8QQYCsICBhAAGBYYHsICBxAAGA0YgATCAgYQABgeGA3CAggQABiKBRiGA8ICCBAAGBYYHhgPwgIHECEYoAEYCsICBBAhGBXCAgoQIRgWGB4YDxgd4gMEGAAgQYgGAboGBAgBGAq6BgYIAhABGBQ&sclient=gws-wiz-serp

//------------------------FUNCTION DEFINITION----------------------/////

document.getElementById("startButton").focus()

const launchGame = () => {
    let index = 1;
    const timetoWaitBeforeGameOver = 8000;

    //Creating the first input message//
    const startingForm =document.getElementById("userInput");
    startingForm.style.display = "none";
    const body = document.querySelector("body");
    const formCreated = AddNodeToDOM("form",body);
    formCreated.setAttribute("id","inputMessageContainer");
    const titleOverInput = AddNodeToDOM("h2",formCreated);
    titleOverInput.textContent = "We begin at 1, what is the next number";
    const nodeInput = AddNodeToDOM("input",formCreated);
    nodeInput.setAttribute("id","inputEnter");
    nodeInput.focus();
    const nextButton = AddNodeToDOM("button",formCreated);
    nextButton.setAttribute("type","submit");
    nextButton.textContent = "Next";   

    //Get the number of turn indicated by the user in the input//
    // let numberOfTurnToPlay = parseInt(numberOfTurn.value)+1; 
    let numberOfTurnToPlay = 5;

    //Add a Timeout of 8 second for the player to play//
    let gameOverTimer = setTimeout(()=> {
    showGameOver();
    },timetoWaitBeforeGameOver);

    //Create Next Button Event listener to listen to the click"
    let input;
    let error;
    let inputsArray = [1];
    //listen to the number enter by the player//
    nextButton.addEventListener("click",(submitEvent) => {
    input = nodeInput.value;

        //Store input in array to show it to player after///
        inputsArray.push(input);
        console.log(inputsArray);
        error = inputVerification(input.toLowerCase() , index);
        index++
    if (error !== 1) {
        clearTimeout(gameOverTimer);
        gameOverTimer = setTimeout(()=> {
            showGameOver();
            },timetoWaitBeforeGameOver);
        if (index > 1) {
            nodeInput.value ="";
            nodeInput.focus();
            titleOverInput.textContent = `You enter ${input}", now what is the next number?`
            }
        if (index === numberOfTurnToPlay)
        showYouWin();
    }
    else {
        showGameOver(inputsArray);
        return;
    }

    });    
}


function inputVerification(input,index) {
    //Check if the player write a valid input (Fizz, Buzz, the following number)
    let validationError = 0;
    let nextNumber = 1;
    nextNumber = index + 1;
    // let beforeNumber = startingNumber + index; 
    if (nextNumber % 3 === 0 && nextNumber % 5 === 0) {
        if (input !== "fizzbuzz") {
            return validationError = 1;
        }
    }    
    
    else if (nextNumber % 3 === 0)   {
        if (input !== "fizz") {
            return validationError = 1;
        }
    }

    else if (nextNumber % 5 === 0) {
        if (input !== "buzz") {
            return validationError = 1;
        }
    }

    else if (parseInt(input) !== nextNumber) {
        return validationError = 1;
    }
}

const showGameOver = (arrayToshow) => {
    const beforeGameOver = document.querySelector("#beforeGameOver");
    beforeGameOver.textContent = " ";
    const inputMessageContainer = document.querySelector("#inputMessageContainer");
    inputMessageContainer.remove();
    gameOverTitle.textContent = "GAME OVER"
    gameOverTitle.style.display = "block";
    styleNode(gameOverTitle,gameOverTitleStyle);  
    const progessionShow = document.createElement("p");
    progessionShow.classList.add("progression");
    progessionShow.textContent = " Here's your progression [" + arrayToshow + "]";
    body.append(progessionShow);
    const playAgainButton = document.createElement("button");
    playAgainButton.classList.add("playAgain");
    playAgainButton.textContent = "Play Again?";
    body.append(playAgainButton);
    playAgainButton.addEventListener("click", ()=>(location.reload()) );
}

const showYouWin = () => {
    const beforeGameOver = document.querySelector("#beforeGameOver");
    beforeGameOver.textContent = " ";
    const inputMessageContainer = document.querySelector("#inputMessageContainer");
    inputMessageContainer.remove();
    gameOverTitle.textContent = "YOU WIN!"
    gameOverTitle.style.display = "block";
    styleNode(gameOverTitle,youWinStyle);
    const progessionShow = document.createElement("p");
    progessionShow.classList.add("progression");
    progessionShow.textContent = " Here's your progression [" + inputsArray + "]";
    body.append(progessionShow);
    const playAgainButton = document.createElement("button");
    playAgainButton.classList.add("playAgain");
    playAgainButton.textContent = "Play Again?";
    body.append(playAgainButton);
    playAgainButton.addEventListener("click", ()=>(location.reload()) );
    
}


//------------------------END OF FUNCTION DEFINITION----------------/////
//-----Variable definition---/////
const body = document.querySelector("body");
const gameOverTitle = document.querySelector("#gameOverTitle");

const gameOverTitleStyle = {
    color:"red",
    fontSize: "8em",
    textAlign:"center",
    margin: "2%"
}

const youWinStyle = {
    color:"green",
    fontSize: "8em",
    textAlign:"center",
    margin: "2%"
}


//Event listener for the Start button//

startButton.addEventListener("click",(launchGame));

