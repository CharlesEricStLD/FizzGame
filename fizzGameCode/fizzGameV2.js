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

const launchGame = () => {

    //Get the number of turn indicated by the user in the input//
    let numberOfTurnToPlay = parseInt(numberOfTurn.value); 

    //loop for each turn of the game//
    
        //Prompt user to enter a number//
        showInputMessage();
        const nextButton = document.querySelector("#nextButton");
        //listen to the number enter by the player//
        nextButton.addEventListener("click",() => {
            for (let index = 0; index < numberOfTurnToPlay; index++) {
            let inputEnter = document.querySelector("#inputEnter");
            let input = inputEnter.value;
            console.log(input);
            // inputVerification(input);
            const inputMessage = document.querySelector("#inputMessage");
            inputMessage.remove;
        }
        });
        
        
    
}

function inputVerification(input,index) {
    //Check if the player write a valid input (Fizz, Buzz, the following number)
    let startingNumber = 1;
    let nextNumber = startingNumber + index;
    // let beforeNumber = startingNumber + index; 
    if (nextNumber % 3 === 0 && nextNumber % 5 === 0) {
        if (input !== "FizzBuzz") {
        }
        
    }    
    
    if (input - beforeNumber === 1)   {
        if ( (input % 3 === 0) || (input % 5 === 0)) {
                alert("GAMEOVER!");
                error = 1;   
        }

        else if ((input % 3 != 0) || (input % 5 != 0)) {
        //Do nothing, on continue//
        }
        else if (((input === "Fizz" || "fizz") && ((beforeNumber + 1) % 3 === 0)) 
        || ((input === "Buzz" || "buzz") && ((beforeNumber + 1) % 5 === 0)) ) {
        //continue and do nothing//
        }
        else {
                alert("GAMEOVER!");
                error = 1;
            }
    }

    else if  (((input === "Fizz" || "fizz") && ((beforeNumber + 1) % 3 === 0)) || ((input === "Buzz" || "buzz") && ((beforeNumber + 1) % 5 === 0)) ) {
    //Continue and do nothing//
    }

    
    else{
        alert("GAMEOVER!");
        error = 1;
    }
}

const showInputMessage = () =>  {
    const body = document.querySelector("body");
    const divCreated = AddNodeToDOM("div",body);
    divCreated.setAttribute("id","inputMessage");
    const label = AddNodeToDOM("label",divCreated);
    label.textContent = "We begin at 1, what is the next number";
    const input = AddNodeToDOM("input",divCreated);
    input.setAttribute("id","inputEnter");
    const nextButton = AddNodeToDOM("button",divCreated);
    nextButton.setAttribute("id","nextButton");
    nextButton.textContent = "Next";   
}

const showGameOver = () => {
    body.innerText = "";
    gameOverTitle.textContent = "GAME OVER"
    gameOverTitle.style.display = block;
    styleNode(gameOverTitle,gameOverTitleStyle);        
}




//------------------------END OF FUNCTION DEFINITION----------------/////
//-----Variable definition---/////
const body = document.querySelector("body");
const gameOverTitle = document.querySelector("#gameOverTitle");

const gameOverTitleStyle = {
    color:"red",
    fontSize: "11em",
    textAlign:"center",
    margin: "2%"
}



//Event listener for the Start button//




startButton.addEventListener("click",(launchGame));
    
