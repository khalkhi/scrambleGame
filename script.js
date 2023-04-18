
// Global array
let PlayersData = [];
var cQuestion = 0; //stores amount of questions asked
var cMarks = 0; //stores number of correct answers

// Register function
function Register() 
{
    // Get form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;


    // Validating form data
    if (firstName.length < 3) 
    {
        alert("First Name should be more than three characters!");
        return false;
    }
    if (lastName.length < 3)
    {
        alert("Last Name should be more than three characters!");
        return false;
    }

    const today = new Date();
    const birthDate = new Date(dob);
    let ageValue = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) 
    {
        ageValue--;
    }

    if (ageValue < 8 || ageValue > 25) 
        {
            alert("Age should be between 8 and 25!");
            return false;
        }

    if (!email.endsWith("@gmail.com"))
        {
            alert("Email should end with '@gmail.com'!");
            return false;
        }

    // Append validated data to the global array
    PlayersData.push(
        {
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            age: ageValue,
            gender: gender,
            email: email,
            questions: [],
            answers: [],
            status: [],
        });

         // Disable all fields and the Register button
    const form = document.querySelector("form");

    const formFields = form.querySelectorAll("input, select");
    formFields.forEach((field) => { field.disabled = true; });

    const registerBtn = document.getElementById("registerBtn");
    registerBtn.disabled = true;


    // Enable Start and End buttons
    const startBtn = document.getElementById("start-btn");
    startBtn.disabled = false;

    const endBtn = document.getElementById("end-btn");
    endBtn.disabled = false;

      /*  function CheckAnswer(originalChars, playerAnswer) {
            // Perform JavaScript validation on playerAnswer
            // Here's an example using a regular expression to ensure playerAnswer only contains letters and spaces:
            if (!/^[A-Za-z ]+$/.test(playerAnswer)) {
              alert("Invalid answer! Please only use letters and spaces.");
              return;
            }
            
			cQuestion = cQuestion + 1;//a counter to count the amount of question given
			
            // Check if playerAnswer is correct
			var isCorrect
			if(originalChars.toLowerCase() == playerAnswer.toLowerCase()){
				isCorrect = playerAnswer.toLowerCase();
				cMarks = cMarks + 1;
			}
          
            // Append data to PlayerData array
            PlayerData.push({
              originalChars: originalChars,
              playerAnswer: playerAnswer,
              isCorrect: isCorrect
            });
          
            // Return whether the answer is correct
            return isCorrect;
          } 
          

    // Disable all fields and the Register button
    const form = document.querySelector("form");
    const formFields = form.querySelectorAll("input, select");
    formFields.forEach((field) => { field.disabled = true; });
    const registerBtn = document.getElementById("registerBtn");
    registerBtn.disabled = true;


    // Enable Start and End buttons
    const startBtn = document.getElementById("start-btn");
    startBtn.disabled = false;
    const endBtn = document.getElementById("end-btn");
    endBtn.disabled = false;
*/
}
//register function ends here

//Calculating age from dob using js
function calculateAge() {
    var dob = document.getElementById("dob").value;
    var dobDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    var m = today.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }
    document.getElementById("age").value = age;
  }




