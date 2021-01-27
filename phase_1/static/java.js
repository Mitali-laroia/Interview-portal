var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<h2> Interview Begins: what is your name?</h2>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h2>hello ' + input + '</h2>';// output response
    document.getElementById("input").value = "";   		// clear text box
    question = '<h2>how old are you?</h2>';			    	// load next question		
    setTimeout(timedQuestion, 2000);									// output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h2>That means you were born in ' + (2020 - input) + '</h2>';
    document.getElementById("input").value = "";   
    question = '<h2>where are you from?</h2>';					      	
    setTimeout(timedQuestion, 2000);
    } 
    
    else if (questionNum == 2) {
      output.innerHTML = '<h2>'+ input+' must be a great place!' + '</h2>';
      document.getElementById("input").value = "";   
      question = '<h2>Which role at our company you are looking for?</h2>';					      	
      setTimeout(timedQuestion, 2000);
      }  

      else if (questionNum == 3) {
        output.innerHTML = '<h2> We would love to have you as ' +  input + '</h2>';
        document.getElementById("input").value = "";   
        question = '<h2>What skills do you have?</h2>';					      	
        setTimeout(timedQuestion, 2000);
        } 
        
      else if (questionNum == 4) {
          output.innerHTML = '<h2>Nice! Great skillset. </h2>';
          document.getElementById("input").value = "";   
          question = '<h2>Now we would like to know your achievments so far!</h2>';					      	
          setTimeout(timedQuestion, 2000);
       } 
       
       else if (questionNum == 5) {
        output.innerHTML = '<h2>Wow! How must have worked so hard! </h2>';
        document.getElementById("input").value = "";   
        question = '<h2>Kudos! You completed your interview. Drop your email so that we can share the result with you!</h2>';					      	
        setTimeout(timedQuestion, 2000);
        }  
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});
