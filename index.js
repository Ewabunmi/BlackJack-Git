
// Section 3: Building a Blackjack Game
// Lesson 11: Link to stylesheet,, u have to use html and css so that users can play it

// let firstCard = 10
// let secondCard = 4
//  let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""

// // 2. Create a startGame() function. Move the conditional
// //below (line 11-20) inside the body of the function.
// //The below code is run when the body is clicked

// function startGame() {

// if (sum <= 20) {
//     message = "Do you want to draw a new card?"
    
//     } else if (sum === 21) {
//     message = "Wohoo! You've got Blackjack!"
//     hasBlackJack = true

//     } else  {
//     message = "You're out of the game!"
//     isAlive = false

//     }
//     console.log(message)
//    MessageEl.textContent = message
    
//     }
    
//     function newCard() {
//         let card = getRandomCard()
//         sum += card
//         card.push(card)
//         renderGame()
 //   }
// Section 3: Building a Blackjack Game
// Lesson 12: Add Basic styling
//This works with css

// Section 3: Building a Blackjack Game
// Lesson 13: Make the start button work

// Section 3: Building a Blackjack Game
// Lesson 14: Display the message

// let firstCard = 10
// let secondCard = 4
//  let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""

// // 1. Store the message-el paragraph in a variable called messageEl
// let messageEl = document.getElementById("message-el")
// console.log(messageEl)

// function startGame() {

// if (sum <= 20) {
//     message = "Do you want to draw a new card?"
    
//     } else if (sum === 21) {
//     message = "You've got Blackjack!"
//     hasBlackJack = true

//     } else  {
//     message = "You're out of the game!"
//     isAlive = false

//     }
//     // 2. Display the message in the messageEl using messageEl.textContent

//     //console.log(message)// so we delete d console log cos we want the message to pop up on screen not in the console.

//    messageEl.textContent = message
    
//     }
    

    // Section 3: Building a Blackjack Game
     // Lesson 14: Display the sum
     //lets make our game a little more useful



//  let firstCard = 10
//  let secondCard = 4
//  let sum = firstCard + secondCard 
//  let hasBlackJack = false
//  let isAlive = true
//  let message = ""
//  let messageEl = document.getElementById("message-el")
//  let sumEl = document.getElementById("sum-el")

// // 1. Store the message-el paragraph in a variable called messageEl


// console.log(message)
//  console.log(sumEl)

//  function startGame() {
//     // 2. Render the sum on the page using this format -> "Sum: 14"

//     sumEl.textContent = "Sum: " + sum
//    if (sum <= 20) {
//     message = "Do you want to draw a new card?"
    
//      } else if (sum === 21) {
//      message = "You've got Blackjack!"
//     hasBlackJack = true

//      } else  {
//      message = "You're out of the game!"
//      isAlive = false

//    }
// //    // 2. Display the message in the messageEl using messageEl.textContent

//      //console.log(message)// so we delete d console log cos we want the message to pop up on screen not in the console.

//      messageEl.textContent = message
    
//     }



// Another way of grabbing element from the DOM USING QUERY SELECTOR



//  let firstCard = 10
//  let secondCard = 4
//  let sum = firstCard + secondCard 
//  let hasBlackJack = false
//  let isAlive = true
//  let message = ""
//  let messageEl = document.getElementById("message-el")
//  let sumEl = document.getElementById("sum-el")


// Another way of grabbing element from the DOM USING QUERY SELECTOR
 //let sumEl = document.querySelector("#sum-el") // the # means that this QS 
 //comes in form of an ID, the second way u can use query selector is coded below.
 //let sumEl = document.querySelector(".sum-el") //You are replacing the hashtag
 // With a dot because ure using class. i.e d way to select css classes is 
 //by using the dot.

// 1. Store the message-el paragraph in a variable called messageEl


// console.log(message)
//  console.log(sumEl)

//  function startGame() {
//     // 2. Render the sum on the page using this format -> "Sum: 14"

//     sumEl.textContent = "Sum: " + sum
//    if (sum <= 20) {
//     message = "Do you want to draw a new card?"
    
//      } else if (sum === 21) {
//      message = "You've got Blackjack!"
//     hasBlackJack = true

//      } else  {
//      message = "You're out of the game!"
//      isAlive = false

//    }
//    // 2. Display the message in the messageEl using messageEl.textContent

     //console.log(message)// so we delete d console log cos we want the message to pop up on screen not in the console.

    //  messageEl.textContent = message
    
    // }





  // Section 3: Building a Blackjack Game
    // Lesson 14: Display the cards



    // let firstCard = 10
    // let secondCard = 4
    // let sum = firstCard + secondCard 
    // let hasBlackJack = false
    // let isAlive = true
    // let message = ""
    // let messageEl = document.getElementById("message-el")

    // let sumEl = document.getElementById("sum-el") 
    // 2. Store the cards paragraph in a variable called cardsEl
//     let cardsEl = document.getElementById("cards-el") 
   
//    console.log(message)
//     console.log(sumEl)
   
//     function startGame() {
//        // 2. Render the cars on the page using this format -> "Cards: 10 4"
//        cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
//        sumEl.textContent = "Sum: " + sum
//       if (sum <= 20) {
//        message = "Do you want to draw a new card?"
       
//         } else if (sum === 21) {
//         message = "You've got Blackjack!"
//        hasBlackJack = true
   
