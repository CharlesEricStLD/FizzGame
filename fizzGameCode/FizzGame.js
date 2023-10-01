//Fizz Game Js//



function fizzGame () {
    window.addEventListener('DOMContentLoaded',() => {})


    let startingNumber;
    let activeNumber;
    let numberOfTurn;
    let i = 0;
    let error = 0;

    // function definition//
    
    // ask the user the first parameters//
    function firstStep () {
        startingNumber = (prompt("At witch number do you want to start?"));
            if (startingNumber - startingNumber != 0)
            {
                alert("You have enter a wrong number or nothing at all")
                firstStep();
            }
        numberOfTurn = parseInt(prompt("How many turn do you want to do?"));
        if (numberOfTurn - numberOfTurn != 0) 
        {
            alert("You have enter a wrong number or nothing at all")
            firstStep();
        }
        }
        
        function inputVerification(input) {
            //Check if the player write a valid input (Fizz, Buzz, the following number)
            let beforeNumber = startingNumber + i; 
            if ((Number.isInteger(input)) &&  ( ( (input - beforeNumber === 1) ||  (input - beforeNumber === -1) ) ) )   {
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
        
        
        function errorCheck() {
            
        }
        
    //END of function definition//

        //beguining of the Game\\
            firstStep();
            //  Check if the value is empty or wrong at the beguining//

        //At each turn******//
        for (i = 0; i <  numberOfTurn; i++) {
                if ( error === 1 ) 
                {
                    document.getElementById("gameOverTitle").innerHTML = "GAME OVER !";
                    document.getElementById("gameOverTitle").style.fontSize = "90px";
                    document.getElementById("gameOverTitle").style.color = "red";
                    break;
                }
                else {
                    //We ask to the user for the next number//
                    activeNumber = parseInt(prompt("Your turn! ENter the next number, but be carefull!"));
                    inputVerification(activeNumber);
                    alert("Good answer, we continue...");
                    //Check if the player is GameOVER//
                }

            };
        
        };
