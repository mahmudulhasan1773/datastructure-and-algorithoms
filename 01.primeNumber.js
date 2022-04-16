// input a number
// if the number is prime then output "this is prime number"
// if not, print "this not print number"

const primeNumber = (number) => {
  let isPrime = true;
  if (number === 1) {
    console.log("1 is not prime or composite number");
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${number} is prime`);
    } else {
      console.log(`${number} is not prime`);
    }
  } else {
    console.log("the number is not prime");
  }
};

primeNumber(0.99);
