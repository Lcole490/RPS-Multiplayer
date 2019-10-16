// **********************V A R I A B L E S _ _ _ S E C T I O N*********************
var initP1= false;   //Trigger of whether player is active or not for game
var initP2= false;   //Trigger of whether player is active or not for game

var p1Attempt = false; //Trigger of whether or not player throws a choice of R, P , of S
var p2Attempt = false;  //Trigger of whether or not player throws a choice of R, P , of S

var p1wins =0;      //Variable for player 1 wins total
var p1losses =0;    // Variable for player 1 losses total
var p1ties =0;      // Variable for player 1 ties total

var p2wins =0;      //Variable for player 2 wins total
var p2losses =0;    // Variable for player 2 losses total
var p2ties =0;      // Variable for player 2 ties total


var p1Pick;     // Variable that stores current P1 pick and reveals it only when both players have attempted
var p2Pick;     // Variable that stores current P1 pick and reveals it only when both players have attempted


var avatar ={
    anonym = ["../images/anonymousface.jpg", "../images/anonymouswoman.jpg", "../images/anonymouswoman2.jpg", "../images/incognito.png"],
    pface =["../images/angryface.jpg", "../images/angryman.jpg", "../images/angrywoman.jpg", "../images/devious_demon.jpg", "../images/evilface.jpg", "../images/gameface.jpg"]
}

var gladiators={ 
    p1rock=["../images/p1_cometrock.png", "../images/p1_cometrock2.png"],
    p2rock=["../images/p2_cometrock.jpg", "../images/p2_cometrock2.jpg", "../images/p2_cometrock3.jpg"],
    
    p1paper=["../images/p1_paper.jpg", "../images/p1_paper2.png"],
    p2paper=["../images/p2_paper.jpg", "../images/p2_paper2.png"],

    p1scissors=["p1_scissors.png"],
    p2scissors=["p2_scissors.jpg"]
}




//**************************E N D _ O F _ V A R I A B L E S _ _ _ S E C T I O N***************** */
//**************************E N D _ O F _ V A R I A B L E S _ _ _ S E C T I O N***************** */

console.log(p1Attempt);
console.log(p2Attempt);

//**************************F I R E B A S E _ _ _ I N I T I A L I Z A T I O N */

// var firebaseConfig = {
//   apiKey: "AIzaSyBqJ4IJbotEAhUQDvqBL-3ppTJimh3GBYo",
//   authDomain: "rps-multiplayer-aa5f0.firebaseapp.com",
//   databaseURL: "https://rps-multiplayer-aa5f0.firebaseio.com",
//   projectId: "rps-multiplayer-aa5f0",
//   storageBucket: "",
//   messagingSenderId: "543343609952",
//   appId: "1:543343609952:web:25604679935c9ed5475b05",
//   measurementId: "G-VD4NMXVWZK"
// };


// firebase.initializeApp(firebaseConfig);

// // Create a variable to reference the database
// var database = firebase.database();

// var practice = 38;

// database.ref().on("value", function (snapshot){

// console.log(snapshot.val());

// practice = snapshot.val().player1;

// console.log(practice);

// })











//**************S T A R T _ O F _ R P S _ G A M E _ L O G I C ************* */

 // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
 if ((p1Pick === "r") || (p1Pick === "p") || (p1Pick === "s")) {

    if ((p1Pick === "r" && p2Pick === "s") ||
      (p1Pick === "s" && p2Pick === "p") || 
      (p1Pick === "p" && p2Pick === "r")) {
      p1wins++;
      p2losses++;
    } else if (p1Pick === p2Pick) {
      p1ties++;
      p2ties++;
    } else {
      p1losses++;
      p2wins++;
    }

};

//*******************E N D _ O F _ R P S _ G A M E _ L O G I C************* */




//****************************C L I C K _ _ E V E N T S ************** */

// Function for when P1 clicks on a throw choice
// $(".p1Picks").on("click", function(){

//     p1Pick = ($(this).attr("data-id"));

//     p1Attempt= true;

//     // shoot();

//     console.log($(this).attr("data-id"));
// console.log(p1pick);
// });



// // Function for when P1 clicks on a throw choice
// $(".p2Picks").on("click", function(){

//     p2Pick = ($(this).attr("data-id"));

//     p2Attempt= true;

//     // shoot();

//     console.log($(this).attr("data-id"))
// console.log(p2Pick);
// });





console.log(p2Attempt);
console.log(p1Attempt);


// ####################################################E N D _ _ _ O F _ _ _C L I C K_ _ _ E V E N T S_#####################################



// *************************************************I N I T I A L I Z E_ _ _P L A Y E R S********************************************

// var p1name = $("#p1enteredname").val().trim();


// $("#p1Init").on("click", function(){
// debugger;
// event.preventDefault();

// p1name = $("#p1enteredname").val().trim();
// initP1 = true;

// console.log(p1name);
// console.log(initP1);

// $(".p1username").empty();

// var p1badge = $("<div>");
// p1badge.addclass("p1alias");
// p1badge.text(p1name);
// $(".p1head").append(p1badge);

// });

function initPlayerOne(event) {
  var p1name = event.target.p1enteredname.value.trim().toLowerCase();
  event.preventDefault();
  console.log(p1name);
  return p1name;
  }

function initPlayerTwo(event){
  var p2name = event.target.p2enteredname.value.trim().toLowerCase();
  event.preventDefault();
  console.log(p2name);
  return p2name;
}

$(document).on('submit', initPlayerOne);


$(document).on('submit', initPlayerTwo);



