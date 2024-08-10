
array = [];

do {
  arrayLength = prompt('Enter number of array');
} while (isNaN(arrayLength) || arrayLength <= 0);

for (i = 0; i < arrayLength; i++) {
  array[i] = prompt (`Enter an array element ${i + 1}`);
}

document.write (`
  <p> 1.Create array, length and items.</p> 
  ${array} <br>
  `);

for (i = 0; i < array.length - 1; i++) {
  for (j = 0; j < array.length - i - 1; j++) {
    if (array[j] > array [j+1]){
      temp = array[j];
      array[j] = array[j + 1]
      array[j + 1] = temp;
    }
  }
}

document.write (`
  <p> 2. Sorting </p> 
  ${array} <br>
  `);

array.splice (1, 3);


document.write (`
  <p> 3. Delete </p> 
  ${array} <br>
  `);