//         } else  {
//         message = "You're out of the game!"
//         isAlive = false
   
//       }
//    // 2. Display the message in the messageEl using messageEl.textContent
   
//         //console.log(message)// so we delete d console log cos we want the message to pop up on screen not in the console.
   
//         messageEl.textContent = message
       
//        }


   
     // Section 3: Building a Blackjack Game
       // Lesson 17; New Card button


//  let firstCard = 10
//     let secondCard = 4
//     let sum = firstCard + secondCard 
//     let hasBlackJack = false
//     let isAlive = true
//     let message = ""
//     let messageEl = document.getElementById("message-el")


//     let sumEl = document.getElementById("sum-el") 
//     // 2. Store the cards paragraph in a variable called cardsEl
//     let cardsEl = document.getElementById("cards-el") 
   
//    console.log(message)
//     console.log(sumEl)
   
//     function startGame() {
//        // 2. Render the cars on the page using this format -> "Cards: 10 4"
//        cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
//        sumEl.textContent = "Sum: " + sum
//       if (sum <= 20) {
//        message = "Do you want to draw a new card?"
       
//         } else if (sum === 21) {
//         message = "You've got Blackjack!"
    //    hasBlackJack = true
   
    //     } else  {
    //     message = "You're out of the game!"
    //     isAlive = false
    //   }
    //     messageEl.textContent = message
    //    }
    //   //2. Create a function newCard that logs out "Drawing a new card from the deck!"
    //    function newCard() {
    //    console.log("Drawing a new card from the deck!")
    //    //Create a card variable, and hard coe its value to a number (2-11)
    //    let card = 7 // if unuse 8 or any number that makes the calculation greater than 21 jackpot
    //    //Will say ure out of the game.
    //    //2. Add the new card to the sum variable
    //    sum += card
    //    //3. call startGame
    //    startGame()
    //    }


     // Section 3: Building a Blackjack Game
       // Lesson 18; Add to the sum when newCard is clicked

//Create a card variable, and hard coe its value to a number (2-11)

//2. Add the new card to the sum variable
//3. call startGame
//check 273 for d codes





     // Section 3: Building a Blackjack Game
       // Lesson 19; Rename the startGame function

// Create a new function called startGame() that calls renderGame()


    //    let firstCard = 10
    //    let secondCard = 4
    //    let sum = firstCard + secondCard 
    //    let hasBlackJack = false
    //    let isAlive = true
    //    let message = ""
    //    let messageEl = document.getElementById("message-el")

   
    //    let sumEl = document.getElementById("sum-el") 
    //    // 2. Store the cards paragraph in a variable called cardsEl
    //    let cardsEl = document.getElementById("cards-el") 

    // // Create a new function called startGame() that calls renderGame()
    //    function startGame() {
    //     renderGame()
    //    }
      
      
    //    function renderGame() {
    //       // 2. Render the cars on the page using this format -> "Cards: 10 4"
    //       cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    //       sumEl.textContent = "Sum: " + sum
    //      if (sum <= 20) {
    //       message = "Do you want to draw a new card?"
          
    //        } else if (sum === 21) {
    //        message = "You've got Blackjack!"
    //       hasBlackJack = true
      
    //        } else  {
    //        message = "You're out of the game!"
    //        isAlive = false
    //      }
    //        messageEl.textContent = message
    //       }
    //      //2. Create a function newCard that logs out "Drawing a new card from the deck!"
    //       function newCard() {
    //       console.log("Drawing a new card from the deck!")
    //       //Create a card variable, and hard coe its value to a number (2-11)
    //       let card = 7 
    //       sum += card
          //3. call startGame
        //   renderGame()
        //   }
   




     // Section 3: Building a Blackjack Game
    // Lesson 20; Solving our cards problem with an array

//Now we need to fix up the rendering of f cards

// let firstCard = 10
// let secondCard = 4
// //We need to store all our cards in a variable and we do this by Array []
// let cards = [firstCard, secondCard] //A card array that includes both cards/ ordered list of first cards
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") 
// let cardsEl = document.getElementById("cards-el") 

// function startGame() {
//  renderGame()
// }

// function renderGame() {
//    //render out firstCard and secondCard
//    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]  //card 0 & 1 is referring to fCard and Scard respectively.

//    // render out ALL the cards we have
//    sumEl.textContent = "Sum: " + sum
//   if (sum <= 20) {
//    message = "Do you want to draw a new card?"
   
//     } else if (sum === 21) {
//     message = "You've got Blackjack!"
//    hasBlackJack = true

//     } else  {
//     message = "You're out of the game!"
//     isAlive = false
//   }
//     messageEl.textContent = message
//    }
//   //2. Create a function newCard that logs out "Drawing a new card from the deck!"
//    function newCard() {
//    console.log("Drawing a new card from the deck!")

//    //Create a card variable, and hard coe its value to a number (2-11)

//    let card = 7 
//    sum += card
//    //3. call startGame
//    renderGame()
//    }






// Section 3: Building a Blackjack Game
    // Lesson 21; Intro to Arrays
//Arrays are ordered lists of item

//Arrays are 0 indexed

 // In arrays index starts from 0 while length starts from 1
 //we can have 
 //console.log (featuredPosts.[3]) this would give "Ive relaunched my portfolio"

 let featuredPosts = [
    "Check out my Netflix clone" ,      // 0
    "Here's the code for my projects",     // 1
    "I've relaunched my portfolio"   // 2
 ]

