fruits = ['grapes', 'raspberry', 'coconut'];
vegetables = ['cabbage', 'avocado', 'tomato'];
fruitsPrice = [20, 25, 50];
vegetablesPrice = [8, 30, 10];
debugger
do {
  season = prompt ('Winter or Summer period?') .toLowerCase().replaceAll(' ', '');
} while (!season || !(season === 'summer' || season === 'winter'));

  switch (season) {
    case 'winter':
        multiply = 2;
        break;
    case 'summer':
        multiply = 0,8;
        break;
}

do {
  category = prompt ('Choose category in which you want to buy products: fruits or vegetables') .toLocaleLowerCase().replaceAll(' ', '');
} while (!category || !(category === 'vegetables' || category === 'fruits'));

do {
  goods = prompt (`Choose product from category ${category}`) .toLocaleLowerCase().replaceAll(' ', '');
} while ( category === 'fruits' ? fruits.indexOf(goods) === -1 : vegetables.indexOf(goods) === -1);

do {
  count = prompt (`Enter count of ${goods}`)
} while (count < 0);

switch (category) {
  case 'vegetables':
      finalPrice = vegetablesPrice[vegetables.indexOf(goods)] * count * multiply;
      break;
  case 'fruits':
      finalPrice = fruitsPrice[fruits.indexOf(goods)] * count * multiply;
      break;
}

document.write(`
  <div class="product" align="center">
      <img src="images/${category}/${goods}.svg" alt="${goods}" width="100" height="100">
      <p>Selected product: <b>${goods}</b></p>
      <p>Count of ${goods}s: <b>${count}</b></p>
      <p>Selected period: <b>${season}</b></p>
      <p>Selected category: <b>${category}</b></p>
      <p>Final Price: <b>${finalPrice} UAH</b></p>
  </div>
`)