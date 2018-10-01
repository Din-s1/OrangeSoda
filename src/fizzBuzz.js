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

function Fizzbuzz(){

  if ( (( number % 3 ==0 ) && (number % 5 == 0)) ){
    return 'fizzbuzz'
  }

  else if ( number % 3 == 0 ) {
    return 'fizz'
  }

  else if ( number % 5 == 0) {
    return 'buzz'
  }

  else {
   return number
  }

}

var number;
for(number = 0; number <= 100; number++) {
Fizzbuzz(number);
}