// PlayGame function
function PlayGame()
    {
    // Disable Start button
    const startBtn = document.getElementById("start-btn");
    startBtn.disabled = false;//just edited back to true


    //Characters for the game
    const minChars = 4;
    const maxChars = 6;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const wordList = ['Abroad', 'Casual', 'Around','Couple','Accept','Caught','Arrive','Course','Access','Center','Artist','Covers','Across','Centre','Aspect','Create',
    'Acting','Chance','Assess','Credit','Action','Change','Assist','Crisis','Active','Charge','Assume','Custom','Actual','Choice','Attack','Damage',
    'Advice','Choose','Attend','Danger','Advise','Chosen','August','Dealer','Affect','Church','Author','Debate','Afford','Circle','Avenue','Decade',
    'Afraid','Client','Backed','Decide','Agency','Closed','Barely','Defeat','Agenda','Closer','Battle','Defend','Almost','Coffee','Beauty','Define',
    'Always','Column','Became','Degree','Amount','Combat','Become','Demand','Animal','Coming','Before','Depend','Annual','Common','Behalf','Deputy',
    'Answer','Comply','Behind','Desert','Anyone','Copper','Belief','Design','Anyway','Corner','Belong','Desire','Appeal','Costly','Bestie','Detail',
    'Appear','County','Better','Detect','Beyond','Budget','During','Device','Bishop','Burden','Easily','Differ','Border','Bureau','Eating','Dinner','Bottle','Button',
    'Editor','Direct','Bottom','Camera','Effect','Doctor','Bought','Cancer','Effort','Dollar','Branch','Cannot','Eighth','Domain','Breath','Carbon','Either',
    'Double','Bridge','Career','Eleven','Driven','Bright','Castle','Emerge','Driver','Wacko','Wader','Wafer','Wains','Waker','Waler','Wames',
    'Wamus','Wands','Waney','Wanes','Wanks','Wants','Wards','Wares','Warts','Warty','Waser','Wasps','Waspy','Waste','Sadly','Saddo',
    'Saint','Salon','Salps','Salsa','Sales','Sakai','Saker','Salad','Salal','Salat','Sauce','Sauna','Saved','Saver','Saves','Rarau',
    'Ravin','Rayah','Rayon','Reeve','Rhine','Rhino','Robin','Roche','Roper','Roral','Rinse','Cream','Dream','Gloom','Steam','Gleam','Realm','Broom','Sperm','Psalm','Album','Charm'];

    let word = '';
    let numChars = Math.floor(Math.random() * (maxChars - minChars + 1)) + minChars;
    for (let i = 0; i < numChars; i++) {
        let index = Math.floor(Math.random() * characters.length);
        word += characters[index];
    }
    
    // Scramble the word
    let scrambledWord = scramble(word);

    // Display the scrambled word in the Play area
    const playArea = document.getElementById('scrambled-word');
    playArea.value = scrambledWord;
    
    // Validating word in the word list
    if (wordList.includes(word)) {
        console.log('Valid word: ' + word);
    } else {
        console.log('Invalid word: ' + word);
    }
}


function scramble(word) 
{
    let scrambledWord = '';
    let wordArray = word.split('');
    while (wordArray.length > 0) 
    {
        let index = Math.floor(Math.random() * wordArray.length);
        scrambledWord += wordArray.splice(index, 1);
    }
    return scrambledWord;
}



  // Enable answer input, Accept and Next buttons
  /*const answerInput = document.getElementById("answer-input");
  answerInput.disabled = false;
  const acceptBtn = document.getElementById("accept-btn");
  acceptBtn.disabled = false;
  const nextBtn = document.getElementById("next-btn");
  nextBtn.disabled = false;


  // Clear previous answer
  answerInput.value = "";
*/

function findPercentageScore(){
	// Getting player name
	const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

	  
	//Getting current date
	
	const date = new Date();

	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	let currentDate = `${day}-${month}-${year}`;


	// Calculation for percentage score

	var percent = (cMarks/cQuestion) * 100; 


	
	//Clearing the form
	document.getElementById("form").reset();
	
	//Display in textbox
	var textArea = document.getElementById('showpercentage');
	textArea.textContent = "First Name: " + firstName + ", " + "Last Name: " + lastName + ", " + "Current Date : " + currentDate + ", " + "Percentage Score: " + percent + ", " + "Number of Questions: " + cQuestion + ", " + "Number of Questions Answered: " + cMarks;  

	
	 // Enable the Register button and Input
    const form = document.querySelector("form");
    const formFields = form.querySelectorAll("input, select");
    formFields.forEach((field) => { field.disabled = false; });
    const registerBtn = document.getElementById("registerBtn");
    registerBtn.disabled = false;

    // Disable Start and End buttons
    const startBtn = document.getElementById("start-btn");
    startBtn.disabled = true;
    const endBtn = document.getElementById("endBtn");
    endBtn.disabled = true;
	
	// Disable play and result buttons
	// not sure if this is gonna work because the end button to call this fuction is on registration file while play and result buttons are on index file.
	
	document.getElementById("Play").disabled = true;
	document.getElementById("RESULTS").disabled = true;
	
	
	
	
	//note: I added a id for the form in registration.html and changed the id for end button as well
	// note: the check answer function in task 14 is need to get amount of questions ask and answers correct to get percentage
}


function showAll() {
  var showAllPlayersTextarea = document.getElementById("showallplayers");
  showAllPlayersTextarea.value = ""; // clear the textarea
 
  // iterate over the PlayerData array
  for (var i = 0; i < PlayerData.length; i++) {
    var player = PlayerData[i];
 
    // retrieve player information
    var firstName = player.firstName;
    var lastName = player.lastName;
    var age = player.age;
    var questions = player.questions;
    var answers = player.answers;
    var status = player.status;
    var score = player.score;
 
    // format player information
    var playerInfo = firstName + ", " + lastName + ", " + age + ", " + questions.join(", ") + ", " + answers.join(", ") + ", " + status + ", " + score + "%";
 
    // append player information to the textarea
    showAllPlayersTextarea.value += playerInfo + "\n";
  }
}




