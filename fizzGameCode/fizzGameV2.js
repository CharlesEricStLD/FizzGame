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
    
        //Prompt user to enter a number//
        showInputMessage(firstInputMessage);
        const nextButton = document.querySelector("#nextButton");
        
        //listen to the number enter by the player//
        nextButton.addEventListener("click",() => {
                //loop for each turn of the game//
            for (let index = 0; index < numberOfTurnToPlay; index++) {
                
                //Condition to send the next message//
                if (index > 1) {
                    showInputMessage(nextInputMessage);
                } 

            let inputEnter = document.querySelector("#inputEnter");
            let input = parseInt(inputEnter.value);
            console.log(input);
            let error = inputVerification(input, index);

            // LAST STEP : Remove from screen the Input Message//
            if (error !== 1) {
                const inputMessage = document.querySelector("#inputMessage");
                inputMessage.remove();
            }
            else {
                showGameOver();
                return;
            }
        }
        });
        
        
    
}

function inputVerification(input,index) {
    //Check if the player write a valid input (Fizz, Buzz, the following number)
    let error = 0;
    let nextNumber = 0;
    nextNumber = index + 1;
    // let beforeNumber = startingNumber + index; 
    if (nextNumber % 3 === 0 && nextNumber % 5 === 0) {
        if (input !== "FizzBuzz") {
            return error = 1;
        }
    }    
    
    else if (nextNumber % 3 === 0)   {
        if (input !== "Fizz") {
            return error = 1;
        }
    }

    else if (nextNumber % 5 === 0) {
        if (input !== "Buzz") {
            return error = 1;
        }
    }

    else if (input !== nextNumber) {
        return error = 1;
    }
}
        
const showInputMessage = (textMessage) =>  {
    const body = document.querySelector("body");
    const divCreated = AddNodeToDOM("div",body);
    divCreated.setAttribute("id","inputMessage");
    const label = AddNodeToDOM("label",divCreated);
    label.textContent = textMessage;
    const input = AddNodeToDOM("input",divCreated);
    input.setAttribute("id","inputEnter");
    const nextButton = AddNodeToDOM("button",divCreated);
    nextButton.setAttribute("id","nextButton");
    nextButton.textContent = "Next";   
}

const showGameOver = () => {
    // body.innerText = "";
    gameOverTitle.textContent = "GAME OVER"
    gameOverTitle.style.display = "block";
    styleNode(gameOverTitle,gameOverTitleStyle);        
}




//------------------------END OF FUNCTION DEFINITION----------------/////
//-----Variable definition---/////
const body = document.querySelector("body");
const gameOverTitle = document.querySelector("#gameOverTitle");
const firstInputMessage = "We begin at 1, what is the next number";
const nextInputMessage = "The next number is ?";

const gameOverTitleStyle = {
    color:"red",
    fontSize: "11em",
    textAlign:"center",
    margin: "2%"
}



//Event listener for the Start button//




startButton.addEventListener("click",(launchGame));
    
