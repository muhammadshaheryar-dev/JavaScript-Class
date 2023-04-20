// Day 9 APR 2023 Javascript Class 1

//Task 1

// var zakat_amount = +prompt("Enter Your Amount")
// var percent  = 0.025*zakat_amount;
// alert("Your Total Zakat Deduction Amount is " +percent)

// Day 19 APR 2023 Javascript Class 2

//Task 2

// var members = +prompt("Enter the total number of family members:");
// var method = +prompt("Choose a fitrah method:\n1. Wheat (Gandum) - Rs. 350 per person\n2. Raisins (Kishmish) - Rs. 6400 person\n3. Dates (Khajoor) - Rs. 2800 per person");
// var fitrah_rate;
// if 
// (method == 1) 
// {
//   fitrah_rate = 350;
// } 
// else if 
// (method == 2) 
// {
//   fitrah_rate = 6400;
// } 
// else if 
// (method == 3) 
// {
//   fitrah_rate = 2800;
// } else 
// {
//   alert("Invalid input");
// }
// var fitrahAmount = members * fitrah_rate;
// alert("Total fitrah amount is" + " Rs." + " " + fitrahAmount);

//Task 3

// var secretNumber = 7;
// var guess = +prompt("Guess the secret number 1 to 10");
// if 
// (guess == secretNumber) 
// {
//   alert("Congratulations! You guessed the secret number.");
// } 
// else if (guess > secretNumber) 
// {
//   alert("too high. try again :(");
// } 
// else 
// {
//   alert("too low. try again :(");
// }

//Task 4

// var nm = prompt("Enter your name:");
// var words = nm.split("");
// words[0] = words[0].toUpperCase();
// var capitalized = words.join("");
// document.write("<h1><b>"+capitalized+"</b>)</h1>");

//Task 5

// var contactNumbers = [];
// var contactNames = [];
// var numContacts = +prompt("How many contacts do you want to add?");
// for(var i=0; i<=numContacts; i++){
//   var contactNumber = prompt("Enter contact number " + (i+1) + ":");
//   contactNumbers[i]= contactNumber;
//   var contactName = prompt("Enter contact name " + (i+1) + ":");
//   contactNames[i]= contactName;
//   document.write("Contact Number" + contactNumbers [i] + "<br>" + "Name" + contactNames[i]);
// }

//Task 6

// var items = ['Lays', 'Dairy Milk' , 'Sooper Biscuit', '7up Cold Drink', 'Nestle Red Grape Juice'];
// var remove_item = +prompt("Enter the item you want");
// var removed = items.splice(remove_item - 1, 1)[0];
// alert("Removed Item: " + removed);
// document.write("Remaining Items: " + "<br>" + items.join("<br>"));

//Task 7

// var nationality = prompt("What is your nationality");
// var gender = prompt("What is your gender?");
// var age = +prompt("What is your age");
// if (nationality.toUpperCase() === "pakistani" || nationality.toUpperCase() === "indian") 
//   {
//   if (gender.toUpperCase() === "male" && age >= 18) {
//     alert("You are eligible to vote.");
//   } 
//   else if (gender.toUpperCase() === "female" && age >= 18) {
//     var married = prompt("Are you married? (yes or no)").toUpperCase();
//     if (married === "yes") {
//       alert("You are eligible to vote.");
//     } else {
//       alert("You are not eligible to vote.");
//     }
//   } 
//   else {
//     alert("You are not eligible to vote.");
//   }
// } 
// else {
//   alert("You are not eligible to vote.");
// }

//Task 8

var players = ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6", "Player 7", "Player 8", "Player 9", "Player 10", "Player 11", "Player 12", "Player 13", "Player 14", "Player 15"];
var team = players.slice(1 , 12);
document.write("Final team for tomorrow's match against India: ");
document.write("<br>"+ team);

