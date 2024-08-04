do {
  mathSign = prompt('what do you want to do  (+ - / *).')
} while(mathSign !== '+' && mathSign !== '-' && mathSign !== '*' && mathSign !== '/');

do {
  numberOperands = prompt('How much operands do you want to use. It should be a NUMBER more then 1 and less then 7.')
} while(!(numberOperands >= 2 && numberOperands <=6));

value = 0;
result = 0;

do {
  value++;
  do {
    number = parseInt(prompt('enter number'));
  } while (isNaN(number));

  switch (mathSign){
    case '+':
        result += number;
        break;
    case '-':  
        result = value === 1 ? number : result - number;  
        break;
    case '*': 
    if (value === 1) result = 1;
         result *= number;
        break;  
        case '/':
         result = value === 1 ? number : result / number;
        break;  
}
} while (value < numberOperands);

alert(result);
