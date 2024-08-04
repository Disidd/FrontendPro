// 1
document.write(`1. Numbers <br>`);

counter = 10;
resultCounter = ' ';

while (counter <= 20) {
  resultCounter += counter;
  if (counter < 20) {
    resultCounter +=', ';
  }
  counter++;
}

document.write(`${resultCounter} <br>`);
 
// 2
document.write(`2. Squares of numbers <br>`);

value = 10;
squares = ' ';

while (value <= 20) {
  squares += value * value;
  if (value < 20) {
    squares +=', ';
  }
  value++;
}

document.write(`${squares} <br>`);

// 3
document.write(`3. Multiplication table by 7 <br>`);

startValue = 0;
resultMulti = ' ';

while (startValue <= 10) {
  resultMulti = startValue * 7;
  document.write(`${startValue} * 7 = ${resultMulti} <br>`);
  startValue++;
}

// 4
document.write(`4. Sum of all numbers from 1 to 15 <br>`);

firstNum = 1;
sum = 0;

while (firstNum <= 15) {
  sum += firstNum;
  firstNum++;
}

document.write(`${sum} <br>`);

// 5
document.write(`5. Multiple of all numbers from 15 to 35 <br>`);

from = 15;
multiple = 16;

while (from <= 35) {
  multiple *= from;
  from++;
}

document.write(`${multiple} <br>`);

// 6
document.write(`6. Average value numbers from 1 to 500 <br>`);

value1 = 1;
value2 = 0;

while (value1 <= 500) {
  value2 += value1;
  value1++;
}

average = value2 / 500;

document.write(`${average} <br>`);

// 7
document.write(`7. Sum of even numbers from 30 to 80 <br>`);

firstEvenNumber = 30;
sumEvenNumber = 0;

while (firstEvenNumber <= 80) {
  if (firstEvenNumber % 2 === 0) {
      sumEvenNumber += firstEvenNumber 
  }
  firstEvenNumber++;
}

document.write(`${sumEvenNumber} <br>`);

// 8
document.write(`8. All numbers from 100 to 200 multiples of 3 <br>`);

sto = 100;
multiples3 = '';

while (sto <= 200) {
  if (sto % 3 === 0) {
    multiples3 += sto + ', ';
  }
  sto++;
}

document.write(`${multiples3} <br>`);

// 9
document.write(`9. Natural numbers, all dividers <br>`);
natNumber = 9
allDivider = 0;
evenDivider = 0;

while (allDivider <= natNumber) {
  if (natNumber % allDivider === 0) {
    document.write(`${allDivider} <br>`);
  } 
  allDivider++;
}

// 10,11
document.write(`10,11. Natural numbers, even dividers and sum even dividers <br>`);
natNumber = 9;
evenDivider = 0;
sumEvenDivider = 0;

while (evenDivider <= natNumber) {
  if (evenDivider % 2 === 0) {
    document.write(`${evenDivider} <br>`);
  } 
  evenDivider++;
  sumEvenDivider += evenDivider;
}

document.write(`Sum ${sumEvenDivider}`)

document.write('Multiply board  <br>')

firstMultip = 1;

do{
    secondMultip = 1;
    do{
        multiplyResult = firstMultip * secondMultip
        document.write(`${firstMultip}*${secondMultip}=${multiplyResult} <br>`);
        secondMultip++
    }while(secondMultip <=10);
    document.write('<br>');
    firstMultip++
}while(firstMultip <= 10);