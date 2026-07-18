/*
========================================
JAVASCRIPT COURSE
Part 1

Day 1 : Variables
Day 2 : Data Types
Day 3 : Operators
Day 4 : Input & Output
Day 5 : Conditions
Day 6 : Loops
Day 7 : Functions
========================================
*/


// ==========================
// Day 1 : Variables
// ==========================

let name = "Muhammad Yaseen";
const country = "Pakistan";
let age = 20;

console.log("Name:", name);
console.log("Country:", country);
console.log("Age:", age);


// ==========================
// Day 2 : Data Types
// ==========================

let language = "JavaScript";   // String
let marks = 100;               // Number
let isStudent = true;          // Boolean
let city = null;               // Null
let future;                    // Undefined

console.log(typeof language);
console.log(typeof marks);
console.log(typeof isStudent);
console.log(city);
console.log(future);


// ==========================
// Day 3 : Operators
// ==========================

let a = 20;
let b = 10;

console.log("Addition =", a + b);
console.log("Subtraction =", a - b);
console.log("Multiplication =", a * b);
console.log("Division =", a / b);
console.log("Modulus =", a % b);


// ==========================
// Day 4 : Input & Output
// ==========================

alert("Welcome to JavaScript!");

let username = prompt("Enter your name:");

console.log("Welcome " + username);


// ==========================
// Day 5 : Conditions
// ==========================

let number = 18;

if(number >= 18){
    console.log("You are Adult.");
}else{
    console.log("You are Minor.");
}


// ==========================
// Day 6 : Loops
// ==========================

for(let i = 1; i <= 5; i++){
    console.log("Loop Number:", i);
}


// ==========================
// Day 7 : Functions
// ==========================

function greet(name){
    console.log("Hello " + name);
}

greet("Muhammad Yaseen");



/*
========================================
Part 1 Completed ✅

Day 1 : Variables ✅
Day 2 : Data Types ✅
Day 3 : Operators ✅
Day 4 : Input & Output ✅
Day 5 : Conditions ✅
Day 6 : Loops ✅
Day 7 : Functions ✅
========================================
*/
/*
========================================
JAVASCRIPT COURSE
Part 2

Day 8  : Arrays
Day 9  : Objects
Day 10 : DOM Basics
Day 11 : DOM Selectors
Day 12 : Events
Day 13 : Forms
Day 14 : Timing Functions
========================================
*/


// ==========================
// Day 8 : Arrays
// ==========================

let skills = ["HTML", "CSS", "JavaScript", "Git"];

console.log("Skills:");
console.log(skills);

console.log(skills[0]);
console.log(skills[1]);

skills.push("React");

console.log(skills);


// ==========================
// Day 9 : Objects
// ==========================

let student = {
    name: "Muhammad Yaseen",
    age: 20,
    country: "Pakistan",
    course: "Full Stack Web Development"
};

console.log(student);
console.log(student.name);
console.log(student.course);


// ==========================
// Day 10 : DOM Basics
// ==========================

let heading = document.querySelector("h1");

console.log(heading);

heading.style.color = "purple";


// ==========================
// Day 11 : DOM Selectors
// ==========================

let paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function(item){

    item.style.color = "#444";

});


// ==========================
// Day 12 : Events
// ==========================

heading.addEventListener("click", function(){

    alert("Welcome Muhammad Yaseen!");

});


// ==========================
// Day 13 : Forms
// ==========================

let username = "Muhammad Yaseen";

if(username !== ""){

    console.log("Form Submitted Successfully");

}
else{

    console.log("Please Enter Your Name");

}


// ==========================
// Day 14 : Timing Functions
// ==========================

setTimeout(function(){

    console.log("Welcome to JavaScript!");

},3000);

setInterval(function(){

    console.log("Learning JavaScript...");

},10000);


/*
========================================
Part 2 Completed ✅

Day 8  : Arrays ✅
Day 9  : Objects ✅
Day 10 : DOM Basics ✅
Day 11 : DOM Selectors ✅
Day 12 : Events ✅
Day 13 : Forms ✅
Day 14 : Timing Functions ✅
========================================
*/
/*
========================================
JAVASCRIPT COURSE
Part 3 (Final)

Day 15 : ES6
Day 16 : Fetch API
Day 17 : Async / Await
Day 18 : Local Storage
Day 19 : Mini Project
Day 20 : Final JavaScript Project
========================================
*/


// ==========================
// Day 15 : ES6
// ==========================

const firstName = "Muhammad";
const lastName = "Yaseen";

const fullName = `${firstName} ${lastName}`;

console.log("Full Name:", fullName);


// ==========================
// Day 16 : Fetch API
// ==========================

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log("User Data:", data);
    })
    .catch(error => {
        console.log("Error:", error);
    });


// ==========================
// Day 17 : Async / Await
// ==========================

async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const data = await response.json();
        console.log("Async User:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUser();


// ==========================
// Day 18 : Local Storage
// ==========================

localStorage.setItem("studentName", "Muhammad Yaseen");
localStorage.setItem("course", "Full Stack Web Development");

console.log(localStorage.getItem("studentName"));
console.log(localStorage.getItem("course"));


// ==========================
// Day 19 : Mini Project
// ==========================

let totalProjects = 8;

function showProjects() {
    console.log(`You have completed ${totalProjects} projects.`);
}

showProjects();


// ==========================
// Day 20 : Final JavaScript Project
// ==========================

console.log("HTML Completed ✅");
console.log("CSS Completed ✅");
console.log("JavaScript Completed ✅");
console.log("Congratulations! Your First Web Development Journey is Complete.");

alert("🎉 Congratulations Muhammad Yaseen!\nYou have completed HTML, CSS & JavaScript.");



/*
====================================================
JAVASCRIPT COMPLETED

Day 1  : Variables ✅
Day 2  : Data Types ✅
Day 3  : Operators ✅
Day 4  : Input & Output ✅
Day 5  : Conditions ✅
Day 6  : Loops ✅
Day 7  : Functions ✅
Day 8  : Arrays ✅
Day 9  : Objects ✅
Day 10 : DOM Basics ✅
Day 11 : DOM Selectors ✅
Day 12 : Events ✅
Day 13 : Forms ✅
Day 14 : Timing Functions ✅
Day 15 : ES6 ✅
Day 16 : Fetch API ✅
Day 17 : Async / Await ✅
Day 18 : Local Storage ✅
Day 19 : Mini Project ✅
Day 20 : Final JavaScript Project ✅

JavaScript Course Successfully Completed ✅
====================================================
*/