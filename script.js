// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}
// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
let number = 1;

while (number <= 100) {
    console.log(number);
    number += 2;
}
// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
let Three = 0;

do {
    Three += 3;
    console.log(Three);
} while (Three <= 100);



// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
function Prime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= num/2; i++) {
   if (num %i == 0) {
     return false;
  }
  }

  return true;
}

for (let i = 2; i <= 100; i++) {
  if (Prime(i)) {
   console.log(i);
  }
}

