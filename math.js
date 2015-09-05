//MATH PROBLEMS LEVELS 1-3
//math operators
var random_operator = Math.floor(Math.random() * 4 + 1);
	if (random_operator < 1) {
		random_operator = "+";
	} 
	else if ( random_operator > 1 && random_operator < 2 ) {
		random_operator ='-';
	} 
	else if( random_operator > 2 && random_operator < 3 ) {
		random_operator ='*';
	} 
	else {
		 random_operator ='/';
	}
			
//level_one_math
var first_number1 = Math.floor(Math.random() * 9 + 1);
var second_number1 =  Math.floor(Math.random() * 9 + 1);
//score tally
var score = 0;
//level_one_questions
var level_one_question = first_number1 + " " + random_operator + " " + second_number1; 
	
var user_answer = prompt(level_one_question);
	
	if(user_answer === level_one_question) {
		score++;
	} else {
		score = score;	
	} 