//Arrays are 0 indexed
//E.g
//console.log( featuredPosts[2] )

//Crete an array that lists your i.e. experience, education, licenses, skills, or similar
//The items of the array should be strings

// An example i did myself

let aboutMySelf = [
    "I'm a front end developer with five years experience",
     "I attended Babcock Univeristy",
    "I have license to work as a front end developer in United State of America",
     "My skills are HTML, CSS, JavaAScript, Tailwind, REACTJS, Vue.js"
 ]

 console.log( aboutMySelf[0] )
 console.log( aboutMySelf[1] )
 console.log( aboutMySelf[2] )
 console.log( aboutMySelf[3] )
//TUTOR EXAMPLE

let experience = [
"CEO at Scrimba", 
"Frontend developer at Xeneta",
 "People counter for Norstat"
]
console.log(experience[0])
console.log(experience[1])
console.log(experience[2])

// Section 3: Building a Blackjack Game
    // Lesson 22; Array Indexes
// Check up for d examples


// Section 3: Building a Blackjack Game
    // Lesson 23; Arrays with multiple data types

   //Arrays are not limited to numbers or strings u can put any numbers you like.
   // Arrays - ordered list of items - coposite (its composed by its items) / complex data type

   // Create an array that describes yourself. Use the three primitive data type (strings, numbers and boolean)
   //you've learnt 
   //we have primitive and complex data types
   //It should contain your name (string), your age (number), and whether you like pizza
   // (boolean)
    
   

// did this example myself
// use the tutor illustrator instead

//    let name = [
//     "Tech Girl"
//  ]

// let age = [
//     24
// ]
// let pizza = [
//     true
// ]
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])


//Tutor Example 
// let per = ["Per Harald Borgen", 35, true]
// console.log(per)


// // Section 3: Building a Blackjack Game
//     // Lesson 24; Adding and removing items from arrays

//     let cards = [7, 4]
//     cards.push(6)
//      console.log(cards)

//Another Example

// Push the newMessage to the messages array, and then log out the array


// this is like u posted a post on linkedin so whenever someone comments the comments should automatically be added.

// let messages = [
//     "Hey, how's it going",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portolio lately."
// ]

// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)

// //How can you remove the last item in an array? 
// // Thia way "Same here has been removed"
// // Hence we have two version of the array in the console log
// messages.pop(newMessage)
// console.log(messages)



//  //Section 3: Building a Blackjack Game
//   //  Lesson 25; Creating the cards arrays


//       let firstCard = 10
//        let secondCard = 4
//        // 1, Create a new array - cards - that contains firstCard and second Card
//        let cards = [firstCard, secondCard]
//        let sum = firstCard + secondCard 
//        let hasBlackJack = false
//      let isAlive = true
//      let message = ""
//       let messageEl = document.getElementById("message-el")
//       let sumEl = document.getElementById("sum-el") 
//        let cardsEl = document.getElementById("cards-el") 

//         function startGame() {
         
//          renderGame()
//         }
      
      
//       function renderGame() {
//              // 2. Refer to the cards array when rendering out the card
//          cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] //here is where cards array is rendered

//          sumEl.textContent = "Sum: " + sum
//         if (sum <= 20) {
//          message = "Do you want to draw a new card?"
          
//           } else if (sum === 21) {
//           message = "You've got Blackjack!"
//               hasBlackJack = true
      
//            } else  {
//           message = "You're out of the game!"
//            isAlive = false
//          }
//            messageEl.textContent = message
//       }
//       //2. Create a function newCard that logs out "Drawing a new card from the deck!"
//            function newCard() {
//           console.log("Drawing a new card from the deck!")
     
//          let card = 7 
//          sum += card
//   renderGame()
//    }




//     Section 3: Building a Blackjack Game
//     Lesson 26; Push a new card to the arrays



    //   let firstCard = 10
    //    let secondCard = 4
    //    // 1, Create a new array - cards - that contains firstCard and second Card
    //   /////// let cards = [firstCard, secondCard]
    //    let sum = firstCard + secondCard 
    //    let hasBlackJack = false
    //  let isAlive = true
    //  let message = ""
    //   let messageEl = document.getElementById("message-el")
    //   let sumEl = document.getElementById("sum-el") 
    //    let cardsEl = document.getElementById("cards-el") 

    //     function startGame() {
         
    //      renderGame()
    //     }
      
      
    //   function renderGame() {
             
    //      cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] 

    //      sumEl.textContent = "Sum: " + sum
    //     if (sum <= 20) {
    //      message = "Do you want to draw a new card?"
          
    //       } else if (sum === 21) {
    //       message = "You've got Blackjack!"
//               hasBlackJack = true
      
//            } else  {
//           message = "You're out of the game!"
//            isAlive = false
//          }
//            messageEl.textContent = message
//       }
    
//            function newCard() {
//           console.log("Drawing a new card from the deck!")
     
//          let card = 6
//          sum += card
//          //Push the card to the cards array
//          //Now in the console the cards has been logged out making it 20
//          cards.push(card)
//          console.log(cards)

//   renderGame()
//    }




// Section 3: Building a Blackjack Game
// Lesson 27: Counting in  JavaScript

