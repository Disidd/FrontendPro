birthYear = +prompt('What`s your year of birth');
city = prompt('Where are you from');
sport = prompt('What`s your favorite sport');

currentYear = new Date().getFullYear();
age = currentYear - birthYear;
 if (!birthYear) {
  yourAge = 'It is a pity that you did not want to enter yours date of birth';
 } else {
  yourAge =(age);
 }

 switch (city) {
    case 'Kyiv':
      yourCity = 'You live in the capital of Ukraine!';
      break;
    case 'London':
      yourCity ='You live in the capital of UK';
      break;
    case 'Washington':
      yourCity = 'You live in the capital of USA';
      break;
    case (city === 1):
      yourCity = `You live in the ${city}`;
      break;
    default:
      yourCity = 'It is a pity that you did not want to enter yours city'; 
 }
 
 switch (sport) {
  case 'boxing':
    yourSport = 'You want to be like Klychko?';
    break;
  case 'tennis':
    yourSport = 'You want to be like Svitolina?';
    break;
  case 'football':
    yourSport = 'You want to be like Shevchenko?';
    break;
  case (sport === 1):
    yourSport = 'Great!';
    break;
  default:
    yourSport ='It is a pity that you did not want to enter yours favorite sport'; 
}

alert(`${yourAge} 
       ${yourCity}
       ${yourSport}`)


 

