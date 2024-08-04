// 1
document.write(`1. From 20 to 30 <br>`);

startValue = 20;
result = ' ';

while (startValue <= 30) {
  result += startValue + ' ';
  startValue += 0.5;
}
document.write(`${result} <br>`);

// 2
document.write(`2. Dollars <br>`);

oneDollar = 27;
dollars = 10;

while (dollars <= 100) {
  document.write(`${dollars} USD = ${dollars * oneDollar} UAH <br>`);
  dollars += 10;
}

// 3
document.write(`3. Integer <br>`);

integer = parseInt(prompt('Enter your number'));
firstNumber = 1;
allInteger = " "

while (firstNumber <= 100) {
  if (firstNumber ** 2 <= integer) {
    allInteger += firstNumber + ', ';
  }
  firstNumber++;
}
document.write(`${allInteger} <br>`)

// 4
document.write(`4. Simple numbers <br>`);

function isPrime(num) {
  if (num <= 1) {
      return false;
  }

  let divisor = 2;

  while (divisor <= Math.sqrt(num)) {
      if (num % divisor === 0) {
          return false;
      }
      divisor++;
  }

  return true;
}

 userInput = prompt(" enter a number :");
 number = parseInt(userInput);

if (isNaN(number)) {
    document.write("The input is not a valid number.");
} else {
    if (isPrime(number)) {
        document.write(`${number} is a simple number.`);
    } else {
        document.write(`${number} is not a simple number. <br>`);
    }
}

// 4
document.write(`5.  <br>`);
numb = parseInt(prompt('enter a number'));
decision = numb
while (decision % 3 === 0 && decision >= 3) {
  decision /= 3;
}
if (decision === 1) {
  document.write(`${numb} can`);
} else {
  document.write(`${numb} can't`);
}