// Count to ten!

//We need to specify...

//Where should we START counting?
//Where is the FINISH line?
//Whats the STEP SIZE we should use?

//We count using forloop that is why the code starts with for

// START         FINISH        STEP SIZE

 //<11 means we are not 
     //going to count over this number 11, max is 10 
    // += means for each counting ure going to implement with 1, i.e count plus one
    //Now we will run this code 10 times and the value alteration will change its code in every step

     //If i want to count from 1-10
    //    for ( let count = 1; count < 11; count += 1 ) { 
    //     console.log(count)
    //    }

    //    //If i want to count from 10-20
    //    for ( let count = 10; count < 21; count += 1 ) { 
    //     console.log(count)
    //    }


// Section 3: Building a Blackjack Game
// Lesson 28: Create your first loop

// Create a for loop that counts from 10 t0 100 in steps of 10
// Use console.lo to log out the numbers
//i can represent count

// for ( let count = 10; count < 101; count += 10 ) {
//     console.log(count)
// }
// //Another example
// for (let i = 0; i < 6; i +=1) {
//     console.log(i)
// }



// // Section 3; BuildingA a Blackjack game
// // Lesson 29; For loops and arrays
// //Array is used for listing items

//  let messages = [
//      "Hey, how's it going?",
//      "I'm great, thank you! How about you?",
//      "All good. Been working on my portfolio lately.",
//      "Same here!",
//      "Great to hear",
//      "emoji"
//  ]

// // DRY - Dont repeat yourself
//  console.log(messages[0])
//  console.log(messages[1])
//  console.log(messages[2])
//  console.log(messages[3])

// // combine this array with a for loop
// //inside of this console log the value of i

// for (let i = 0; i < 5; i += 1) {
//     //console.log(i) you get 0, 1, 2, 3, 4
//   for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i])
  
// }

// Section 3: Building a Blackjack Game
// Lesson 30: Write your first array-based loop 

//Example of having cards in an arrays
// let cards = [7, 3, 9] 
// // Create a for loop that logs out all the cards in the array
// // Use cards. length to specify how long the loop should run

//for (let i = 0; i < cards.length; i += 1) { //i++ and i+=1 is d same
    // console.log(cards[i])
// }



// you have to create a new folder
// Section 3: Building a Blackjack Game
// Lesson 31: For loops, arrays and DOM

// let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// //Render the sentence in the greetingEl paragraph using a for loop and textContent
// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] 
// }

//How do you keep the spaces between the words if i remve them from the array.

// let sentence = ["Hello", "my", "name", "is", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " " //This means adding a space after each words





// Section 3: Building a Blackjack Game
// Lesson 32: Use a loop to render cards


// let firstCard = 10
//   let secondCard = 4
//  let cards = [firstCard, secondCard]
//    let sum = firstCard + secondCard 
//    let hasBlackJack = false
//   let isAlive = true
//   let message = ""
//  let messageEl = document.getElementById("message-el")
//  let sumEl = document.getElementById("sum-el") 
//   let cardsEl = document.getElementById("cards-el") 

//     function startGame() {
//      renderGame()
//  }
  
  
//   function renderGame() {
//    cardsEl.textContent = "Cards: " +
// // Create a for loop that renders out all the cards instead of just two
// for (let i = 0; i < cards.length; i++) {
// cardsEl.textContent += cards[i] + " " //This is to add a space between our number
// }
//       sumEl.textContent = "Sum: " + sum
//      if (sum <= 20) {
//      message = "Do you want to draw a new card?"
      
//     } else if (sum === 21) {
//      message = "You've got Blackjack!"
//              hasBlackJack = true
  
//            } else  {
//           message = "You're out of the game!"
//            isAlive = false
//         }
//             messageEl.textContent = message
//        }

//        function newCard() {
//         console.log("Drawing a new card from the deck!")

//         let card = 6
//         sum += card
//          cards.push(card)
//           console.log(cards)

//   renderGame()
//     }


// Section 3: Building a Blackjack Game
// Lesson 33: How can we avoid hard-code card values


// let firstCard = getRandomCard()
//    let secondCard = getRandomCard()
//   let cards = [firstCard, secondCard]
//    let sum = firstCard + secondCard 
//    let hasBlackJack = false
//   let isAlive = true
//    let message = ""
//   let messageEl = document.getElementById("message-el")
//   let sumEl = document.getElementById("sum-el") 
//    let cardsEl = document.getElementById("cards-el") 

// //Create a function, getRandomCard(), that always returns the number 5

//     function startGame() {
//            renderGame()
//   }
//   function renderGame() {
//    cardsEl.textContent = "Cards: " 

// for (let i = 0; i < cards.length; i++) {
// cardsEl.textContent += cards[i] + " " //This is to add a space between our number
// }
//       sumEl.textContent = "Sum: " + sum
//      if (sum <= 20) {
//      message = "Do you want to draw a new card?"
      
