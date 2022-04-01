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

var day;
day = 'sunday';


switch (day) {
    case 'saturday': 
        console.log('I like saturday.');
        break;

    case 'monday':
        console.log('I do not like monday.');
        break;

    case 'friday':
        console.log('I really like friday.');
        break;

    default:
        console.log('I do not know the day.');
        break;
}



// var grade;
// grade = 55;

// if (grade < 40) {
//     console.log('You can not go to next class.');
// } else if (grade >= 40 && grade < 45) {
//     console.log('You can not go to next class but you can enter the exam.');
// } else {
//     console.log('You can go to the next class.');
// }

var grade = 38;

switch (true) {
    case (grade < 40):
        console.log('You cannot go to the next class.');
        break;
    
    case (grade >= 40 && grade < 45):
        console.log('You cannot go to the next class but you can take the exam.')
        break;

    default:
        console.log('You can go to the next class.')
}