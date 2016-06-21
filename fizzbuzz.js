$(document).ready(function() { 

	var input = parseInt(prompt('Please enter a number between 1 and 100')); //prompt the user to write a number and convert the user input to an integer
	var responsefor3 = 'fizz';
	var responsefor5 = 'buzz';
	var responsefor15 = 'fizzbuzz';

	//function to verify that user input is a number that is also between 1 and 100

	function checkNumber (input) {
		if (input <= 100 && input >= 1) {
			fizzbuzz();
		} else if (isNaN(input)) {
			prompt('You did not enter a number. Please enter a number between 1 and 100');
		} else {
			prompt('Your number (' + input + ') is not between 1 and 100. Please enter a number between 1 and 100');
		}
	};

	checkNumber(input);

	//if user input is correct, run fizzbuzz

	function fizzbuzz () {

		for (var i = 1; i <= input; i++){
		//creates a loop that runs 1 to the input amount

			if(i % 15 === 0) {
				$('.fb-list').append("<li>" + responsefor15 + "</li>");
			// tests if each num from 1 to input is divisible by 15; if so append fizzbuzz to ul

			} else if (i % 3 === 0) {
					$('.fb-list').append("<li>" + responsefor3 + "</li>");
				//if divisible by 3 append fizz to ul

			} else if (i % 5 === 0) { 
					$('.fb-list').append("<li>" + responsefor5 + "</li>");
				//if divisible by 5 append buzz to ul

			} else {
				$('.fb-list').append("<li>" + i + "</li>");
			}
		};
	} ;

});





	