//     } else if (sum === 21) {
//      message = "You've got Blackjack!"
        //      hasBlackJack = true

        //     } else  {
        //       message = "You're out of the game!"
        //        isAlive = false
        //     }
        //         messageEl.textContent = message
        //    }
    
        //    function newCard() {
        //     console.log("Drawing a new card from the deck!")
        //     let card = getRandomCard()
        //     sum += card
        //      cards.push(card)
        //       console.log(cards)
        //       renderGame()
        // }



        // Section 3: Building a Blackjack Game
        // Lesson 34: Returning values in functions



    //     let firstCard = 10
    //     let secondCard = 4
    //    let cards = [firstCard, secondCard]
    //     let sum = firstCard + secondCard 
    //     let hasBlackJack = false
    //    let isAlive = true
    //     let message = ""
    //    let messageEl = document.getElementById("message-el")
    //    let sumEl = document.getElementById("sum-el") 
    //     let cardsEl = document.getElementById("cards-el") 
     
    //  //Create a function, getRandomCard(), that always returns the number 5
     
    //      function startGame() {
    //             renderGame()
    //    }
    //    function renderGame() {
    //     cardsEl.textContent = "Cards: " 
     
    //  for (let i = 0; i < cards.length; i++) {
    //  cardsEl.textContent += cards[i] + " " //This is to add a space between our number
    //  }
    //        sumEl.textContent = "Sum: " + sum
    //       if (sum <= 20) {
    //       message = "Do you want to draw a new card?"
           
    //      } else if (sum === 21) {
    //       message = "You've got Blackjack!"
    //               hasBlackJack = true

            //     } else  {
            //       message = "You're out of the game!"
            //        isAlive = false
            //     }
            //         messageEl.textContent = message
            //    }
        
            //    function newCard() {
            //     console.log("Drawing a new card from the deck!")
            //     let card = 6
            //     sum += card
            //      cards.push(card)
            //       console.log(cards)
            //       renderGame()
            // }



      // Section 3: Building a Blackjack Game
      // Lesson 34: Returning values in functions


let player1Time = 102
let player2Time = 107

//Create a function that return the fatest race time
 function getFastestRaceTime() {
   if (player1Time < player2Time) {
     return player1Time
   } else if (player2Time < player1Time) {
   return player2Time
   } else {
     return player1Time
 }
 }


//Declare variable as a result of invoking the function
// The value will be watever the function has returned


let fatestRace = getFastestRaceTime()
console.log(fatestRace) //player one was faster than player 2, hence the answer is 102



// Class Test
//Write a function that returns the total race time
//Call/invoke the function and store the returned value in a new variable
//Finally, log the varaiable out


function getTotalRaceTime() {
  return player1Time + player2Time
}

let totalTime = getTotalRaceTime()
console.log(totalTime)


//Class test end here

// //If we code it this way the fatestraace value will give undefined because nothing is defined.

// function getFastestRaceTime() {
//    if (player1Time < player2Time) {
//      console.log(player1Time)
//    } else if (player2Time < player1Time) {
//    console.log(player2Time)
//    } else {
//     consoe.log(player1Time)
// }
//  }
//  let fatestRace = getFastestRaceTime()
//  console.log(fatestRace) 





      // Section 3: Building a Blackjack Game
      // Lesson 36: Using a function to set the card value


//Use getRandomCard() to set the values of firstCard and secondCard

  //     let firstCard = getRandomCard()
  //     let secondCard = getRandomCard()
  //    let cards = [firstCard, secondCard]
  //     let sum = firstCard + secondCard 
  //     let hasBlackJack = false
  //    let isAlive = true
  //     let message = ""
  //    let messageEl = document.getElementById("message-el")
  //    let sumEl = document.getElementById("sum-el") 
  //     let cardsEl = document.getElementById("cards-el") 
   
  //  //Create a function, getRandomCard(), that always returns the number 5
  //  function getRandomCard() {
  //   return 5 //How do we modified this so it can return a random card
  //  }
   
  //      function startGame() {
  //             renderGame()
  //    }
  //    function renderGame() {
  //     cardsEl.textContent = "Cards: " 
   
  //  for (let i = 0; i < cards.length; i++) {
  //  cardsEl.textContent += cards[i] + " " //This is to add a space between our number
  //  }
  //        sumEl.textContent = "Sum: " + sum
  //       if (sum <= 20) {
  //       message = "Do you want to draw a new card?"
         
  //      } else if (sum === 21) {
  //       message = "You've got Blackjack!"
  //               hasBlackJack = true

  //             } else  {
  //               message = "You're out of the game!"
  //                isAlive = false
  //             }
  //                 messageEl.textContent = message
  //            }
      
  //            function newCard() {
  //             console.log("Drawing a new card from the deck!")
  //             let card = getRandomCard()
  //             sum += card
  //              cards.push(card)
  //               console.log(cards)
  //               renderGame()
  //         }


  //      // Section 3: Building a Blackjack Game
  //     // Lesson 37: Generating random numbers with Math.random()
      //Random num is very imprtant, crypo, car crossing use it to generate tweet text
      //Therefore we use the math object to generate random numbers

// let randomNumber = Math.random() 
// console.log(randomNumber)

/* 
What does Math.random() do?
Your answer: it generates a random number between o and 1 (not inclusive) meaning from 0.000-0.999
*/


 // Section 3: Building a Blackjack Game
      // Lesson 37: Math.random() *6
//How do we create a dice function?


// let randomNumber = Math.random() * 6
// console.log(randomNumber)

/*
In which range will our randomNumber be now?
From: 0
To: 5.9999999
*/



// Section 3: Building a Blackjack Game
      // Lesson 38: Flooring the numbe with Math.random()
      //Now this is another method on the math object
