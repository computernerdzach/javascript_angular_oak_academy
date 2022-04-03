// console.log('Hello from a serperated file!');

// var myName = 'Zachary';
// console.log(myName);

// var schoolTeam = 'mixed martial arts';
// var schoolNumber = 42;
// console.log(schoolNumber)

// var isRegistered = true;
// console.log(isRegistered);

// var job;
// console.log(job);

// job = 'student';
// console.log(job);

// console.log(myName + ' ' + schoolNumber);

// var schoolName, hasCourse;

// schoolName = 'OAKAcademy';
// hasCourse = true;

// console.log(
//     schoolName + ' has 35 courses. Does it have any course? ' + hasCourse
// );

// schoolNumber = 'forty two';
// console.log(schoolNumber)

// schoolTeam = 'tennis';
// console.log(schoolTeam);

// alert(schoolTeam);

// var age = prompt('How old is he?');
// console.log('Alex is ' + age + ' years old.');



//////////// BASIC OPERATORS ////////////
// var totalDistance, distanceAlex, distanceSam;
// totalDistance = 20;

// distanceAlex = totalDistance - 12;
// console.log(distanceAlex);
// distanceSam = totalDistance - 7;
// console.log(distanceSam);
// console.log(distanceSam * 2);
// console.log(distanceSam / 2);

// logical operators //
// var distanceToSchool, distanceToHome;

// distanceToHome = 14;
// distanceToSchool = 6;

// var isCloser = distanceToHome > distanceToSchool;
// console.log(isCloser);


// BOOLEAN LOGIC
// var isLoggedIn = false;


// CONDITIONAL STATEMENTS
// var grade;
// grade = 55;

// if (grade < 40) {
//     console.log('You can not go to next class.');
// } else if (grade >= 40 && grade < 45) {
//     console.log('You can not go to next class but you can enter the exam.');
// } else {
//     console.log('You can go to the next class.');
// }

// var cafeCutoff = 18;
// var cafeCutMessage = 'Sorry, this cafe is for adults only.';

// var drinkCutoff = 23;
// var drinkCutMessage = 'You may enter, but you cannot drink alcohol.';

// var welcomeMessage = 'Welcome! Our drink of the day is the moscow mule!';

// var customer = 16;

// if (customer < cafeCutoff) {
//     console.log(cafeCutMessage);

// } else if (customer >= cafeCutoff && customer < drinkCutoff) {
//     console.log(drinkCutMessage);

// } else {
//     console.log(welcomeMessage)
// }


// var customer = 16;
// checkAge(customer);

// customer = 20;
// checkAge(customer);

// customer = 27;
// checkAge(customer);



// function checkAge (age) {
//     if (customer < cafeCutoff) {
//         console.log(cafeCutMessage);

//     } else if (customer >= cafeCutoff && customer < drinkCutoff) {
//         console.log(drinkCutMessage);

//     } else {
//         console.log(welcomeMessage)
//     }
// }


// TERNARY OPERATOR

// var grade = 80;

// grade < 45 
//     ? console.log('You cannot go to the next class.') 
//     : console.log('You can go to the next class.');

// var result = grade < 45 ? 'failure' : 'success';
// console.log(result);

// if (grade < 45) {
//     result = 'failure'
// } else {
//     result = 'success'
// }


// SWITCH STATEMENTS

// var day;
// day = 'sunday';


// switch (day) {
//     case 'saturday': 
//         console.log('I like saturday.');
//         break;

//     case 'monday':
//         console.log('I do not like monday.');
//         break;

//     case 'friday':
//         console.log('I really like friday.');
//         break;

//     default:
//         console.log('I do not know the day.');
//         break;
// }



// var grade;
// grade = 55;

// if (grade < 40) {
//     console.log('You can not go to next class.');
// } else if (grade >= 40 && grade < 45) {
//     console.log('You can not go to next class but you can enter the exam.');
// } else {
//     console.log('You can go to the next class.');
// }

// var grade = 38;

