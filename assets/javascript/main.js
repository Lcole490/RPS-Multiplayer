// **********************V A R I A B L E S _ _ _ S E C T I O N*********************
var initP1= false;
var initP2= false;

var p1Attempt = false;
var p2Attempt = false;

var p1wins =0;
var p1losses =0;
var p1ties =0;

var p2wins =0;
var p2losses =0;
var p2ties =0;


var p1Pick;
var p2Pick;

//**************************E N D _ O F _ V A R I A B L E S _ _ _ S E C T I O N***************** */

console.log(p1Attempt);
console.log(p2Attempt);

//**************************F I R E B A S E _ _ _ I N I T I A L I Z A T I O N */

var firebaseConfig = {
  apiKey: "AIzaSyBqJ4IJbotEAhUQDvqBL-3ppTJimh3GBYo",
  authDomain: "rps-multiplayer-aa5f0.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-aa5f0.firebaseio.com",
  projectId: "rps-multiplayer-aa5f0",
  storageBucket: "",
  messagingSenderId: "543343609952",
  appId: "1:543343609952:web:25604679935c9ed5475b05",
  measurementId: "G-VD4NMXVWZK"
};


firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

var practice = 38;

database.ref().on("value", function (snapshot){

console.log(snapshot.val());

practice = snapshot.val().player1;

console.log(practice);

})











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
$(".p1Picks").on("click", function(){

    p1Pick = ($(this).attr("data-id"));

    p1Attempt= true;

    // shoot();

    console.log($(this).attr("data-id"));

});



// Function for when P1 clicks on a throw choice
$(".p2Picks").on("click", function(){

    p2Pick = ($(this).attr("data-id"));

    p2Attempt= true;

    // shoot();

    console.log($(this).attr("data-id"))

});


console.log(p2Pick);
console.log(p1pick);

console.log(p2Attempt);
console.log(p1Attempt);