//Mat floor take number an returns it in floored number


     // let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)

/* What does Math.floor() do to positive numbers?
Your answer:It removes the decimals
*/



// Section 3: Building a Blackjack Game
      // Lesson 39: Using Math.random() and Math.floor() to create a dice

      //  let randomNumber = Math.floor( Math.random() * 6 )
      //  console.log(randomNumber)
      
 /* 
Write down all the possible values randomNumber can hold now!
Your answer: 0,1,2,3,4,5
Math.random()      0.000-0.999
Math.random()*6    0.000-5.999
Math.floor(Math.random()*6)    0/1/2/3/4/5

*/


// Section 3: Building a Blackjack Game
// Lesson 40: Completing our dice function

// Try to modify the expression so that we get a range from 1 t0 6

  let randomNumber = Math.floor( Math.random() * 6 ) + 1
console.log(randomNumber) //answer is 0,1,2,3,4,5,6

//Write down all the possible values randomNumber can hold now!
//Class Test

//Create a function, rollDice(), that returns a random number between 1 and 6
function rollDice() {
  let randomNumber = Math.floor( Math.random() * 6 ) + 1
  return randomNumber
}
console.log( rollDice() )

  // random number id defined inside a code by a function




// Section 3: Building a Blackjack Game
// Lesson 41: Completing our dice function



// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") 
// let cardsEl = document.getElementById("cards-el") 

// Make this function return a random number between 1 and 13
//function getRandomCard() {
 // return Math.random()*13 // We know that math random is 0.00-0.999, so for this we have 0.00 - 12.999
  // We want to remove d decimal so therefore we are adding math.floor
//   return Math.floor( Math.random()*13 ) + 1 // 0.000-12.999... 1-13
// }

//  function startGame() {
//         renderGame()
// }
// function renderGame() {
// cardsEl.textContent = "Cards: " 

// for (let i = 0; i < cards.length; i++) {
// cardsEl.textContent += cards[i] + " " //This is to add a space between our number
// }
//    sumEl.textContent = "Sum: " + sum
//   if (sum <= 20) {
//   message = "Do you want to draw a new card?"
   
//  } else if (sum === 21) {
//   message = "You've got Blackjack!"
//           hasBlackJack = true

//         } else  {
//           message = "You're out of the game!"
//            isAlive = false
//         }
//             messageEl.textContent = message
//        }

//        function newCard() {
//         console.log("Drawing a new card from the deck!")
//         let card = getRandomCard()
//         sum += card
//          cards.push(card)
//           console.log(cards)
//           renderGame()
//     }



// // Section 3: Building a Blackjack Game
// Lesson 42: Complete getRandomNumber function



// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") 
// let cardsEl = document.getElementById("cards-el") 

// function getRandomCard() {
//   //If 1    -> return 11
//  //If 11-13 -> return 10
//   let randomNumber = Math.floor( Math.random()*13 ) + 1
//  if (randomNumber > 10) {
//   return 10
//  } else if (randomNumber === 1) {
//   return 11
//  } else {
//   return randomNumber
//  }
 

//   return Math.floor( Math.random()*13 ) + 1 
// }

//  function startGame() {
//         renderGame()
// }
//function renderGame() {
// cardsEl.textContent = "Cards: " 

// for (let i = 0; i < cards.length; i++) {
// cardsEl.textContent += cards[i] + " " 
// }
//    sumEl.textContent = "Sum: " + sum
//   if (sum <= 20) {
//   message = "Do you want to draw a new card?"
   
//  } else if (sum === 21) {
//   message = "You've got Blackjack!"
//           hasBlackJack = true

//         } else  {
//           message = "You're out of the game!"
//            isAlive = false
//         }
//             messageEl.textContent = message
//        }

//        function newCard() {
//         console.log("Drawing a new card from the deck!")
//         let card = getRandomCard()
//         sum += card
//          cards.push(card)
//           console.log(cards)
//           renderGame()
//     }


// // Section 3: Building a Blackjack Game
// Lesson 43: Assign values in the startGame function

        // let cards = []
        // let sum = 0
        // let hasBlackJack = false
        // let isAlive = false
        // let message = ""
        // let messageEl = document.getElementById("message-el")
        // let sumEl = document.getElementById("sum-el") 
        // let cardsEl = document.getElementById("cards-el") 
        
       // console.log(cards) //Wen u do this u notice the game jst start immediately which is not supposed to b so
        // this should would be generated in thr startGame function, ure changinf isAlive variable to false den in function true


        // function getRandomCard() {
        //   //If 1    -> return 11
        //  //If 11-13 -> return 10
        //   let randomNumber = Math.floor( Math.random()*13 ) + 1
        //  if (randomNumber > 10) {
        //   return 10
        //  } else if (randomNumber === 1) {
        //   return 11
        //  } else {
        //   return randomNumber
        //  }
        // }
        
        //  function startGame() {
        //   isAlive = true
        //         renderGame()
        // }
        // function renderGame() {
        // cardsEl.textContent = "Cards: " 
        
        // for (let i = 0; i < cards.length; i++) {
        // cardsEl.textContent += cards[i] + " " 
        // }
        //    sumEl.textContent = "Sum: " + sum
        //   if (sum <= 20) {
        //   message = "Do you want to draw a new card?"
           
        //  } else if (sum === 21) {
        //   message = "You've got Blackjack!"
        //           hasBlackJack = true
        
        //         } else  {
        //           message = "You're out of the game!"
        //            isAlive = false
        //         }
        //             messageEl.textContent = message
        //        }
        
            //    function newCard() {
            //     //Generate two random numbers
            //     // Re-assign the cards and sum variables so that the game can start

            //     isAlive = true
            //     let firstCard = getRandomCard()
            //     let secondCard = getRandomCard()
            //     cards = [firstCard, secondCard]
            //    sum = firstCard + secondCard
            //    //den after the above code rerun console log u will see that the bracket is 0, so ur game can start

            //       renderGame()
            // }
    


