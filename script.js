
// Global array
let PlayersData = [];
var word = ' ';
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

    if (ageValue < 8 || ageValue > 12) 
        {
            alert("Age should be between 8 and 12!");
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

    const endBtn = document.getElementById("endBtn");
    endBtn.disabled = false;

      /*  
    // Disable all fields and the Register button
    const form = document.querySelector("form");
    const formFields = form.querySelectorAll("input, select");
    formFields.forEach((field) => { field.disabled = true; });
    const registerBtn = document.getElementById("registerBtn");
    registerBtn.disabled = true;


    // Enable Start and End buttons
    const startBtn = document.getElementById("start-btn");
    startBtn.disabled = false;
    const endBtn = document.getElementById("endBtn");
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


  const minChars = 4;
  const maxChars = 6;
  const words = ['apple', 'banana', 'cherry', 'orange', 'pear', 'peach', 'plum', 'Abroad', 'Casual', 'Around','Couple','Accept','Caught','Arrive',
  'Course','Access','Center','Artist','Covers','Across','Centre','Aspect','Create',
  'Acting','Chance','Assess','Credit','Action','Change','Assist','Crisis','Active','Charge','Assume','Custom','Actual','Choice','Attack','Damage',
  'Advice','Choose','Attend','Danger','Advise','Chosen','August','Dealer','Affect','Church','Author','Debate','Afford','Circle','Avenue','Decade',
  'Double','Bridge','Career','Eleven','Driven','Bright','Castle','Driver','Wacko','Wader','Wafer','Wains','Waker','Waler','Wames','Wands',
  'Waney','Wanes','Wanks','Wants','Wards',
  'Saint','Salon','Salsa','Sales','Salad','Salal','Salat','Sauce','Sauna','Saved','Saver','Saves','Rarau','Rhino','Robin','Roche','Roper','Roral','Rinse','Cream','Dream','Gloom','Steam','Gleam','Realm','grape'];
  
  function PlayGame() {
      word = getRandomWord(minChars, maxChars, words);
      document.getElementById("wordArea").innerHTML = scrambleWord(word);
      document.getElementById("answer").value = "";
      document.getElementById("answer").disabled = false;
      document.getElementById("accept-btn").disabled = false;
      document.getElementByTagName("button")[2].disabled = false;
      // Clear previous answer
   answerInput.value = "";
  }

 
  
  function getRandomWord(minChars, maxChars, words) {
      let filteredWords = words.filter(word => {
          return word.length >= minChars && word.length <= maxChars;
      });
      return filteredWords[Math.floor(Math.random() * filteredWords.length)];
  }
  
  function scrambleWord(word) {
      var scrambled = '';
      var chars = word.split('');
      while (chars.length > 0) {
          var index = Math.floor(Math.random() * chars.length);
          scrambled += chars[index];
          chars.splice(index, 1);
      }
      return scrambled;

      
  }

  /* Enable answer input, Accept and Next buttons
  const answerInput = document.getElementById("answer-input");
  answerInput.disabled = false;
  const acceptBtn = document.getElementById("accept-btn");
  acceptBtn.disabled = false;
  const nextBtn = document.getElementById("next-btn");
  nextBtn.disabled = false;
*/
 

//validate the player's answer,
document.getElementById("answer").addEventListener("blur", function() {
  var answer = this.value.toLowerCase();
  var unscrambled = unscrambleWord(document.getElementById("wordArea").innerHTML);
  if (answer === unscrambled) {
      // correct answer
  } else {
      // incorrect answer
  }
  answerInput.value = "";
});

function unscrambleWord(word) {
  var unscrambled = '';
    var chars = word.split('');
    for (var i = 0; i < word.length; i++) {
        var index = chars.indexOf(word[i]);
        unscrambled += chars[index];
        chars.splice(index, 1);
    }
    return unscrambled;
}

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
	textArea.textContent = "First Name: " + firstName + ", " + "Last Name: " + lastName + ", " +
   "Current Date : " + currentDate + ", " + "Percentage Score: " + percent + ", " + "Number of Questions: " +
    cQuestion + ", " + "Number of Questions Answered: " + cMarks;  

//Display in textbox
var textArea1 = document.getElementById('showcharts');
textArea1.textContent = "First Name: " + firstName + ", " + "Last Name: " + lastName + ", " +
 "Current Date : " + currentDate + ", " + "Percentage Score: " + percent.toFixed(2) + "%" + ", " +
  "Number of Questions: " + cQuestion + ", " + "Number of Questions Answered: " + cMarks;  

//Display in textbox on results page
var textArea2 = document.getElementById('showresults');
textArea2.textContent = "First Name: " + firstName + ", " + "Last Name: " + lastName + ", " +
 "Current Date : " + currentDate + ", " + "Percentage Score: " + percent.toFixed(2) + "%" + ", " +
  "Number of Questions: " + cQuestion + ", " + "Number of Questions Answered: " + cMarks;

	
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
  
  