// switch (true) {
//     case (grade < 40):
//         console.log('You cannot go to the next class.');
//         break;

//     case (grade >= 40 && grade < 45):
//         console.log('You cannot go to the next class but you can take the exam.')
//         break;

//     default:
//         console.log('You can go to the next class.')
// }


// CODE QUIZ 2

// var alexAverage = ((90 + 80 + 95) / 3);
// var saraAverage = ((89 + 76 + 98) / 3);
// var nancyAverage = ((42 + 98 + 83) / 3);

// console.log('Alex average grade ', alexAverage);
// console.log('Sara average grade ', saraAverage);
// console.log('Nancy average grade ', nancyAverage);

// switch (true) {
//     case (alexAverage > saraAverage && alexAverage > nancyAverage):
//         highScore = alexAverage;
//         console.log('Alex has the highest average:' + highScore);
//         break;

//     case (saraAverage > alexAverage && saraAverage > nancyAverage):
//         highScore = saraAverage;
//         console.log('Sara has the highest average:' + highScore);
//         break;

//     case (nancyAverage > alexAverage && nancyAverage > saraAverage):
//         highScore = nancyAverage;
//         console.log('Nancy has the highest average:' + nancyAverage); 
//         break;

//     default:
//         console.log('Highest average unclear.')
//         break;
// }


// LOOPS

// WHILE LOOP
// var i = 1;
// while (i <= 10) {
//     console.log(i);
//     i+=2;
// }

// 1)
// console.log('Problem 1:')

// var startNumber = 132;
// var i = startNumber;
// var endNumber = 148;

// while (i <= endNumber) {
//     console.log(i);
//     i += 2;
// }
// console.log('');

// // 2)
// console.log('Problem 2:');

// var seven_start = 25;
// var seven_end = 100;
// var maybePrint = seven_start;

// while (maybePrint <= 100) {
//     if (maybePrint % 7 === 0) {
//         console.log(maybePrint);
//     }
//     maybePrint++;
// }


// FOR LOOP

// console.log('PROBLEM [1]')
// for (i = 132; i <= 148; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// console.log('');
// console.log('PROBLEM [2]');
// for (i = 25; i <= 100; i++) {
//     if ((i % 5 === 0) && (i % 7 === 0)) {
//         console.log(i);
//     }
// }


// CONTINUE AND BREAK //

// console.log('Continue statement')
// for (i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) continue;
//     console.log(i)
// }

// console.log('')

// console.log('Break statement')
// for (i = 1; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         break;
//     }
// }


// FUNCTIONS //

// NO ARGUMENTS

// function sayHello() {
//     console.log('Hello, world!')
// }

// sayHello()

// function writeBlock() {
//     console.log('Hello world.')
//     console.log('Goodbye world.')
//     console.log('How are you?.')
// }

// writeBlock()
// writeBlock()
// writeBlock()
// writeBlock()


// WITH ARGUMENTS

// var myName = 'Sara';
// otherName = 'David';
// var myAge = 37;

// function sayMyNameSoMuch(name) {
//     console.log('Oh, hello', name + '.')
// }

// sayMyNameSoMuch(myName)
// sayMyNameSoMuch(otherName)


// function cube(number) {
//     console.log(number * number * number);
// }

// cube(3);
// cube(5);


// function bmi(length, weight) {
//     console.log(weight / (length * length));
// }

// bmi(1.80, 85)


// FUNCTION RETURN KEYWORD //

// function cube(number) {
//     if (number === 25) {
//         return 25;
//     }
//     return(number * number * number);
// }

// function addCubes(numberA, numberB) {
//     return(cube(numberA) + cube(numberB));
// }

// console.log(cube(9));
// console.log(addCubes(25, 10));


// function calculateAge(birthYear) {
//     return 2022 - birthYear;
// }

// var age = calculateAge(1984);

// console.log(age);


// function enterCafe(Age) {
//     if (Age < 18) {
//         return 'You cannot enter the cafe.'
//     }
//     return 'You can enter the cafe.'
// }

// console.log(enterCafe(17));
// console.log(enterCafe(38));