// // Section 3: Building a Blackjack Game
// Lesson 44: Our new card feature is broken


// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") 
// let cardsEl = document.getElementById("cards-el") 

// console.log(cards)

// function getRandomCard() {
//   let randomNumber = Math.floor( Math.random()*13 ) + 1
//  if (randomNumber > 10) {
//   return 10
//  } else if (randomNumber === 1) {
//   return 11
//  } else {
//   return randomNumber
//  }
// }

//  function startGame() {
//   isAlive = true
//         renderGame()
// }
// function renderGame() {
// cardsEl.textContent = "Cards: " 

// for (let i = 0; i < cards.length; i++) {
// cardsEl.textContent += cards[i] + " " 
// }
//    sumEl.textContent = "Sum: " + sum
//   if (sum <= 20) {
//   message = "Do you want to draw a new card?"
   
//  } else if (sum === 21) {
//   message = "You've got Blackjack!"
//           hasBlackJack = true

//         } else  {
//           message = "You're out of the game!"
//            isAlive = false
//         }
//             messageEl.textContent = message
//        }

//        function newCard() {
       
//         //  With this code ur start game number is a figure not 2

//         isAlive = true
//        let card = getRandomCard()
//               sum += card
//                    cards.push(card)
//                    console.log(cards)
//                      renderGame()
//                }
   
     


               

// // Section 3: Building a Blackjack Game
// Lesson 45: The logical AND operator

// We checking whether or not user should get a certificate

// let hasCompletedCourse = true
// let givesCertificate = true

// //How do we confirm if the above statement is true?
// if (hasCompletedCourse === true) {
 //if (givesCertificate === true) {
   // generateCertificate()
 ////}

 //}    // This code answer would give us generating certificates

// if (hasCompletedCourse === true && givesCertificate === true) {
    // generateCertificate()
 //}   // this would also generate d certificate for us, its better to have it on one line



 //function generateCertificate() {
//console.log("Generating certificate...")
//}



// Section 3: Building a Blackjack Game
// Lesson 46: Write your first logical operator

let hasSolvedChallenge = false
let hasHintsLeft = false

//Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution()
  }

function showSolution() {
  console.log("Showing the solution...")
}


// // Section 3: Building a Blackjack Game
// Lesson 47: The logical OR operator

// Create two boolean variables, likesDocumentaries and likesStarups
// Use an OR statement (||) to call recommendMovie() if either of those
//Variables are true

let likesDocumentaries = true
let likesStarups = false
//This means if likesDocumentaries is true or likesStarups is true 
//den we want to recommend this movie
if (likesDocumentaries ===true || likesStarups ===true) {
  recommendMovie()
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!")
}



// // Section 3: Building a Blackjack Game
// Lesson 48: Only trigger newCard if you're allowed to


//Now we are taking what we learn about logical and modify d new card function
//  to allow d player to get a new card


// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") 
// let cardsEl = document.getElementById("cards-el") 

// console.log(cards)

// function getRandomCard() {
//   let randomNumber = Math.floor( Math.random()*13 ) + 1
//  if (randomNumber > 10) {
//   return 10
//  } else if (randomNumber === 1) {
//   return 11
//  } else {
//   return randomNumber
//  }
// }

//  function startGame() {
//   isAlive = true
//         renderGame()
// }
// function renderGame() {
// cardsEl.textContent = "Cards: " 

// for (let i = 0; i < cards.length; i++) {
// cardsEl.textContent += cards[i] + " " 
// }
//    sumEl.textContent = "Sum: " + sum
//   if (sum <= 20) {
//   message = "Do you want to draw a new card?"
   
//  } else if (sum === 21) {
//   message = "You've got Blackjack!"
//           hasBlackJack = true

//         } else  {
//           message = "You're out of the game!"
//            isAlive = false
//         }
//             messageEl.textContent = message
//        }

//        function newCard() {
//  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
//         if (isAlive === true && hasBlackJack === false) {
//            // if the above statement is true den d dealer should be able to give d player a new card

//        let card = getRandomCard()
//           sum += card
//          cards.push(card)
//          renderGame()
//         }
//       }
     

 
// // Section 3: Building a Blackjack Game
// Lesson 49: object sneek peak

// let playerName = "Per"
// let playerchips = 145

// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") 
// let cardsEl = document.getElementById("cards-el") 

// // combining it to a unit by player object ot using object. let player = { .. this meeans that 
// // we are creating an object

// let player = {
//  name: "Per",
//   chips: 145
// }

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips



// function getRandomCard() {
//   let randomNumber = Math.floor( Math.random()*13 ) + 1
//  if (randomNumber > 10) {
//   return 10
//  } else if (randomNumber === 1) {
//   return 11
//  } else {
//   return randomNumber
//  }
// }

