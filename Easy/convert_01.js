/*
Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

Examples
convert(1, 3) ➞ 3780

convert(2, 0) ➞ 7200

convert(0, 0) ➞ 0
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

function convert(hours,minutes) {

  let secondes = 0;
  hours = hours * 3600;
  minutes = minutes * 60;
  secondes = hours + minutes; 
  return secondes; 

}

exports.solution = convert;