// FUNCTION DECLARATION AND EXPRESSION //

//DECLARATION
// function calculateAge(birthYear) {
//     return 2022 - birthYear;
// }

//EXPRESSION
// var calculateAge = function(birthYear){
//     return 2022 - birthYear;
// }


// var age = calculateAge(1984);
// console.log(age);

// calculateAge = 'John';
// console.log(calculateAge)

// var Age = calculateAge(1990);


// FUNCTION QUIZ //

// console.log('Problem 1:');

// function subtraction(x, y) {
//     console.log('Calculating', y, 'minus', x, '...')
//     return y - x;
// }

// var result1 = subtraction(3, 5);
// console.log(result1);
// console.log('');


// console.log('Problem 2:');

// function isOdd(number) {
//     console.log('Checking if', number, 'is odd ...')
//     if (number % 2 !== 0) {
//         return true;
//     }
//     return false;
// }

// var result2 = isOdd(7);
// console.log(result2);
// console.log('');


// console.log('Problem 3:');

// var addition = function (number) {
//     console.log('Adding every number from 1 to', number, '...')
//     var result = 0;
//     for(i = 1; i <= number; i++) {
//         result += i;
//     }
//     return result;
// }

// var result3 = addition(3);
// console.log(result3);
// console.log('');


// FUNCTION SCOPE //

// function sayName () {
//     var Name = 'Sheldon';
//     console.log(Name);
// }

// sayName();
// console.log(Name);

// var Name = 'Leonard';
// console.log(Name);
// sayName()

// var count = 18;
// console.log(count);

// function writeCount() {
//     console.log(count);
// }

// writeCount();



// function sayHi () {
//     var myWord = 'Hi there!';
//     console.log(myWord);
//     sayBye();

//     function sayBye () {
//         var yourWord = 'bye';
//         console.log(yourWord);
//     }
// }

// sayHi();



// var sentence = 'Hello World.';

// function saySentence() {
//     sentence = 'bye bye';
//     console.log(sentence);
// }

// saySentence();
// console.log(sentence);


// function writeNumber() {
//     var myx = 30;
//     console.log(myx);
// }

// function doSomething() {
//     console.log(myx);
// }

// writeNumber();
// doSomething();


// ARRAYS //

// var student1 = 'Sheldon';
// var student2 = 'Penny';
// var student3 = 'Leonard';
// var student4 = 'Raj';

// var students = ['Sheldon', 'Penny', 'Leonard', 'Raj'];

// //sheldon = index 0, penny = index 1, leonard = index 2, raj = index 3

// // console.log(students); 
// // console.log(students[0]);

// students[0] = 'Philip J. Fry';
// console.log(students);


// students[4] = 'Dr. John Zoidburg'
// console.log(students);

// students[7] = 'John';
// console.log(students);

// // var cats = [];
// // var cats = new Array();

// var commonData = ['John', 25, true, null];
// commonData[1];

// var cars = ['Mercedes', 'Audi', 'BMW', 'Volvo'];
// var cars_length = cars.length;

// console.log(cars_length)


// ARRAY METHODS //

// var students = ['Sheldon', 'Penny', 'Leonard', 'Raj'];

// push method adds new element to end of array
// students.push('Bender');
// console.log(students);

// pop method removes the last element in an array
// var lastStudent = students.pop();
// console.log(lastStudent);
// console.log(students);


// unshift adds a new element to the beginning of the array
// var cats = ['cat1', 'cat2', 'cat3'];
// cats.unshift('cat4');
// console.log(cats);


// shift removes element from the beginning of the array
// cats.shift();
// console.log(cats);


// indexOf method takes argument and finds it in an array
// console.log(students.indexOf('Penny'));


// slice method copies different portions of an array
var friends = ['Ross', 'Rachel', 'Joey', 'Chandler', 'Phoebe'];
var closeFriends = friends.slice(1, 3);
console.log(friends);
console.log(closeFriends);

var otherFriends = friends.slice();
console.log(otherFriends);

