// The chapter one is start???????
// //Q:1,2
// Get the elements
alert("Chapter# 1\nQ:1,2\nInvalid! please enter a valid password");
//Q:3
alert("Q:3\nWelcome to our resturants!\nTurn on notification")
// The chapter one is end......
// The chapter two is started????????
//Q:1,Q:2,Q:3
let username;
let myname = "Micheal jackson";
let message = "Helloworld";
alert( "Chapter# 2\nQ:1,Q:2,Q:3" + message);
//Q:4
let studentname = "Sharim";
let Studentage = "18";
let studentsubject = "Maths";

alert("Q:4\nstudentname:" + studentname );
alert("Q:4\nStudentage:" + Studentage);
alert("Q:4\nstudentsubject:" + studentsubject);
//Q:5
alert("Q:5\nPizza\nPizz\nPiz\nPi\nP");
//Q:6
let email = "Shareemk405@gmail.com";
alert("Q:6\nMy email address is:" + email);
//Q:7
let book = "A smart way to learn javascript";
alert("Q:7\nI am trying to learn from the book:" + book);
//Q:8
let message1 = "Yah! I can write HTML content through javascript";
document.write("<b>Q:8</b>" + message1);
//Q:9
let message2 = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert("Q:9" + message2);

let message3 = "<b>The chapter two is end</br>";
document.write("<br>" + message3);

// The chapter two is end.......
// The chapter three is start??????
let message4 = ("<b>The chapter three is start</b>")
document.write(message4);
//Q:1
let age = "I am 18 year old";
alert( age);
//Q:2
let visitcount = localStorage.getItem('visitCount') || 0
visitcount++
localStorage.setItem('visitCount',visitcount)
alert( "<b>Q:2</b>\nYou have visited this site" + visitcount +"times")
//Q:3
let  birthyear = 2007;
document.write("<br />" + "<br />" +  "<b>Q:3</b>\nMy birth year is" + birthyear + ".<br>");
document.write( "Data type of my declared variable is" + typeof(birthyear));
//Q:4
let visitor = "Micheal";
let product = "Boots";
let quantity = "10";
document.write( "<br />" +"<br />" + "<b>Q:4</b>\n" + visitor + "ordered" + quantity +""+ product + "On adidas clothing store");
let message5 = "<b>The chapter 3 is end<b/>";
document.write("<br/>" + message5);
// The chapter three is end......
// The chapter fout is start????????
//Q:1
let message6 = "The chapter four is start";
document.write("<br/>" +message6);
let var1, var2, var3;
//five legal variables names
let userName;
let $dollarSign;
let _underscore;
let Casesensitive;
let myVariable123;
//Five Illegal variable names are commented due to error.
  // let 1stVariable;        // Illegal: Cannot start with a number
        // let var-name;           // Illegal: Hyphens are not allowed
        // let let;                // Illegal: Reserved keyword
        // let my variable;        // Illegal: No spaces allowed
        // let @symbol;            // Illegal: Special symbols (except $ and _) are not allowed
