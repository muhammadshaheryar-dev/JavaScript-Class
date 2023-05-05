//Task 9
// function Year() {
//     var year = new Date().getFullYear();
//     if (year % 4 !== 0) {
//       return false;
//     } else if (year % 100 !== 0) {
//       return true;
//     } else if (year % 400 !== 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   var CurrentLeapYear = Year();
//  alert(CurrentLeapYear);
    
// Task 10
// function nextleapyear() {
//     var currentYear = new Date().getFullYear();
//     var leapYears = [];
//     var year = currentYear;
  
//     while (leapYears.length < 10) {
//       if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//         leapYears.push(year);
//       }
//       year++;
//     }
  
//     return leapYears;
//   }
//   var next10LeapYears = nextleapyear();
//   alert(next10LeapYears);

// Task 11
// function auto_OTP_generate() {
//     var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var OTP = '';
//     var len = string.length;
//     for (var i = 0; i < 10; i++) {
//       OTP += string[Math.floor(Math.random() * len)];
//     }
//     return OTP;
//   }
//   alert(auto_OTP_generate()); 

// Task 12
// function capitalcase() {
//     var userInput = prompt("enter a name");
//     var words = userInput.split(" ");
//     var cap_word = [];
  
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       var firstChar = word[0].toUpperCase();
//       var restOfWord = word.slice(1).toLowerCase();
//       var capitalizedWord = firstChar + restOfWord;
//       cap_word.push(capitalizedWord);
//     }
  
//     return cap_word.join(" ");
//   }
//   var output = capitalcase();
//   alert(output);

// Task 13
function userinput() {
    var bDate = prompt("enter yout birthdate (YYYY-MM-DD):");
    var today = new Date();
    var bYear = bDate.slice(0, 4);
    var bMonth = bDate.slice(5, 7) - 1;
    var birthDay = bDate.slice(8, 10);
    var age = today.getFullYear() - bYear;
    if (
      today.getMonth() < bMonth ||
      (today.getMonth() === bMonth && today.getDate() < birthDay)
    ) {
      age--;
    }
    return age;
  }
  var age = userinput();
  alert(age);