function checkAnswer() {
  // retrieve selected answers
  var selectedAnswers = [];
  var answerRadios = document.getElementsByName("answer");
  for (var i = 0; i < answerRadios.length; i++) {
    if (answerRadios[i].checked) {
      selectedAnswers.push(answerRadios[i].value);
    }
  }
  cQuestion = cQuestion + 1;//a counter to count the amount of question given
  
  // Check if playerAnswer is correct
  var isCorrect
			if(originalChars.toLowerCase() == playerAnswer.toLowerCase()){
				isCorrect = playerAnswer.toLowerCase();
				cMarks = cMarks + 1;
			}
  
  
 
  // check if all questions are answered
  if (selectedAnswers.length < QuestionData.length) {
    alert("Please answer all questions.");
    return;
  }
 
  // calculate score
  var numCorrect = 0;
  for (var i = 0; i < selectedAnswers.length; i++) {
    if (selectedAnswers[i] === QuestionData[i].answer) {
      numCorrect++;
    }
  }
  var score = (numCorrect / QuestionData.length) * 100;
 
  // update player data
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var age = document.getElementById("age").value;
  var questions = QuestionData.map(function(question) {
    return question.question;
  });
  var status = (score >= 60) ? "PASS" : "FAIL";
  var player = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    questions: questions,
    answers: selectedAnswers,
    status: status,
    score: score.toFixed(1)
  };
  PlayerData.push(player);
 
  // display all player data
  showAll();
  
  // Return whether the answer is correct
  //return isCorrect;
  
  
  
}


function showfreq() {
    var chartArea = document.getElementById("showcharts");
    
    var genders = ["Male", "Female"];
    var percentageScores = ["<50", "50-59", "60-69", "70-79", "80-89", "90-99", "100"];
    var genderCounts = [0, 0];
    var percentageScoreCounts = [0, 0, 0, 0, 0, 0, 0];
    var totalPlayers = PlayersData.length;
  
    PlayersData.forEach(function(player) {
      if (player.gender == "male") {
        genderCounts[0]++;
      } else if (player.gender == "female") {
        genderCounts[1]++;
      }
  
      var percentageScore = findPlayerPercentage(player.firstName, player.lastName);
      if (percentageScore == "N/A") {
        percentageScoreCounts[0]++;
      } else {
        percentageScore = parseFloat(percentageScore);
        if (percentageScore < 50) {
          percentageScoreCounts[1]++;
        } else if (percentageScore >= 50 && percentageScore <= 59) {
          percentageScoreCounts[2]++;
        } else if (percentageScore >= 60 && percentageScore <= 69) {
          percentageScoreCounts[3]++;
        } else if (percentageScore >= 70 && percentageScore <= 79) {
          percentageScoreCounts[4]++;
        } else if (percentageScore >= 80 && percentageScore <= 89) {
          percentageScoreCounts[5]++;
        } else if (percentageScore >= 90 && percentageScore <= 99) {
          percentageScoreCounts[6]++;
        } else if (percentageScore == 100) {
          percentageScoreCounts[7]++;
        }
      }
    });
  
    var genderTable = "<table>";
    genderTable += "<tr><th>Gender</th><th>Count</th><th>Percentage</th><th>Graph</th></tr>";
    for (var i = 0; i < genders.length; i++) {
      genderTable += "<tr><td>" + genders[i] + "</td><td>" + genderCounts[i] + "</td><td>" + ((genderCounts[i] / totalPlayers) * 100).toFixed(1) + "%</td><td><img src='thin_bar.jpeg' width='" + ((genderCounts[i] / totalPlayers) * 100).toFixed(1) + "'></td></tr>";
    }
    genderTable += "</table>";
  
    var percentageScoreTable = "<table>";
    percentageScoreTable += "<tr><th>Percentage Score</th><th>Count</th><th>Percentage</th><th>Graph</th></tr>";
    for (var i = 0; i < percentageScores.length; i++) {
      percentageScoreTable += "<tr><td>" + percentageScores[i] + "</td><td>" + percentageScoreCounts[i] + "</td><td>" + ((percentageScoreCounts[i] / totalPlayers) * 100).toFixed(1) + "%</td><td><img src='thin_bar.jpeg' width='" + ((percentageScoreCounts[i] / totalPlayers) * 100).toFixed(1) + "'></td></tr>";
    }
    percentageScoreTable += "</table>";
  
    chartArea.innerHTML += genderTable;
    chartArea.innerHTML += percentageScoreTable;
  }
  
  showfreq();
  setInterval(function() {
    showfreq();
  }, 5000);
  
  