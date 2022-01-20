/*

    Author: {
        platform: "Github",
        user: "cal-dev-lab"
    },
    About: {
        description: "Medal sorting for a running race."
    }


*/

// Declare position
const finalPosition = 'FIRST';

// Medal award
let medalAwarded = '';

// Declare user name
const userName = 'John';

// Medal sorting logic
switch ( finalPosition ) {
    case 'first'.toUpperCase():
        medalAwarded = 'Gold';
    break;
    case 'second'.toUpperCase():
        medalAwarded = 'Silver';
    break;
    case 'third'.toUpperCase():
        medalAwarded = 'Bronze';
    break;
}

// Log final results to console
console.log(`${userName} finished in ${finalPosition} place! They are awarded a ${medalAwarded} medal.`);