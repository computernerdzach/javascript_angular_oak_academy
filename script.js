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

console.log('Continue statement')
for (i = 1; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i)
}

console.log('')

console.log('Break statement')
for (i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
        break;
    }
}