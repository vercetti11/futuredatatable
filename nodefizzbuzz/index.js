const fs = require("fs");

const logger = fs.createWriteStream("fizzbuzz.log");

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

for (var i = 1; i <= 500; i++) {
  if (isPrime(i)) {
    console.log("FIZZBUZZ++");
    logger.write("FIZZBUZZ++ \n");
  } else if (i % 15 === 0) {
    console.log("FIZZBUZZ");
    logger.write("FIZZBUZZ \n");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
    logger.write("FIZZ \n");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
    logger.write("BUZZ \n");
  } else {
    console.log(i);
    logger.write(i + "\n");
  }
}
