// Ruby Version of the code

/* 
def fizzbuzz(number)
  if number % 3 == 0 && number % 5 == 0
    'fizzbuzz'
  elsif number % 3 == 0
    'fizz'
  elsif number % 5 == 0
    'buzz'
  else
    number
  end
end
*/

// Javascript Version

function fizzBuzz(number) {

    if ( number % 3 == 0 && number % 5 == 0 ) {
      return 'fizzbuzz';
    }

    if ( number % 3 == 0 ) {
        return 'fizz';
    }

    if ( number % 5 == 0) {
        return 'buzz';
    }
      return number.toString();
}
  for(number = 0; number <= 100; number++){
    console.log(fizzBuzz(number));
}