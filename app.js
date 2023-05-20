/*                  Question-01. 
Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.*/

// var firstName = prompt("Enter your first name.");
// var lastName = prompt(" Enter your last name.");
// var fullName = firstName + " " + lastName;

// alert("Hello " + fullName + "!");

/*                  Question-02. 
Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser */

// var phoneModel = prompt("Enter your favorite mobile phone model.");
// var modelLength = phoneModel.length;
// alert(`My favorite phone is: ${phoneModel}`);
// alert(`Length of string is: ${modelLength}`);


/*                  Question-03. 
Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser . */

// var countryName = "Pakistani";
// var index_n = countryName.indexOf("n");
// alert(`index of n in Pakistani is at: ${index_n}`);


/*                  Question-04. 
Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser.*/

// var hello = "Hello world";
// var lastIndex_l = hello.lastIndexOf("l");
// alert(`Last index of "l" in "Hello World" is at: ${lastIndex_l}`)


/*                  Question-05. 
Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser.*/

// var pakistan = "Pakistani";
// var findChar = pakistan.charAt(3);
// alert(`Character at index 3 is: ${findChar}`);



/*                  Question-06. 
Repeat Q1 using string concat() method.*/

// var fName = prompt("Enter your first name.");
// var lName = prompt(" Enter your last name.");
// alert(`Hello ${fName} ${lName}`);


/*                  Question-07. 
Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser.*/

// var hyderabad = "Hyderabad";
// var islamabad = hyderabad.replace("Hyder", "Islam");
// alert(`City: ${hyderabad} `);
// alert(`After replacement: ${islamabad}`)


/*                  Question-08. 
Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”;*/

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace_and = message.replace(/and/g, "&");

// // var replace_and = message.replaceAll("and", "&");

// alert(`Before: ${message}`);
// alert(`After: ${replace_and}`)


/*                  Question-09. 
Write a program that converts a string “472” to a number
472. Display the values & types in your browser.*/

// let string_num = "472";
// let typeOfNum = typeof (string_num);
// alert(`Type of "472" is ${typeOfNum}`);

// let int_num = + string_num;
// let typeOfnum = typeof (int_num);
// alert(`Type of ${int_num} is ${typeOfnum}`);


/*                  Question-10. 
Write a program that takes user input. Convert and
show the input in capital letters.*/

// var word = prompt("Enter a word");
// var upercase = word.toUpperCase();
// document.write(`The uppercase of ${word} is ${upercase}`);


/*                  Question-11. 
Write a program that takes user input. Convert and
show the input in lower case.*/

// let words = prompt("Enter a word");
// let lowercase = words.toLowerCase();
// document.write(`The uppercase of ${words} is ${lowercase}`);


/*                  Question-12. 
Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser.*/

// var num = 35.36;
// var numTostr = num.toString().replace(".", "");
// alert(`Number: ${num}`);
// alert(`Int to string: ${numTostr}`);


/*                  Question-13. 
Write a program to take user input and store username
in a variable. If the username contains any special symbol
among [@ . , !], prompt the user to enter a valid username.
For character codes of [@ .
Note:
ASCII code of ! is 33
ASCII code of , is 44
ASCII code of . is 46
ASCII code of @ is 64*/

// let userName = prompt("Enter user name");
// if (userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")) {
//     alert("Enter valid user name");
// }
// else {
//     alert("User name is correct");
// }


/*                  Question-14. 
You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability.*/

// var userSearch = prompt("Welcome to our bakery. What do you want to order sir/ma'am?");
// userSearch = userSearch.toLocaleLowerCase();
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (var i = 0; i <= bakeryItems.length; i++) {
//     if (userSearch === bakeryItems[i]) {
//         document.write(`${userSearch} is available`);
//     }
// }
    

/*                  Question-15. 
Write a program to take password as an input from
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.*/

// let password = prompt("Enter a password:");
// if (password.length < 6 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password) || /^[0-9]/.test(password)) {
//     alert("Please enter a valid password.");
//   } else {
//     alert("Password is valid!");
// }


/*16. Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser.*/

// var university = "University of Karachi";
// var strToArr = university.split();
// document.write(strToArr);


/*17. Write a program to display the last character of a user
input.*/

// var input = prompt("Enter a value");
// var lastChar = input.charAt(input.length-1);
// document.write(lastChar);


/*18. You have a string “The quick brown fox jumps over the
lazy dog”. Write a program to count number of
occurrences of word “the” in given string. */

// var phrase = "The quick brown fox jumps over the lazy dog";
// var counting = phrase.repeat("the");
// console.log(counting);