//  function startGame() {
//   isAlive = true
//         renderGame()
// }
// function renderGame() {
// cardsEl.textContent = "Cards: " 

// for (let i = 0; i < cards.length; i++) {
//   cardsEl.textContent += cards[i] + " " 
//   }
//      sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//     message = "Do you want to draw a new card?"
     
//    } else if (sum === 21) {
//     message = "You've got Blackjack!"
//             hasBlackJack = true
  
//           } else  {
//             message = "You're out of the game!"
//              isAlive = false
//           }
//               messageEl.textContent = message
//          }
  
//          function newCard() {
//           if (isAlive === true && hasBlackJack === false) {
//          let card = getRandomCard()
//             sum += card
//            cards.push(card)
//            renderGame()
//           }
//         }
       
  
 
// // Section 3: Building a Blackjack Game
// Lesson 50: Intro to objects

//Objects - store data in-depth - they are also composite / complex data type
// key-value pairs

// They are used to store alot of datas and object upon objects
// They makeuse of arrays, boolean etc to store data, data structure


let course = {
  title: "Learn CSS Grid for free",
  lessons: 16,
  creator: "Per Harald Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"]
}
//If we want to access any of the above value, we make use of . notation
console.log( course.length ) // The data type we are consoling is an object
console.log ["html", "css"] //Logging out an array
console.log( course["tags"] ) // This is called a bracket notation
console.log( course.tags ) // its  best to use this simple nd straight


// // Section 3: Building a Blackjack Game
// Lesson 51: Create your first object

// Create an object that represents an airbnb castle listing
// It should contain at least one boolean,  one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
  title: "Live like a queen in my castle",
  price: 190,
  isSuperHost: true,
  images: ["img/castle.png", "img/castle2.png"]

}
console.log( castle.title )
console.log(castle.price)
console.log(castle.isSuperHost)
console.log(castle.images)



// // Section 3: Building a Blackjack Game
// Lesson 52: Use an object to store player data


//2. Create the player object. Give it two keys, name and chips,
// let player = {
//   name: "Per",
//   chips: 200

// }
// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") 
// let cardsEl = document.getElementById("cards-el") 


// //3. GRab ahold of the player-el paragraph and store it in a variable called  playerEl
// let playerEl = document.getElementById("player-el")


// //4. Render the players name and chips in playerEl
// playerEl.textContent = player.name + ": $" + player.chips

// function getRandomCard() {
//   let randomNumber = Math.floor( Math.random()*13 ) + 1
//  if (randomNumber > 10) {
//   return 10
//  } else if (randomNumber === 1) {
//   return 11
//  } else {
//   return randomNumber
//  }
// }

//  function startGame() {
//   isAlive = true
//         renderGame()
// }
// function renderGame() {
// cardsEl.textContent = "Cards: " 

// for (let i = 0; i < cards.length; i++) {
//   cardsEl.textContent += cards[i] + " " 
//   }
//      sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//     message = "Do you want to draw a new card?"
     
//    } else if (sum === 21) {
//     message = "You've got Blackjack!"
//             hasBlackJack = true
  
//           } else  {
//             message = "You're out of the game!"
//              isAlive = false
//           }
//               messageEl.textContent = message
//          }
  
//          function newCard() {
//           if (isAlive === true && hasBlackJack === false) {
//          let card = getRandomCard()
//             sum += card
//            cards.push(card)
//            renderGame()
//           }
//         }
       
  
 // // Section 3: Building a Blackjack Game
// Lesson 53: Methods on object 


let player = { //we worked with object
  name: "Per",
  chips: 200,
  // Create function inside an object, its called methods
  //methods are function thare attached to a object
   sayHello: function() {
  console.log("Heisann!")
}
}
// how to console methods
player.sayHello() // sayHello() a function sayHello ure calling with d parenthesis()


let cards = [] //we asigned arrays
let sum = 0
let hasBlackJack = false // //we worked with boolean
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el") 
let cardsEl = document.getElementById("cards-el") 



let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() { //we worked with the math objects
  let randomNumber = Math.floor( Math.random()*13 ) + 1
 if (randomNumber > 10) {
  return 10 ////we worked with return statements
 } else if (randomNumber === 1) { // // //we worked with if else statements
  return 11
 } else {
  return randomNumber
 }
}

 function startGame() {
  isAlive = true
        renderGame()
}
function renderGame() {
cardsEl.textContent = "Cards: " 

for (let i = 0; i < cards.length; i++) { //we worked with for loops
     
  cardsEl.textContent += cards[i] + " " 
  }
     sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {  //we worked with comparison operator
    message = "Do you want to draw a new card?"  
   } else if (sum === 21) {
    message = "You've got Blackjack!"
            hasBlackJack = true
  
          } else  {
            message = "You're out of the game!"
             isAlive = false
          }
              messageEl.textContent = message
         }
  
         function newCard() {
          if (isAlive === true && hasBlackJack === false) { //we worked with logical operators
     
         let card = getRandomCard()
            sum += card
           cards.push(card)
           renderGame()
          }
        }
       
  
// // Section 3: Building a Blackjack Game
// Lesson 54: Congrats & Recap
//YOU BUILT your first js game
//check up




 // // Section 3: Building a Blackjack Game
// Lesson 54:objects and functions






