// The heading of rules (a)
{
    document.write("<h1>Rules for naming JS variables</h1>");

    // b) Rules for variable names
    document.write("Variable names can only contain letters, numbers, $ and _.<br>");
    //Example of b
    document.write("For example: $my_1stVariable<br><br>");

    // c) Starting characters for variables
    document.write("Variables must begin with a letter, $ or _.<br>");
    //Example of c
    document.write("For example: $name, _name, or name<br><br>");

    // d) Case sensitivity of variable names
    document.write("Variable names are case sensitive.<br><br>");

    // e) Variables should not be JS keywords
    document.write("Variable names should not be JavaScript keywords.");
}
// The chapter four is end???????
// The chapter five is started
//Q:1
let message7 = "The chapter five is start";
document.write("<br/>" +message7);
let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
document.write("<br/>" + "<br/>" + "The sum of " + num1 + "and" + num2  + "is:" + sum + "<br/>" )
//Q:2
{
  // Two numbers
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));

  //  basic math operations
  let subtraction = num1 - num2;
  let multiplication = num1 * num2;
  let division = num1 / num2;
  let modulus = num1 % num2;

  // Display results in the browser
  document.write("<h2>Results:</h2>");
  document.write("Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "<br>");
  document.write("Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "<br>");
  document.write("Division: " + num1 + " / " + num2 + " = " + division + "<br>");
  document.write("Modulus: " + num1 + " % " + num2 + " = " + modulus + "<br>");
   {
      // a) Declare a variable
      let myVar;

      // b) Show the value after declaration
      document.write("Value after variable declaration is: " + myVar + "<br>");

      // c) Initialize the variable with some number (5)
      myVar = 5;
      document.write("Initial value: " + myVar + "<br>");

      // e) Increment the variable
      myVar++;
      document.write("Value after increment is: " + myVar + "<br>");

      // g) Add 7 to the variable
      myVar += 7;
      document.write("Value after addition is: " + myVar + "<br>");

      // i) Decrement the variable
      myVar--;
      document.write("Value after decrement is: " + myVar + "<br>");

      // k) Show the remainder after dividing by 3
      let remainder = myVar % 3;
      document.write("The remainder is: " + remainder + "<br>");
  }
}
//Q:3
let ticketprice = 600 ;
let numberoftickets = 5;
let totalcost = ticketprice * numberoftickets;
document.write("Total cost to buy 5 tickets to movie is" + totalcost);
//Q:4
let number = 5;
document.write("<br />" + "<br/>" + number + "x" + "1" + "=" + number * 1 );
document.write("<br />" + number + "x" + "2" + "=" + number * 2 );
document.write("<br />" + number + "x" + "3" + "=" + number * 3 );
document.write("<br />" + number + "x" + "4" + "=" + number * 4 );
document.write("<br />" + number + "x" + "5" + "=" + number * 5 );
document.write("<br />" + number + "x" + "6" + "=" + number * 6 );
document.write("<br />" + number + "x" + "7" + "=" + number * 7 );
document.write("<br />" + number + "x" + "8" + "=" + number * 8 );
document.write("<br />" + number + "x" + "9" + "=" + number * 9 );
document.write("<br />" + number + "x" + "10" + "=" + number * 10 );
//Q:5
let celsius = 25; // Example Celsius temperature

// Step b: Convert Celsius to Fahrenheit
let fahrenheitFromCelsius = (celsius * 9/5) + 32;

// Output: "NNoC is NNoF"
document.write( "<br />" + `${celsius}°C is ${fahrenheitFromCelsius.toFixed(2)}°F<br>`);
let fahrenheit = 77; 
let celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
document.write(`${fahrenheit}°F is ${celsiusFromFahrenheit.toFixed(2)}°C`);
//Q:6
let totalMarks = 500;         
let marksObtained = 420;      

let percentage = (marksObtained / totalMarks) * 100;
document.write('<p>Total Marks: ' + totalMarks + '</p>');
document.write('<p>Marks Obtained: ' + marksObtained + '</p>');
document.write('<p>Percentage: ' + percentage.toFixed(2) + '%</p>');
//Q:7
let dollor = 10;
let Riyal = 25;
let dollorrate = 104.80;
let Riyalrate = 28
let PKR1 = dollorrate * dollor;
let PKR2 = Riyalrate * Riyal;
let totalcurrency = PKR1 + PKR2;
document.write("Total currency in PKR is:" + totalcurrency );
//Q:8

let number1 = 5;
let result = ((number1 + 10) * 10) / 2;
document.write("<br />" + "The result is:" + result );
//Q:9
let Currentyear = 2024;
let birthyear1 = 2007;
let age1 = Currentyear - birthyear;    // Calculate current age
let age2 = age1  -2 ;
document.write("<br />" +  "Your age is"  + age2 + " years old." );
//Q:10
var radius = 5; 
var pi = 3.142;
var circumference = 2 * pi * radius;
document.write( "<br />" + "The circumference is " + circumference + "<br>");
var area = pi * radius * radius;
document.write( "The area is " + area);  
//Q:11
var favoriteSnack = "Chips"; 
var currentAge = 25; 
var maxAge = 80; 
var amountPerDay = 2; 
var yearsLeft = maxAge - currentAge;
var totalSnacks = yearsLeft * 365 * amountPerDay;
document.write("<br />" +"You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");
let message8 =  "The chapter 5 is end";
document.write("<br/>" + message8 );
// The chapter 6-9 is start??????
let message9 = "The chapter 6-9 is start";
document.write("<br />" + message9);
{
  let a = 10;
  document.write("<h2>Results:</h2>");
  document.write("The value of a is:" + a);
  let number = ++a;
  document.write("<br />" + "<br />" +"The value of ++a is: " + number);
  document.write("<br />" +"Now the value of a is:" + number);
  let number1 = a++;
  document.write("<br />" +"<br />" +"The value of a++ is:"+ number1 );
  document.write("<br />" +"Now the value of a is:" + a);
  let number2 = --a;
  document.write("<br />" +"<br />" +"The value of --a is:" + number2);
  document.write("<br />" +"Now the value of a is:" + a);
  let number3 = a--;
  document.write("<br />" +"<br />" + "The value of a-- is:" + number3);
  document.write("<br />" +"Now the value of a is:" + a);
  }
  //Q:2
  var a = 2, b = 1;
  var result1 = --a - --b + ++b + b--;
  document.write("<br />" + "<br />" + "a is " + a + "<br>");      
  document.write("b is " + b + "<br>");      
  document.write("result is " + result1 + "<br>");  
  //Q:3
  let name = prompt("Please enter your name:");
  document.write("<br />" +"Hello, " + name + "! Welcome to the website.");
  //Q:4
     // Prompt the user to enter a number
      var number2 = prompt("Please enter a number (leave blank for default 5):");
  
      // If no number is entered, use 5 as default
      if (number2 === "") {
          number2 = 9;
      } else {
          number2 = parseInt(number); // Convert input to integer
      }
  
      // Display the multiplication table 
      document.write("<h2>Multiplication Table of " + number + ":</h2>");
      for (var i = 1; i <= 10; i++) {
          document.write(number + " x " + i + " = " + (number * i) + "<br>");
      }
  //Q:5
  //The chapter 6-9 is end
  let message10 = "The chapter 6-9 is end";
  document.write("<br />" +message10);
  let message11 = "The chapter 1 to 9 assigment has been completed!\n";
  document.write("<br />" + message11);



