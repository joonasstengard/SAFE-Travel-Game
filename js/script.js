//Scripts in Header
//Asperger Quiz

//Quiz questions and the answers etc in an array
const quiz = [
  {
    question: "Question 1: Is Asperger syndrome a disease?",
    answer: "False",
	explanation: "Asperger syndrome is not a disease, it is a developmental disorder that entails a neurobiological alteration.",
	image: "https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/05/asperger11.png"
  },
  {
    question: "Question 2: Can Asperger syndrome be recognized by physical features?",
    answer: "False",
	explanation: "Each person has their own unique personal characteristics, they do not need to have any determining trait.",
	image: "https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/06/asperger12.png"
  },
  {
    question: "Question 3: Do all people with Asperger syndrome posses extraordinary intelligence?",
    answer: "False",
	explanation: "People with Asperger syndrome usually present normal levels of intelligence, only sometimes above average.",
	image: "https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/06/asperger13.png"
  },
  {
    question: "Question 4: Are people with Asperger syndrome part of the autism spectrum (ASD)?",
    answer: "Correct",
	explanation: "The autism spectrum presents different degrees, and in turn each degree implies a series of difficulties and needs among the people diagnosed. Asperger syndrome is usually classified as grade 1 on the autism spectrum.",
	image: "https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/05/asperger1.png"
  },
  {
    question: "Question 5: Can Asperger syndrome be diagnosed at any stage of life?",
    answer: "Correct",
	explanation: "Asperger syndrome can be diagnosed at any stage of an individuals life.",
	image: "https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/06/asperger15.png"
  },
  {
    question: "Question 6: Is it true that people with Asperger syndrome don't have any emotions?",
    answer: "False",
	explanation: "People with Asperger syndrome do posses and express emotions.",
	image: "https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/06/asperger16.png"
  },
  {
    question: "Question 7: Do people with Asperger have difficulties in being accepted by society?",
    answer: "Correct",
	explanation: "Not everyone is socially involved or bothers to understand that there are realities other than their own. People with Asperger syndrome are a group that is at risk of social exclusion.",
	image: "https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/06/asperger17.png"
  },
  {
    question: "Question 8: Is Asperger syndrome exclusive to the male gender?",
    answer: "False",
	explanation: "Although it is true that the prevalence is higher in men, gender stereotypes influence the diagnosis of people with the female gender.",
	image: "https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/06/asperger18.png"
  },
  {
    question: "Question 9: Do people with Asperger syndrome have a different way of thinking and feeling?",
    answer: "Correct",
	explanation: "People with Asperger can perceive reality differently, interpret it in their own way and even notice aspects that normally go unnoticed. On many occasions they also adapt the emotions that they believe society expects of them.",
	image: "https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/06/asperger19.png"
  },
  {
    question: "Question 10: Do people with Asperger Syndrome like physical contact?",
    answer: "False",
	explanation: "People with Asperger can be more selective when it comes to physical contact. Sometimes they do not understand the social imposition of contact, like the customs of hugging and kissing.",
	image: "https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/06/asperger20.png"
  }
];

let currentQuestion = 0;
	
//this is the counter for how many questions the user has answered correctly
let correctAnswers = 0;

//Function to display the current question, this starts the quiz and also hides
//the start quiz button, and shows the truth/myth buttons
//keep in mind that this function is called every time a new question is needed
function displayQuestion() {

  //text prompt for the new question
  const questionElement = document.getElementById("quiz-question");
  questionElement.textContent = quiz[currentQuestion].question;
	
  //image for the new question
  const questionImage = document.getElementById("quizImage");
  questionImage.src = quiz[currentQuestion].image;
	
  //this is done to make sure it's done once at the start of the quiz
  const startQuizButton = document.getElementById("startQuizButton");
	startQuizButton.style.display = "none";
  const quizOptions = document.getElementById("quiz-options");
	quizOptions.style.display = "flex";
	
  //hide the next question button after every time it's pressed
  document.getElementById("nextQuestionButton").style.display = "none";
  
}

//Function to check the selected answer, called from HTML of Study module directly
function checkAnswer(answer) {
  const resultElement = document.getElementById("quiz-result");

  if (answer === quiz[currentQuestion].answer) {
	correctAnswers++;
    resultElement.innerHTML = "Your answer is correct! <br />" + quiz[currentQuestion].explanation;
  } else {
    resultElement.innerHTML = "Incorrect answer. <br />" + quiz[currentQuestion].explanation;
  }
	
  //If this is the last question, make the next question buttons text change to "results
  if(currentQuestion == 9){
	  document.getElementById("nextQuestionButton").innerHTML = "Show results";
  }
  //After answering the question, make the next question button visible again every time
  document.getElementById("nextQuestionButton").style.display = "inline-block";
  //and hide the answer buttons
  document.getElementById("quiz-options").style.display = "none";
	
}

//Function for changing the question
function changeQuestion(){
  currentQuestion++;
	
  const resultElement = document.getElementById("quiz-result");
  resultElement.textContent = "";
	
  const questionElement = document.getElementById("quiz-question");

  if (currentQuestion < quiz.length) {
    displayQuestion();
  } else {
    //Quiz completed
    //congratulatory text, depending on amount of correct answers
    let congratulationText = "";
    if(correctAnswers > 5){
		congratulationText = "You got most of the answers correct, excellent work! It seems that you have a solid grasp on the facts and myths regarding Asperger syndrome. "
	}else{
		congratulationText = "Study the SAFE Asperger syndrome materials carefully to get a better grasp on the facts and myths regarding Asperger syndrome. "
	}
	  
    questionElement.innerHTML = "<br /><br />Quiz completed! Your score was: " + correctAnswers +"/10" + "<br /><br />" + congratulationText;
    document.getElementById("quiz-options").style.display = "none";
	document.getElementById("nextQuestionButton").style.display = "none";
	document.getElementById("quizImage").src = "https://eusafe.fa.uni-lj.si/wp-content/themes/eusafe/src/assets/images/logo.svg";
	  
  }
}

//Scripts in Footer
//TRAVEL GAME STUFF BELOW-----------------------------------------------
//Initialize the game at the start by reverting/resetting/formatting all local variables to default values. this is super important for those who ever want to play the game a second time, and also in general for the chappters inside phases etc.

function startGameInitialize(){
  //initializes players points
  localStorage.playersPoints = 0;
  
  //initializes the players name to default name if they didnt enter any name, but this is untested for now
  if(localStorage.storageTravelgameUsername == null){
    localStorage.storageTravelgameUsername = "SAFE player";
  }
  //initializes players avatar to default avatar if they didn't select any, but this is also untested
  if(localStorage.storageAvatarIcon == null){
    localStorage.storageAvatarIcon = 1;
  }
  
  //initializes the players souvenirs to 0 (not collected)
  //not using these in anything yet, but can be added to results screen maybe. these values do get updated when player clicks on the corresponding souvenir, so the work has been done.
  localStorage.hasSouvenir0BeenCollected = 0;
  localStorage.hasSouvenir1BeenCollected = 0;
  localStorage.hasSouvenir2BeenCollected = 0;
  localStorage.hasSouvenir3BeenCollected = 0;
  localStorage.hasSouvenir4BeenCollected = 0;
  localStorage.hasSouvenir5BeenCollected = 0;
  localStorage.hasSouvenir6BeenCollected = 0;
  localStorage.hasSouvenir7BeenCollected = 0;
  
  //initializes the chapters inside phases so the game knows what has been started
  //for some reason booleans didnt work so 0 == false, 1 == true
  localStorage.storageHasP1C1BeenOpened = 0;
  localStorage.storageHasP1C2BeenOpened = 0;
  localStorage.storageHasP1C3BeenOpened = 0;
  localStorage.storageHasP1C4BeenOpened = 0;
  localStorage.storageHasP1C5BeenOpened = 0;
  
  localStorage.storageHasP2C1BeenOpened = 0;
  localStorage.storageHasP2C2BeenOpened = 0;
  localStorage.storageHasP2C3BeenOpened = 0;
  localStorage.storageHasP2C4BeenOpened = 0;
  localStorage.storageHasP2C5BeenOpened = 0;
  localStorage.storageHasP2C6BeenOpened = 0;
  localStorage.storageHasP2C7BeenOpened = 0;
  
  localStorage.storageHasP3C1BeenOpened = 0;
  localStorage.storageHasP3C2BeenOpened = 0;
  localStorage.storageHasP3C3BeenOpened = 0;
  localStorage.storageHasP3C4BeenOpened = 0;
  localStorage.storageHasP3C5BeenOpened = 0;
  localStorage.storageHasP3C6BeenOpened = 0;
  localStorage.storageHasP3C7BeenOpened = 0;
  localStorage.storageHasP3C8BeenOpened = 0;
  
  //quiz 1 buttons in phase 3
  localStorage.storageHasQ1B1BeenPressed = 0;
  localStorage.storageHasQ1B2BeenPressed = 0;
  localStorage.storageHasQ1B3BeenPressed = 0;
  localStorage.storageHasQ1B4BeenPressed = 0;
  localStorage.storageHasQ1B5BeenPressed = 0;
  //quiz 2 buttons in phase 3
  localStorage.storageHasQ2B1BeenPressed = 0;
  localStorage.storageHasQ2B2BeenPressed = 0;
  localStorage.storageHasQ2B3BeenPressed = 0;
  localStorage.storageHasQ2B4BeenPressed = 0;
  localStorage.storageHasQ2B5BeenPressed = 0;
  //quiz 3 buttons in phase 3
  localStorage.storageHasQ3B1BeenPressed = 0;
  localStorage.storageHasQ3B2BeenPressed = 0;
  localStorage.storageHasQ3B3BeenPressed = 0;
  localStorage.storageHasQ3B4BeenPressed = 0;
  localStorage.storageHasQ3B5BeenPressed = 0;
  
  //images inside the chapters of p1, last thing ever
  //p1c1
  localStorage.HasP1C1img1beenOpened = 0;
  localStorage.HasP1C1img2beenOpened = 0;
  localStorage.HasP1C1img3beenOpened = 0;
  localStorage.HasP1C1img4beenOpened = 0;
  localStorage.HasP1C1img5beenOpened = 0;
  //p1c2
  localStorage.HasP1C2img1beenOpened = 0;
  localStorage.HasP1C2img2beenOpened = 0;
  localStorage.HasP1C2img3beenOpened = 0;
  localStorage.HasP1C2img4beenOpened = 0;
  localStorage.HasP1C2img5beenOpened = 0;
  //p1c3 asd2
  localStorage.HasP1C3img1beenOpened = 0;
  localStorage.HasP1C3img2beenOpened = 0;
  localStorage.HasP1C3img3beenOpened = 0;
  //pc1c4
  localStorage.HasP1C4img1beenOpened = 0;
  localStorage.HasP1C4img2beenOpened = 0;
  localStorage.HasP1C4img3beenOpened = 0;
    //p1c5
  localStorage.HasP1C5img1beenOpened = 0;
  localStorage.HasP1C5img2beenOpened = 0;
  localStorage.HasP1C5img3beenOpened = 0;
  localStorage.HasP1C5img4beenOpened = 0;
  localStorage.HasP1C5img5beenOpened = 0;

  
  localStorage.numberOfCorrectQuizAnswers = 0;
  localStorage.numberOfWrongQuizAnswers = 0;
  console.log("Game initialized");
}
  
//player collects a souvenir by clicking on them, this in an "onClick()" function for images. the number of the souvenir is given as a parameter
function collectSouvenir(numberOfSouvenir){
  if(numberOfSouvenir == 0){
    document.getElementById("souvenir0").style.display = "none";
    //for souvenir 0, also hides intro tutorial text
    document.getElementById("souvenirIntroTextHide").style.display ="none";
    localStorage.hasSouvenir0BeenCollected = 1;
    localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
    document.getElementById("souvenir0InBar").style.display="block";
  }if(numberOfSouvenir == 1){
    document.getElementById("souvenir1").style.display = "none";
    localStorage.hasSouvenir1BeenCollected = 1;
    localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
    document.getElementById("souvenir1InBar").style.display="block";
  }if(numberOfSouvenir == 2){
    document.getElementById("souvenir2").style.display = "none";
    localStorage.hasSouvenir2BeenCollected = 1;
    localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
    document.getElementById("souvenir2InBar").style.display="block";
  }if(numberOfSouvenir == 3){
    document.getElementById("souvenir3").style.display = "none";
    localStorage.hasSouvenir3BeenCollected = 1;
    localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
    document.getElementById("souvenir3InBar").style.display="block";
  }if(numberOfSouvenir == 4){
    document.getElementById("souvenir4").style.display = "none";
    localStorage.hasSouvenir4BeenCollected = 1;
    localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
    document.getElementById("souvenir4InBar").style.display="block";
  }if(numberOfSouvenir == 5){
    document.getElementById("souvenir5").style.display = "none";
    localStorage.hasSouvenir5BeenCollected = 1;
    localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
    document.getElementById("souvenir5InBar").style.display="block";
  }if(numberOfSouvenir == 6){
    document.getElementById("souvenir6").style.display = "none";
    localStorage.hasSouvenir6BeenCollected = 1;
    localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
    document.getElementById("souvenir6InBar").style.display="block";
  }if(numberOfSouvenir == 7){
    document.getElementById("souvenir7").style.display = "none";
    localStorage.hasSouvenir7BeenCollected = 1;
    localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
    document.getElementById("souvenir7InBar").style.display="block";
  }
  
  //updates the points counter
  document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
}
  
//last day, displays correct and incorrect quiz answer amounts
if(document.getElementById("p3-quiz-correct-answers") != null){
  document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
    document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
}
  
//displays souvenirs in game bar if they are collected. and yes this is done both here //and in the onClick function, intentionally. in case users close the game and comes //back or similar cases, and this way it updates in real time also.
if(document.getElementById("souvenir0InBar") != null){
  if(localStorage.hasSouvenir0BeenCollected == 1){
    document.getElementById("souvenir0InBar").style.display="block";
    //hides tutorial text for souvenir 0
    if(document.getElementById("souvenirIntroTextHide") != null){
      document.getElementById("souvenirIntroTextHide").style.display ="none";
    }
  }if(localStorage.hasSouvenir1BeenCollected == 1){
    document.getElementById("souvenir1InBar").style.display="block";
  }if(localStorage.hasSouvenir2BeenCollected == 1){
    document.getElementById("souvenir2InBar").style.display="block";
  }if(localStorage.hasSouvenir3BeenCollected == 1){
    document.getElementById("souvenir3InBar").style.display="block";
  }if(localStorage.hasSouvenir4BeenCollected == 1){
    document.getElementById("souvenir4InBar").style.display="block";
  }if(localStorage.hasSouvenir5BeenCollected == 1){
    document.getElementById("souvenir5InBar").style.display="block";
  }if(localStorage.hasSouvenir6BeenCollected == 1){
    document.getElementById("souvenir6InBar").style.display="block";
  }if(localStorage.hasSouvenir7BeenCollected == 1){
    document.getElementById("souvenir7InBar").style.display="block";
  }
}
  
//hides overworld souvenirs if they have already been collected
if(document.getElementById("souvenir0") != null){
  if(localStorage.hasSouvenir0BeenCollected > 0){
    document.getElementById("souvenir0").style.display="none";
  }
}if(document.getElementById("souvenir1") != null){
  if(localStorage.hasSouvenir1BeenCollected > 0){
    document.getElementById("souvenir1").style.display="none";
  }
}if(document.getElementById("souvenir2") != null){
  if(localStorage.hasSouvenir2BeenCollected > 0){
    document.getElementById("souvenir2").style.display="none";
  }
}if(document.getElementById("souvenir3") != null){
  if(localStorage.hasSouvenir3BeenCollected > 0){
    document.getElementById("souvenir3").style.display="none";
  }
}if(document.getElementById("souvenir4") != null){
  if(localStorage.hasSouvenir4BeenCollected > 0){
    document.getElementById("souvenir4").style.display="none";
  }
}if(document.getElementById("souvenir5") != null){
  if(localStorage.hasSouvenir5BeenCollected > 0){
    document.getElementById("souvenir5").style.display="none";
  }
}if(document.getElementById("souvenir6") != null){
  if(localStorage.hasSouvenir6BeenCollected > 0){
    document.getElementById("souvenir6").style.display="none";
  }
}if(document.getElementById("souvenir7") != null){
  if(localStorage.hasSouvenir7BeenCollected > 0){
    document.getElementById("souvenir7").style.display="none";
  }
}
  
//displays how many chapters have been opened by the player from each chapter, inside the "game start" page
if(document.getElementById("phase1HowManyChaptersOpenedText") != null){
  let sumOfChaptersOpenedInP1 = parseInt(localStorage.storageHasP1C1BeenOpened) + parseInt(localStorage.storageHasP1C2BeenOpened) + parseInt(localStorage.storageHasP1C3BeenOpened) + parseInt(localStorage.storageHasP1C4BeenOpened) + parseInt(localStorage.storageHasP1C5BeenOpened);
  document.getElementById("phase1HowManyChaptersOpenedText").textContent = 
  sumOfChaptersOpenedInP1 +" / 5 Completed";
  //if all are completed, opens phase2 for player
  if(sumOfChaptersOpenedInP1 > 4){
    document.getElementById("startP2Button").style.display = "block";
  }
  
  let sumOfChaptersOpenedInP2 = parseInt(localStorage.storageHasP2C1BeenOpened) + parseInt(localStorage.storageHasP2C2BeenOpened) + parseInt(localStorage.storageHasP2C3BeenOpened) + parseInt(localStorage.storageHasP2C4BeenOpened) + parseInt(localStorage.storageHasP2C5BeenOpened) + parseInt(localStorage.storageHasP2C6BeenOpened) + parseInt(localStorage.storageHasP2C7BeenOpened);
  document.getElementById("phase2HowManyChaptersOpenedText").textContent = 
  sumOfChaptersOpenedInP2 +" / 7 Completed";
  //if all are opened, opens phase 3 for player
  if(sumOfChaptersOpenedInP2 > 6){
    document.getElementById("startP3Button").style.display = "block";
  }
  
  let sumOfChaptersOpenedInP3 = parseInt(localStorage.storageHasP3C1BeenOpened) + parseInt(localStorage.storageHasP3C2BeenOpened) + parseInt(localStorage.storageHasP3C3BeenOpened) + parseInt(localStorage.storageHasP3C4BeenOpened) + parseInt(localStorage.storageHasP3C5BeenOpened) + parseInt(localStorage.storageHasP3C6BeenOpened) + parseInt(localStorage.storageHasP3C7BeenOpened) + parseInt(localStorage.storageHasP3C8BeenOpened);
  document.getElementById("phase3HowManyChaptersOpenedText").textContent = 
  sumOfChaptersOpenedInP3 +" / 8 Completed";
}
  
//display players points in the bottom bar
if(document.getElementById("pointsDisplayedInBottomBar") != null){
  document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
}
  
//Travel game selecting avatar
let avatarIconNumber = 1;
  
//phase1 chapter variables
//I don't remember anymore what these are used for? The game mostly keeps track of which chapters has been opened with the localstorage variables, so not sure what I was doing with these
let hasPlayerOpenedPhase1Chapter1 = false;
let hasPlayerOpenedPhase1Chapter2 = false;
let hasPlayerOpenedPhase1Chapter3 = false;
let hasPlayerOpenedPhase1Chapter4 = false;
let hasPlayerOpenedPhase1Chapter5 = false;
  
//fills html elements inside the game with the text
//first checks if we are on the correct page by checking if an element with that id
//exists
if(document.getElementById("playerNameInBar") != null){
  document.getElementById("playerNameInBar").textContent = localStorage.storageTravelgameUsername;
}
if(document.getElementById("usernameInsideText") != null){
  document.getElementById("usernameInsideText").textContent = localStorage.storageTravelgameUsername;
}
//shows avatar in bar inside the game
if(document.getElementById("avatarInBar") != null){
  document.getElementById("avatarInBar").src = "https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/06/avatar" + localStorage.storageAvatarIcon + ".png";
}
//sets username to localStorage.storageTravelgameUsername when user types in username input
if(document.getElementById("passport-name") != null){
  const inputField = document.getElementById('passport-name');
    inputField.addEventListener('input', function(event) {
    localStorage.storageTravelgameUsername = event.target.value;
    });
}
  

  

  
function changeAvatarIcon(plusOrMinus){
  //this function takes either "+" or "-" as a String and increases avatarIconNumber
  //if it's a "+" and decreases if it's a "-"
  
  //there are 15 total avatar icons to choose from, so 1-15 (no 0). 
  //increase number if it's lower than 14.
  if(plusOrMinus == "+"){
    if(avatarIconNumber <15){
      avatarIconNumber++;
    }else{
      //rolls over
      avatarIconNumber = 1;
    }
  }
  
  //decrease number if it's more than 1
  if(plusOrMinus == "-"){
    if(avatarIconNumber > 1){
      avatarIconNumber--;
    }else{
      avatarIconNumber = 15;
    }
  }
  localStorage.storageAvatarIcon = avatarIconNumber;
  document.getElementById("travelgameAvatarIcon").src = "https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/06/avatar" + avatarIconNumber + ".png";
}
  
//------------------------------------------------------------
//TRAVEL GAME PHASE 1-----------------------------------------
//------------------------------------------------------------
//PHASE1 Preparing for save travel - destination knowledge texts
/*const phase1DestinationKnowledgeTexts = [
  {text: "<h5>Safety situation</h5> <p>Text here about safety situation in destination country. Text here about safety situation. Text here about safety situation. </p> <h5>Another title</h5> <p>Some other stuff here...... Some other stuff here.......</p> "},
  {text: "<h5>Traffic</h5> <p>Traffic stuff about destination country. Traffic stuff about destination country... </p> <h5>Another traffic title</h5> <p>Some other stuff here...... Traffic... Some other stuff here.</p> "},
  {text: "<h5>Laws and Regulations</h5> <p>Laws and regulations related stuff here... Laws and regulations related stuff here... Laws and regulations related stuff here... </p> <p>More law & regulation stuff... More law & regulation stuff......................</p> "},
  {text: "<h5>Nature and animals</h5> <p>Nature stuff, animal stuff. Nature stuff, animal stuff. Nature stuff, animal stuff. Nature stuff, animal stuff. Nature stuff, animal stuff. Nature stuff, animal stuff. Nature stuff, animal stuff. Nature stuff, animal stuff. Nature stuff, animal stuff. Nature stuff, animal stuff.  </p> <h5>Animals</h5> <p>Some other stuff here... Animals... Some other stuff here.</p> "},
  {text: "<h5>Culture and religion</h5> <p>Culture and religion stuff... Culture and religion stuff..Culture......</p> <h5>Religion</h5> <p>Religion stuff.... Culture stuff.....</p> "}
];*/
  
  
//by default it displays the first text
let phase1ContentToDisplay = 1;
//takes the number of a text to display based on what image was clicked in
//phase 1 by the user



function changePhase1ContentText(numberOfTextToDisplay, chapterNumber){
  
  //first we mark these as opened for the small text in phase 1 menu
  //first chapter in p1
  if(chapterNumber == 1){
    if(numberOfTextToDisplay == 0){
      localStorage.HasP1C1img1beenOpened = 1;
    }if(numberOfTextToDisplay == 1){
      localStorage.HasP1C1img2beenOpened = 1;
    }if(numberOfTextToDisplay == 2){
      localStorage.HasP1C1img3beenOpened = 1;
    }if(numberOfTextToDisplay == 3){
      localStorage.HasP1C1img4beenOpened = 1;
    }if(numberOfTextToDisplay == 4){
      localStorage.HasP1C1img5beenOpened = 1;
    }
  }if(chapterNumber == 2){
    if(numberOfTextToDisplay == 0){
      localStorage.HasP1C2img1beenOpened = 1;
    }if(numberOfTextToDisplay == 1){
      localStorage.HasP1C2img2beenOpened = 1;
    }if(numberOfTextToDisplay == 2){
      localStorage.HasP1C2img3beenOpened = 1;
    }if(numberOfTextToDisplay == 3){
      localStorage.HasP1C2img4beenOpened = 1;
    }if(numberOfTextToDisplay == 4){
      localStorage.HasP1C2img5beenOpened = 1;
    }
  }if(chapterNumber == 3){
    if(numberOfTextToDisplay == 0){
      localStorage.HasP1C3img1beenOpened = 1;
    }if(numberOfTextToDisplay == 1){
      localStorage.HasP1C3img2beenOpened = 1;
    }if(numberOfTextToDisplay == 2){
      localStorage.HasP1C3img3beenOpened = 1;
    }
  }if(chapterNumber == 4){
    if(numberOfTextToDisplay == 0){
      localStorage.HasP1C4img1beenOpened = 1;
    }if(numberOfTextToDisplay == 1){
      localStorage.HasP1C4img2beenOpened = 1;
    }if(numberOfTextToDisplay == 2){
      localStorage.HasP1C4img3beenOpened = 1;
    }
  }if(chapterNumber == 5){
    if(numberOfTextToDisplay == 0){
      localStorage.HasP1C5img1beenOpened = 1;
    }if(numberOfTextToDisplay == 1){
      localStorage.HasP1C5img2beenOpened = 1;
    }if(numberOfTextToDisplay == 2){
      localStorage.HasP1C5img3beenOpened = 1;
    }if(numberOfTextToDisplay == 3){
      localStorage.HasP1C5img4beenOpened = 1;
    }if(numberOfTextToDisplay == 4){
      localStorage.HasP1C5img5beenOpened = 1;
    }
  }
  
  
  
  
  
  //this below is copied to all chapters of p1
      //Function to fetch the text file content
        function fetchTextContent(urls, container) {
          //Helper function to recursively check URLs
          function checkURL(index) {
            if (index >= urls.length) {
              //Display an error message if all URLs fail
              container.innerHTML = 'Text file not found.';
              return;
            }
          
            var url = urls[index];
            
            fetch(url)
              .then(response => {
                if (response.ok) {
                  return response.text();
                } else {
                  throw new Error('File not found');
                }
              })
              .then(content => {
                //Set the fetched content as the inner HTML of the container
                container.innerHTML = content;
              })
              .catch(error => {
                //If an error occurs, fallback to the next URL
                checkURL(index + 1);
              });
          }
          //Start checking URLs from the beginning
          checkURL(0);
        }

  
  
  
  //text from txt files, P1 C1
  if(numberOfTextToDisplay === 0 && chapterNumber === 1){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-safety-situation.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-safety-situation.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-safety-situation.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-safety-situation.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-safety-situation.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-safety-situation.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
    
  }else if(numberOfTextToDisplay === 1 && chapterNumber === 1){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-traffic.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-traffic.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-traffic.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-traffic.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-traffic.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-traffic.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }else if(numberOfTextToDisplay === 2 && chapterNumber === 1){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-laws.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-laws.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-laws.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-laws.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-laws.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-laws.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }else if(numberOfTextToDisplay === 3 && chapterNumber === 1){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-nature.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-nature.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-nature.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-nature.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-nature.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-nature.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }else if(numberOfTextToDisplay === 4 && chapterNumber === 1){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-culture.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-culture.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-culture.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-culture.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-culture.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-culture.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }
  
  
  
  //text from txt files, P1 C2
  if(numberOfTextToDisplay === 0 && chapterNumber === 2){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-documents.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-documents.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-documents.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-documents.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-documents.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-documents.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
    
  }else if(numberOfTextToDisplay === 1 && chapterNumber === 2){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-medicine.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-medicine.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-medicine.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-medicine.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-medicine.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-medicine.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }else if(numberOfTextToDisplay === 2 && chapterNumber === 2){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-vaccination.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-vaccination.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-vaccination.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-vaccination.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-vaccination.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-vaccination.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }else if(numberOfTextToDisplay === 3 && chapterNumber === 2){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-insurance.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-insurance.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-insurance.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-insurance.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-insurance.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-insurance.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }else if(numberOfTextToDisplay === 4 && chapterNumber === 2){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-customsregulations.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-customsregulations.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-customsregulations.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-customsregulations.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-customsregulations.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-customsregulations.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }
  
  
  //text from txt files, P1 C3
  if(numberOfTextToDisplay === 0 && chapterNumber === 3){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-baggage.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-baggage.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-baggage.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-baggage.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-baggage.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-baggage.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
    
  }else if(numberOfTextToDisplay === 1 && chapterNumber === 3){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-accommodation.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-accommodation.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-accommodation.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-accommodation.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-accommodation.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-accommodation.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }else if(numberOfTextToDisplay === 2 && chapterNumber === 3){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-paymentmethods.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-paymentmethods.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-paymentmethods.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-paymentmethods.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-paymentmethods.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-paymentmethods.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }
  
  
  
  
  //text from txt files, P1 C4
  if(numberOfTextToDisplay === 0 && chapterNumber === 4){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-documentcopies.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-documentcopies.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-documentcopies.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-documentcopies.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-documentcopies.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-documentcopies.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
    
  }else if(numberOfTextToDisplay === 1 && chapterNumber === 4){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-travelnotifications.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-travelnotifications.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-travelnotifications.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-travelnotifications.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-travelnotifications.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-travelnotifications.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }else if(numberOfTextToDisplay === 2 && chapterNumber === 4){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-contactinformation.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-contactinformation.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-contactinformation.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-contactinformation.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-contactinformation.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-contactinformation.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }

  
  
  //text from txt files, P1 C5
  if(numberOfTextToDisplay === 0 && chapterNumber === 5){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-travelwithkids.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-travelwithkids.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-travelwithkids.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-travelwithkids.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-travelwithkids.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-travelwithkids.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
    
  }else if(numberOfTextToDisplay === 1 && chapterNumber === 5){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-disabled.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-disabled.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-disabled.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-disabled.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-disabled.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-disabled.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }else if(numberOfTextToDisplay === 2 && chapterNumber === 5){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-womentravel.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-womentravel.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-womentravel.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-womentravel.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-womentravel.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-womentravel.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }else if(numberOfTextToDisplay === 3 && chapterNumber === 5){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-autism.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-autism.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-autism.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-autism.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-autism.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-autism.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }else if(numberOfTextToDisplay === 4 && chapterNumber === 5){
    var urls = [
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/07/phase1-seniors.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/08/phase1-seniors.txt',
        'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/09/phase1-seniors.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/10/phase1-seniors.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/11/phase1-seniors.txt',
      'https://eusafe.fa.uni-lj.si/wp-content/uploads/2023/12/phase1-seniors.txt'
    ];
    fetchTextContent(urls, document.getElementById("phase1-content-box"));
  }
  
  
  

  
  //old
    //document.getElementById("phase1-content-box").innerHTML = phase1DestinationKnowledgeTexts[numberOfTextToDisplay].text;
}


//PHASE1 chapter2 - Important documentations and other precautions
const phase1Chapter2texts = [
  {text: "<h5>Documents</h5> <p>Documents text.......</p> "},
  {text: "<h5>Medicines</h5> <p>Medicines text text text text text.... text etcetc etc etc etc</p> "},
  {text: "<h5>Vaccination</h5> <p>Vaccination text etc etc etc etc etc etc etc etc etc etc</p> "},
  {text: "<h5>Insurance</h5> <p>Insurance stuff.</p> "},
  {text: "<h5>Customs regulations</h5> <p>Customs regulations text etcetc etc etc etc</p> "}
];
//by default it displays the first text. this variable has already been defined in p1c1
phase1ContentToDisplay = 1;
//takes the number of a text to display based on what image was clicked in
//phase 1 by the user
function changePhase1Chapter2ContentText(numberOfTextToDisplay){
  //old
    /*document.getElementById("phase1chapter2-content-box").innerHTML = phase1Chapter2texts[numberOfTextToDisplay].text;*/
}
  
  
  
  
  
  
//phase 1 and maybe other phase windows, where the chapter is chosen for that phase
//first checking if we are in the p1 chapters screen by checking for p1c1

if(document.getElementById("p1c1button") != null){
  //displays how many p1c1 images have been opened in each p1 chapter
  document.getElementById("howManyp1c1Completed").innerHTML = parseInt(localStorage.HasP1C1img1beenOpened) + parseInt(localStorage.HasP1C1img2beenOpened) + parseInt(localStorage.HasP1C1img3beenOpened) + parseInt(localStorage.HasP1C1img4beenOpened) + parseInt(localStorage.HasP1C1img5beenOpened); 
  
  //same for p1c2
  document.getElementById("howManyp1c2Completed").innerHTML = parseInt(localStorage.HasP1C2img1beenOpened) + parseInt(localStorage.HasP1C2img2beenOpened) + parseInt(localStorage.HasP1C2img3beenOpened) + parseInt(localStorage.HasP1C2img4beenOpened) + parseInt(localStorage.HasP1C2img5beenOpened); 
  
  //p1c3
  document.getElementById("howManyp1c3Completed").innerHTML = parseInt(localStorage.HasP1C3img1beenOpened) + parseInt(localStorage.HasP1C3img2beenOpened) + parseInt(localStorage.HasP1C3img3beenOpened); 
  
  //p1c4
  document.getElementById("howManyp1c4Completed").innerHTML = parseInt(localStorage.HasP1C4img1beenOpened) + parseInt(localStorage.HasP1C4img2beenOpened) + parseInt(localStorage.HasP1C4img3beenOpened); 
  
  //p1c5
  document.getElementById("howManyp1c5Completed").innerHTML = parseInt(localStorage.HasP1C5img1beenOpened) + parseInt(localStorage.HasP1C5img2beenOpened) + parseInt(localStorage.HasP1C5img3beenOpened); //asd
  
  //0 == false, 1 == true
  if(localStorage.storageHasP1C1BeenOpened == 0){
    document.getElementById("phase1-chapter1-arrow").style.visibility = "visible";
  }if(localStorage.storageHasP1C2BeenOpened == 0){
    document.getElementById("p1c2button").style.visibility = "hidden";
    
  }if(localStorage.storageHasP1C3BeenOpened == 0){
    document.getElementById("p1c3button").style.visibility = "hidden";
    
  }if(localStorage.storageHasP1C4BeenOpened == 0){
    document.getElementById("p1c4button").style.visibility = "hidden";
    
  }if(localStorage.storageHasP1C5BeenOpened == 0){
    document.getElementById("p1c5button").style.visibility = "hidden";
    
  }
  //if they have been opened, changes the next one open
  if(localStorage.storageHasP1C1BeenOpened == 1){
    document.getElementById("p1c2button").style.visibility = "visible";
    document.getElementById("phase1-chapter2-arrow").style.visibility = "visible";
  }if(localStorage.storageHasP1C2BeenOpened == 1){
    document.getElementById("p1c3button").style.visibility = "visible";
    document.getElementById("phase1-chapter3-arrow").style.visibility = "visible";
  }if(localStorage.storageHasP1C3BeenOpened == 1){
    document.getElementById("p1c4button").style.visibility = "visible";
    document.getElementById("phase1-chapter4-arrow").style.visibility = "visible";
  }if(localStorage.storageHasP1C4BeenOpened == 1){
    document.getElementById("p1c5button").style.visibility = "visible";
    document.getElementById("phase1-chapter5-arrow").style.visibility = "visible";
  }
  
  //hides arrows from the previous ones at the end
  if(localStorage.storageHasP1C1BeenOpened == 1){
    document.getElementById("phase1-chapter1-arrow").style.visibility = "hidden";
  }if(localStorage.storageHasP1C2BeenOpened == 1){
    document.getElementById("phase1-chapter2-arrow").style.visibility = "hidden";
  }if(localStorage.storageHasP1C3BeenOpened == 1){
    document.getElementById("phase1-chapter3-arrow").style.visibility = "hidden";
  }if(localStorage.storageHasP1C4BeenOpened == 1){
    document.getElementById("phase1-chapter4-arrow").style.visibility = "hidden";
  }if(localStorage.storageHasP1C5BeenOpened == 1){
    document.getElementById("phase1-chapter5-arrow").style.visibility = "hidden";
  }
}
  
//when chapter1 on phase1 gets opened. add points to these later
function p1c1OnClick(){
  //checking if it was the first time
  if(localStorage.storageHasP1C1BeenOpened == 0){
    localStorage.storageHasP1C1BeenOpened = 1;
    //gives points for opening this the first time
    localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
    
  }//do nothing if it wasn't the first time, mby less points for this in the future
}
function p1c2OnClick(){
  //checking if it was the first time
  if(localStorage.storageHasP1C2BeenOpened == 0){
    localStorage.storageHasP1C2BeenOpened = 1;
    //gives points for opening this the first time
    localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
  }//do nothing if it wasn't the first time, mby less points for this in the future
}
function p1c3OnClick(){
  //checking if it was the first time
  if(localStorage.storageHasP1C3BeenOpened == 0){
    localStorage.storageHasP1C3BeenOpened = 1;
    //gives points for opening this the first time
    localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
  }//do nothing if it wasn't the first time, mby less points for this in the future
}
function p1c4OnClick(){
  //checking if it was the first time
  if(localStorage.storageHasP1C4BeenOpened == 0){
    localStorage.storageHasP1C4BeenOpened = 1;
    //gives points for opening this the first time
    localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
  }//do nothing if it wasn't the first time, mby less points for this in the future
}
function p1c5OnClick(){
  //checking if it was the first time
  if(localStorage.storageHasP1C5BeenOpened == 0){
    localStorage.storageHasP1C5BeenOpened = 1;
    //gives points for opening this the first time
    localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
  }//do nothing if it wasn't the first time, mby less points for this in the future
}
  
  
  
  
  
//-------------------------------------------------------
//pop-up window for phase 2 of travel game
//-------------------------------------------------------
 //first checks if the page contains popup stuff, if not, do none of this
 if(document.getElementById("phases-popup-container") != null){
  
  const popupContainer = document.getElementById('phases-popup-container');
  const popupText = document.getElementById('phases-popup-text');
  const tgpopupTextTitle = document.getElementById('phases-popup-title');
  const popupContent = document.getElementById('phases-popup-content');
  const closeButton = document.getElementById('phases-popup-close-button');
  const images = document.querySelectorAll('.phase2-image-grid img');
   
  //content that is displayed for each image goes here
  const imageTexts = [
    "<p>At the airport, it is crucial to be aware of your surroundings and practice vigilant observation. Pay close attention to the things happening around you and stay alert. Knowing where to go and when is equally important. Familiarize yourself with the routes and destinations, ensuring you have the necessary information to navigate safely and efficiently.</p> <p>If you're traveling with a group, always be aware of the whereabouts of your companions at the airport. Keep track of each other and establish a reliable means of communication to ensure everyone stays together. By staying connected, you can enhance safety and address any unforeseen circumstances promptly.</p> <p>Additionally, be attentive to any suspicious behavior you may encounter at the airport. If you notice something out of the ordinary or potentially threatening, do not hesitate to report it to the appropriate authorities or the staff responsible for your safety. By being proactive and taking action when necessary, you contribute to a safer environment for yourself and others.</p>",
    "<p>To ensure a smooth departure, it is crucial to be punctual. Arrive at the airport well in advance, allowing ample time for check-in and security procedures. Take care to organize and carry all necessary travel documents, such as passports or identification, tickets, and boarding passes. Pay attention to instructions during the security screening process, ensuring that you follow the guidelines and place all required items on the conveyor belt. Be diligent and double-check that you haven't left anything behind before proceeding to your departure gate. By being proactive and prepared, you can start your journey on the right foot.</p> <p>Upon landing, it is essential to be thorough when retrieving your belongings and documentation. Take a moment to verify that you have all your personal items and travel documents before disembarking from the aircraft. Once you enter the arrivals area, keep an eye out for the baggage claim area. Collect your luggage from the designated carousel and carefully inspect its condition to ensure there are no damages or signs of tampering. By being attentive to detail and taking these necessary steps, you can ensure a hassle-free arrival and maintain the security of your belongings throughout your journey.</p>",
    "<h5>Safety Precautions</h5> <p>Before takeoff, familiarize yourself with the evacuation instructions provided by the airline. Take a moment to locate the nearest emergency exits and mentally note their positions. It is crucial to consider how you would react in the event of an evacuation or if oxygen masks are deployed. Stay calm and follow the instructions provided by the flight attendants. Remember to secure your own oxygen mask before assisting others. Always fasten your seatbelt when you are in your designated seat, as turbulence can occur unexpectedly. By adhering to these safety measures, you can help ensure your well-being during the flight.</p> <h5>In-Flight Safety</h5> <p>Throughout the flight, it is important to remain vigilant about your safety. Listen attentively to the announcements made by the cabin crew and follow any instructions or guidelines provided. If turbulence is encountered, keep your seatbelt securely fastened at all times. In case of an emergency landing, follow the evacuation procedures and exit the aircraft in an orderly manner. Prioritize your safety and cooperate with the crew and fellow passengers. By being prepared and mindful during the flight, you can contribute to a safer and more comfortable travel experience for everyone on board.</p>",
  "<h5>Taxis</h5> <p>When using taxis, it is crucial to prioritize your safety and ensure a reliable service. Make sure to only use official, licensed taxis. Before entering the vehicle, verify that the taxi has a functioning meter. Alternatively, agree on the fare and payment method in advance to avoid any misunderstandings. Always request a receipt after the journey for future reference. Additionally, it is a good practice to take a photo or write down the taxi's number for identification purposes. By following these precautions, you can have a secure and accountable taxi experience.</p> <h5>Public Transportation</h5> <p>When utilizing public transportation, it is advisable to plan ahead to ensure a smooth journey. Familiarize yourself with the route and stops beforehand. If you are unsure about any aspects of the public transportation system, don't hesitate to seek assistance from the station personnel or staff. If possible, download a route map application to your mobile device in advance, as it can be a helpful tool for navigating the network. By being proactive and prepared, you can optimize your experience while using public transportation and reach your destination efficiently.</p>",
  "<h5>Securing Your Belongings</h5> <p>Throughout your journey, it is essential to take proper care of your luggage and documents. Remain vigilant and be cautious of potential thieves or pickpockets. Keep a close eye on your belongings at all times, especially in crowded areas or public transportation hubs. It is crucial to avoid leaving your personal items unattended, as unattended bags may be treated as suspicious and handled by the authorities. To prevent any mishaps, double-check that you have all your belongings with you before disembarking from airplanes or other means of transportation. By being attentive and proactive, you can protect your belongings from loss or theft.</p> <h5>Retrieving Luggage</h5> <p>When collecting your luggage, exercise caution to ensure you pick up the correct bag from the baggage carousel. Take a moment to verify the luggage tag or any distinguishing features before claiming your belongings. It is crucial not to take someone else's bag by mistake. Additionally, be mindful of the condition of your luggage upon retrieval. Inspect your bag for any signs of damage and report any concerns to the appropriate personnel, such as airline staff or the baggage claim office. By paying attention to these details, you can ensure the safe handling of your luggage and maintain the security of your belongings throughout your journey.</p>",
  "<p>It is important to exercise caution and moderation when consuming alcohol during your journey. Becoming intoxicated can make you more susceptible to encountering difficulties or risky situations. It is crucial to note that if you are excessively intoxicated, you may be denied boarding on your flight. Furthermore, the effects of alcohol tend to be felt more strongly in the pressurized cabin of an airplane.</p> <p>Causing disruptions or disturbances while under the influence of alcohol during a flight can have serious consequences. It may result in an unscheduled landing and your removal from the aircraft. In such cases, you could face criminal charges and potential compensation claims from the airline. It is important to remember that you are accountable for your actions, and any disruptive behavior due to intoxication can lead to severe legal and financial repercussions.</p> <p>To ensure a safe and pleasant journey for yourself and your fellow passengers, it is advisable to drink alcohol responsibly and in moderation, if at all. Stay aware of your alcohol consumption and its effects, taking into account the unique environment of air travel. By exercising self-control and being responsible, you can help maintain a peaceful and secure atmosphere during your travel experience.</p>",
  "<p>When traveling, it is essential to remember to pack your necessary medications and prescriptions in your carry-on luggage. It is crucial to have them easily accessible during your journey. Keep in mind that the interaction between medications and alcohol can be more potent during a flight. Therefore, it is advisable to be cautious when combining the two.</p><p>If you require medical assistance during your flight, the cabin crew may be able to provide certain common medications if needed. They are trained to assist in such situations. Additionally, most airports have pharmacies where you can purchase over-the-counter medications or seek professional advice if necessary.</p><p>To ensure your well-being during your trip, it is important to plan ahead and pack your medications properly. Be aware of potential interactions and follow any instructions provided by your healthcare provider. By taking these precautions and being prepared, you can help ensure a safe and comfortable travel experience.</p>"
    
  ];
   
   //title for every popup text
  const imageTextTitles = [
    "1: At the airport",
    "2: Departures and arrivals",
    "3: Airplane",
  "4: Ground transportation",
  "5: Safe handling of luggage & documents",
  "6: Alcohol",
  "7: Medicines"
  ];
   
   

  // Function to open the pop-up window
  function openPopup(event) {
    const imageIndex = Array.from(images).indexOf(event.target);
    const imageText = imageTexts[imageIndex];
  const tgpopupImageTextTitle = imageTextTitles[imageIndex];
    popupText.innerHTML = imageText;
    
  tgpopupTextTitle.textContent = imageTextTitles[imageIndex]
    
    popupContainer.style.display = 'block';
  //gives points for the first time each chapter opens, based on imageIndex
  //the index starts from 0, but variable names start from 1 lol
  switch(imageIndex) {
      case 0:
      if(localStorage.storageHasP2C1BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP2C1BeenOpened = 1;
        break;
      case 1:
        if(localStorage.storageHasP2C2BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP2C2BeenOpened = 1;
        break;
    case 2:
        if(localStorage.storageHasP2C3BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP2C3BeenOpened = 1;
        break;
    case 3:
        if(localStorage.storageHasP2C4BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP2C4BeenOpened = 1;
        break;
    case 4:
        if(localStorage.storageHasP2C5BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP2C5BeenOpened = 1;
        break;
    case 5:
        if(localStorage.storageHasP2C6BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP2C6BeenOpened = 1;
        break;
    case 6:
        if(localStorage.storageHasP2C7BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP2C7BeenOpened = 1;
        break;
      default:
      //never supposed to end up here
      console.log("error code: 511");
        break;
    }
    
    //updates the points counter
    document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
    
  }

  // Function to close the pop-up window
  function closePopup() {
    popupContainer.style.display = 'none';
  }

  // Attach event listeners to the images and the close button
  images.forEach(image => {
    image.addEventListener('click', openPopup);
  });

  closeButton.addEventListener('click', closePopup);

 }
  
  
//-------------------------------------------------------
//pop-up window for phase 3 of travel game, copy of phase 2 mostly with some shared functionality
//-------------------------------------------------------
 //first checks if the page contains popup stuff, if not, do none of this
 if(document.getElementById("phase3-popup-container") != null){
  
  const popupContainerP3 = document.getElementById('phase3-popup-container');
  const popupTextP3 = document.getElementById('phase3-popup-text');
  const popupTitleP3 = document.getElementById("phase3-popup-title");
  const popupContentP3 = document.getElementById('phase3-popup-content');
  const closeButtonP3 = document.getElementById('phase3-popup-close-button');
  //intentionally phase2-image-grid... shared between both
  const imagesP3 = document.querySelectorAll('.phase2-image-grid img');
   
   //vika pv
   let whichP3ChapterIsOpen;
   
   
  //content that is displayed for each image goes here
  const imageTextsP3 = [
    "<p>When it comes to food and beverages during your travel, it is important to be mindful of hygiene practices in your destination country. Take the time to familiarize yourself with the general hygiene standards to ensure safe consumption. If necessary, avoid poorly cooked or undercooked foods, as well as dishes that contain mayonnaise, which can be a breeding ground for bacteria.</p><p>Inquire at your hotel about the safety of tap water for drinking purposes. If tap water is not safe to drink, it is advisable to refrain from using ice cubes as well. In high-risk countries, it may be necessary to brush your teeth with bottled water to avoid any potential health risks. Practicing good oral hygiene is important even while traveling.</p><p>While indulging in local cuisine and cultural experiences is part of the journey, it is essential to exercise moderation when consuming alcohol. Excessive alcohol consumption can impair judgment, affect your well-being, and compromise your safety. It is important to drink responsibly and be aware of your limits.</p><p>By being mindful of these guidelines and practicing caution, you can enjoy a safe and pleasant dining experience during your travels.</p>",
    "<p>When selecting your accommodation, it is crucial to prioritize safety and security measures. Pay attention to the safety arrangements provided by your chosen place of stay. Familiarize yourself with the location of emergency exits and evacuation routes. Take the time to review the floor plan provided in your room, which can serve as a helpful reference in case of an emergency.</p><p>To ensure the security of your valuables, test the functionality of the safe or locker in your room and utilize it as needed. Safely store your important documents, such as passports and travel documents, as well as any valuable belongings you may have.</p><p>By being proactive and observant of these safety precautions, you can enhance your overall security and peace of mind during your stay. Prioritize accommodation options that prioritize guest safety and take the necessary steps to familiarize yourself with the emergency procedures and facilities available to you.</p>",
    "<p>When traveling to new destinations, it is crucial to prioritize your safety by staying informed about the security of the areas you plan to visit. Utilize various resources such as online platforms like Google, TripAdvisor, and social media to gather information and insights from other travelers. Reading reviews can provide valuable perspectives on the safety aspects of different locations.</p> <p>Additionally, make a habit of checking official travel notifications or advisories provided by reputable sources. Government websites or embassies often provide valuable information regarding safety concerns or any potential risks associated with specific regions or countries.</p> <p>To minimize the risk of theft or loss, it is advisable to carry only the necessary amount of money with you. Consider using a card connected to an account with limited funds, allowing you to control your spending and mitigate potential financial risks.</p> <p>In terms of personal belongings, it is best to avoid wearing expensive jewelry, watches, or other accessories that may attract unwanted attention. Keeping a low profile in terms of personal valuables can help minimize the risk of being a target for theft or robbery.</p> <p>By staying informed, exercising caution, and being mindful of your personal belongings, you can contribute to a safer travel experience and better enjoy your time exploring new places.</p>",
  "<p>When heading to the beach, prioritize safety by choosing beaches with lifeguards on duty. Understand the differences between public and private beaches and adhere to their rules and regulations. Keep a close eye on your belongings while enjoying the beach to prevent theft or loss. By following these precautions, you can have a safe and enjoyable time by the water.</p>",
  "<p>Check reviews about your planned activities or ask advice from the hotel before you visit them. Pay attention to safety procedures, general cleanliness and maintenance level. If you have any doubts, ask before trying any potentially risky activities.</p>",
  "<p>Avoid illegal taxes. Use only taxes with a meter or an option for a prepaid trip. Be extra cautious with airport taxes.</p> <p>Check from tourist info or online how local public transportation works, including payment, routes, timings and areas to avoid.</p> <p> Uber, Bolt and other taxi apps can be a good option as driven identity and the agreed price will be documented.</p>",
  "<p>Keep in mind the reliability of local authorities, including police. This may vary between countries. Especially in poorer countries police or other authorities might even request bribes or protection money</p> <p>In some countries, it is best to avoid using expensive jewelries or other obviously luxurious or expensive items. Contact your embassy or another EU embassy if you face any issues with local authorities</p>",
    "<p>Now you have learned how multiple different factors can affect your safety when you are travelling. But even all this information doesn't mean that you shouldn't travel or be able to relax and have fun when travelling!</p> <p> However, it's always good to plan ahead what to do and how you are planning on doing it during your travels. Small precautionary actions can make a huge difference in your personal safety.</p>"
  ];
   
  //titles for each image goes here
  const imageTitlesP3 = [
    "1: Food & beverages",
    "2: Safe accommodation",
    "3: Safety of the visited areas",
  "4: Safety at the beaches",
  "5: Safety of the services & activities",
  "6: Local transportation & traffic culture",
  "7: Reliability of authorities & corruption",
  "8: Ready to travel!"
  ];
   
  const p3c2quizButtonTexts = [
    "Check where the emergency exits are located",
    "Check if there are any safety equipment such as fire extinguishers available",
    "You can always use the elevator if you have to get out fast",
  "Cleaners and other hotel staff are always 100% reliable",
  "Keep your passport, money and other valuables in the safety deposit box"
  ];
  const p3c4quizButtonTexts = [
    "Availability of lifeguard",
    "Free towels",
    "Appropiate warning flags",
  "Comfy sunlounger",
  "Dangerous animals"
  ];
  const p3c5quizButtonTexts = [
    "Cheap tickets",
    "Clear safety instructions",
    "Professional & helpful staff",
  "Well maintained property or equipment",
  "Overcrowded activity site"
  ];
   
  //quiz/task titles for phase 3,note that most of them are intentionally empty cause
  //there is no quizzes or tasks for  them
  const quizTitlesP3 = [
    "-",
    "Task: What measures do you take to ensure your safety at the accommodation? <p>Select the correct options: </p>",
    "-",
  "Task: Which of the following can affect your safety on the beach? <p>Select the correct options: </p>",
  "Task: Which of the following can improve the safety of a holiday activity or a service?  <p>Select the correct options: </p>",
  "-",
  "-",
  "Congratulations! You have learned how to become a certified SAFE traveller. Press the button below to check your final score & report."
  ];
   
  //last day function for quiz answers/points
  function answerQuiz(numberOfButton){
    if (whichP3ChapterIsOpen === 1){
      //correct answer
      if(numberOfButton === 1){
        localStorage.storageHasQ1B1BeenPressed = 1;
        document.getElementById('p3-quiz-button1').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
        localStorage.numberOfCorrectQuizAnswers = Number(localStorage.numberOfCorrectQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }else if(numberOfButton === 2){
        localStorage.storageHasQ1B2BeenPressed = 1;
        document.getElementById('p3-quiz-button2').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
        localStorage.numberOfCorrectQuizAnswers = Number(localStorage.numberOfCorrectQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }else if(numberOfButton === 3){
        localStorage.storageHasQ1B3BeenPressed = 1;
        document.getElementById('p3-quiz-button3').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) - 100;
        localStorage.numberOfWrongQuizAnswers = Number(localStorage.numberOfWrongQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }else if(numberOfButton === 4){
        localStorage.storageHasQ1B4BeenPressed = 1;
        document.getElementById('p3-quiz-button4').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) - 100;
        localStorage.numberOfWrongQuizAnswers = Number(localStorage.numberOfWrongQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }else if(numberOfButton === 5){
        localStorage.storageHasQ1B5BeenPressed = 1;
        document.getElementById('p3-quiz-button5').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
        localStorage.numberOfCorrectQuizAnswers = Number(localStorage.numberOfCorrectQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }
    }else if (whichP3ChapterIsOpen === 3){
      if(numberOfButton === 1){
        localStorage.storageHasQ2B1BeenPressed = 1;
        document.getElementById('p3-quiz-button1').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
        localStorage.numberOfCorrectQuizAnswers = Number(localStorage.numberOfCorrectQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }else if(numberOfButton === 2){
        localStorage.storageHasQ2B2BeenPressed = 1;
        document.getElementById('p3-quiz-button2').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) - 100;
        localStorage.numberOfWrongQuizAnswers = Number(localStorage.numberOfWrongQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }else if(numberOfButton === 3){
        localStorage.storageHasQ2B3BeenPressed = 1;
        document.getElementById('p3-quiz-button3').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
        localStorage.numberOfCorrectQuizAnswers = Number(localStorage.numberOfCorrectQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }else if(numberOfButton === 4){
        localStorage.storageHasQ2B4BeenPressed = 1;
        document.getElementById('p3-quiz-button4').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) - 100;
        localStorage.numberOfWrongQuizAnswers = Number(localStorage.numberOfWrongQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }else if(numberOfButton === 5){
        localStorage.storageHasQ2B5BeenPressed = 1;
        document.getElementById('p3-quiz-button5').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
        localStorage.numberOfCorrectQuizAnswers = Number(localStorage.numberOfCorrectQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }
    }else if (whichP3ChapterIsOpen === 4){
      if(numberOfButton === 1){
        localStorage.storageHasQ3B1BeenPressed = 1;
        document.getElementById('p3-quiz-button1').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) - 100;
        localStorage.numberOfWrongQuizAnswers = Number(localStorage.numberOfWrongQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }else if(numberOfButton === 2){
        localStorage.storageHasQ3B2BeenPressed = 1;
        document.getElementById('p3-quiz-button2').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
        localStorage.numberOfCorrectQuizAnswers = Number(localStorage.numberOfCorrectQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }else if(numberOfButton === 3){
        localStorage.storageHasQ3B3BeenPressed = 1;
        document.getElementById('p3-quiz-button3').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
        localStorage.numberOfCorrectQuizAnswers = Number(localStorage.numberOfCorrectQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }else if(numberOfButton === 4){
        localStorage.storageHasQ3B4BeenPressed = 1;
        document.getElementById('p3-quiz-button4').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) + 200;
        localStorage.numberOfCorrectQuizAnswers = Number(localStorage.numberOfCorrectQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }else if(numberOfButton === 5){
        localStorage.storageHasQ3B5BeenPressed = 1;
        document.getElementById('p3-quiz-button5').style.display = 'none';
        localStorage.playersPoints = Number(localStorage.playersPoints) - 100;
        localStorage.numberOfWrongQuizAnswers = Number(localStorage.numberOfWrongQuizAnswers) + 1;
        document.getElementById("p3-quiz-numberOfCorrectAnswers").innerHTML = localStorage.numberOfCorrectQuizAnswers;
          document.getElementById("p3-quiz-numberOfWrongAnswers").innerHTML = localStorage.numberOfWrongQuizAnswers;
        document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
      }
    }
  }

  // Function to open the pop-up window
  function openPopupP3(event) {
    const imageIndexP3 = Array.from(imagesP3).indexOf(event.target);
    const imageTextP3 = imageTextsP3[imageIndexP3];
    popupTextP3.innerHTML = imageTextP3;
  popupTitleP3.textContent = imageTitlesP3[imageIndexP3];
  document.getElementById('p3-quiz-title').innerHTML = quizTitlesP3[imageIndexP3];
    popupContainerP3.style.display = 'block';
  whichP3ChapterIsOpen = imageIndexP3;
    
  //puts the appropiate answers to buttons, based on the chapter
  if(imageIndexP3 === 1){
    document.getElementById('p3-quiz-button1').innerHTML = p3c2quizButtonTexts[0];
    document.getElementById('p3-quiz-button2').innerHTML = p3c2quizButtonTexts[1];
    document.getElementById('p3-quiz-button3').innerHTML = p3c2quizButtonTexts[2];
    document.getElementById('p3-quiz-button4').innerHTML = p3c2quizButtonTexts[3];
    document.getElementById('p3-quiz-button5').innerHTML = p3c2quizButtonTexts[4];
    
    if(localStorage.storageHasQ1B1BeenPressed < 1)
      document.getElementById('p3-quiz-button1').style.display = 'block';
    if(localStorage.storageHasQ1B2BeenPressed < 1)
        document.getElementById('p3-quiz-button2').style.display = 'block';
    if(localStorage.storageHasQ1B3BeenPressed < 1)
      document.getElementById('p3-quiz-button3').style.display = 'block';
    if(localStorage.storageHasQ1B4BeenPressed < 1)
      document.getElementById('p3-quiz-button4').style.display = 'block';
    if(localStorage.storageHasQ1B5BeenPressed < 1)
      document.getElementById('p3-quiz-button5').style.display = 'block';
      document.getElementById('p3-quiz-title').style.display = 'block';
    document.getElementById('p3-quiz-correct-answers').style.display = 'block';
    document.getElementById('p3-quiz-wrong-answers').style.display = 'block';
  }if(imageIndexP3 === 3){
    document.getElementById('p3-quiz-button1').innerHTML = p3c4quizButtonTexts[0];
    document.getElementById('p3-quiz-button2').innerHTML = p3c4quizButtonTexts[1];
    document.getElementById('p3-quiz-button3').innerHTML = p3c4quizButtonTexts[2];
    document.getElementById('p3-quiz-button4').innerHTML = p3c4quizButtonTexts[3];
    document.getElementById('p3-quiz-button5').innerHTML = p3c4quizButtonTexts[4];
    
    if(localStorage.storageHasQ2B1BeenPressed < 1)
      document.getElementById('p3-quiz-button1').style.display = 'block';
    if(localStorage.storageHasQ2B2BeenPressed < 1)
        document.getElementById('p3-quiz-button2').style.display = 'block';
    if(localStorage.storageHasQ2B3BeenPressed < 1)
      document.getElementById('p3-quiz-button3').style.display = 'block';
    if(localStorage.storageHasQ2B4BeenPressed < 1)
      document.getElementById('p3-quiz-button4').style.display = 'block';
    if(localStorage.storageHasQ2B5BeenPressed < 1)
      document.getElementById('p3-quiz-button5').style.display = 'block';
      document.getElementById('p3-quiz-title').style.display = 'block';
    document.getElementById('p3-quiz-correct-answers').style.display = 'block';
    document.getElementById('p3-quiz-wrong-answers').style.display = 'block';
  }if(imageIndexP3 === 4){
    document.getElementById('p3-quiz-button1').innerHTML = p3c5quizButtonTexts[0];
    document.getElementById('p3-quiz-button2').innerHTML = p3c5quizButtonTexts[1];
    document.getElementById('p3-quiz-button3').innerHTML = p3c5quizButtonTexts[2];
    document.getElementById('p3-quiz-button4').innerHTML = p3c5quizButtonTexts[3];
    document.getElementById('p3-quiz-button5').innerHTML = p3c5quizButtonTexts[4];
    
    if(localStorage.storageHasQ3B1BeenPressed < 1)
      document.getElementById('p3-quiz-button1').style.display = 'block';
    if(localStorage.storageHasQ3B2BeenPressed < 1)
        document.getElementById('p3-quiz-button2').style.display = 'block';
    if(localStorage.storageHasQ3B3BeenPressed < 1)
      document.getElementById('p3-quiz-button3').style.display = 'block';
    if(localStorage.storageHasQ3B4BeenPressed < 1)
      document.getElementById('p3-quiz-button4').style.display = 'block';
    if(localStorage.storageHasQ3B5BeenPressed < 1)
      document.getElementById('p3-quiz-button5').style.display = 'block';
      document.getElementById('p3-quiz-title').style.display = 'block';
    document.getElementById('p3-quiz-correct-answers').style.display = 'block';
    document.getElementById('p3-quiz-wrong-answers').style.display = 'block';
  }if(imageIndexP3 === 7){
    
      document.getElementById('p3-quiz-title').style.display = 'block';
    document.getElementById("p3-final-button").style.display = "block";
  }
    
  //displays the buttons only for the chapters that have quizzes
  if (imageIndexP3 === 1 || imageIndexP3 === 3 || imageIndexP3 === 4) {
    /*document.getElementById('p3-quiz-button1').style.display = 'block';
    document.getElementById('p3-quiz-button2').style.display = 'block';
  document.getElementById('p3-quiz-button3').style.display = 'block';
  document.getElementById('p3-quiz-button4').style.display = 'block';
  document.getElementById('p3-quiz-button5').style.display = 'block';
    document.getElementById('p3-quiz-title').style.display = 'block';*/
  } else {
    document.getElementById('p3-quiz-button1').style.display = 'none';
    document.getElementById('p3-quiz-button2').style.display = 'none';
  document.getElementById('p3-quiz-button3').style.display = 'none';
  document.getElementById('p3-quiz-button4').style.display = 'none';
  document.getElementById('p3-quiz-button5').style.display = 'none';
  document.getElementById('p3-quiz-correct-answers').style.display = 'none';
  document.getElementById('p3-quiz-wrong-answers').style.display = 'none';
  }
    
    
  //gives points for the first time each chapter opens, based on imageIndex
  //the index starts from 0, but variable names start from 1 lol
  switch(imageIndexP3) {
      case 0:
      if(localStorage.storageHasP3C1BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP3C1BeenOpened = 1;
        break;
      case 1:
        if(localStorage.storageHasP3C2BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP3C2BeenOpened = 1;
        break;
    case 2:
        if(localStorage.storageHasP3C3BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP3C3BeenOpened = 1;
        break;
    case 3:
        if(localStorage.storageHasP3C4BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP3C4BeenOpened = 1;
        break;
    case 4:
        if(localStorage.storageHasP3C5BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP3C5BeenOpened = 1;
        break;
    case 5:
        if(localStorage.storageHasP3C6BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP3C6BeenOpened = 1;
        break;
    case 6:
        if(localStorage.storageHasP3C7BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP3C7BeenOpened = 1;
        break;
    case 7:
        if(localStorage.storageHasP3C8BeenOpened == 0){
         localStorage.playersPoints = Number(localStorage.playersPoints) + 100;
         }
        localStorage.storageHasP3C8BeenOpened = 1;
        break;
      default:
      //never supposed to end up here
      console.log("error code: 512");
        break;
    } 
    
    //updates the points counter
    document.getElementById("pointsDisplayedInBottomBar").textContent = localStorage.playersPoints;
  }

  // Function to close the pop-up window
  function closePopupP3() {
    popupContainerP3.style.display = 'none';
  document.getElementById('p3-quiz-button1').style.display = 'none';
    document.getElementById('p3-quiz-button2').style.display = 'none';
    document.getElementById('p3-quiz-title').style.display = 'none'; 
  document.getElementById('p3-quiz-button3').style.display = 'none';
  document.getElementById('p3-quiz-button4').style.display = 'none';
  document.getElementById('p3-quiz-button5').style.display = 'none';
  document.getElementById('p3-quiz-correct-answers').style.display = 'none';
  document.getElementById('p3-quiz-wrong-answers').style.display = 'none';
  document.getElementById("p3-final-button").style.display = "none";
  
  //last day IF EVERYTHING IN P3 HAS BEEN OPENED, OPENS THE LAST 8TH CHAPTER WHICH LEADS TO RESULT SCREEN
  if(localStorage.storageHasP3C1BeenOpened > 0 && localStorage.storageHasP3C2BeenOpened > 0 && localStorage.storageHasP3C3BeenOpened > 0 && localStorage.storageHasP3C4BeenOpened > 0 && localStorage.storageHasP3C5BeenOpened > 0 && localStorage.storageHasP3C6BeenOpened > 0 && localStorage.storageHasP3C7BeenOpened > 0){
    document.getElementById('p3c8img').style.display = 'block';
  }

  }
   
  //displays last chapter of p3 if everything has been opened. this is both here and the close button function
  if(document.getElementById("p3c8img") != null){
    if(localStorage.storageHasP3C1BeenOpened > 0 && localStorage.storageHasP3C2BeenOpened > 0 && localStorage.storageHasP3C3BeenOpened > 0 && localStorage.storageHasP3C4BeenOpened > 0 && localStorage.storageHasP3C5BeenOpened > 0 && localStorage.storageHasP3C6BeenOpened > 0 && localStorage.storageHasP3C7BeenOpened > 0){
    document.getElementById('p3c8img').style.display = 'block';
  }  
  }
  

  // Attach event listeners to the images and the close button
  imagesP3.forEach(image => {
    image.addEventListener('click', openPopupP3);
  });

  closeButtonP3.addEventListener('click', closePopupP3);

 }
  
  
//RESULTS PAGE
//TITLE FOR HOW WELL THE PLAYER DID IN THE GAME
 if(document.getElementById("ratingScoreboard") != null){
   let titleTextVariable;
   //ADJUST NUMBERS LATER IF NEEDED
   console.log(parseInt(localStorage.playersPoints) +1);
  switch(true) {
      case parseInt(localStorage.playersPoints) <= 2800:
        titleTextVariable = "Adventurous Amateur";
        break;
    case parseInt(localStorage.playersPoints) >2800 && parseInt(localStorage.playersPoints) <=3800:
        titleTextVariable = "Negligent Nomad";
        break;
      case parseInt(localStorage.playersPoints) >3800 && parseInt(localStorage.playersPoints) <=4400:
        titleTextVariable = "Wobbly Wanderer";
        break;
      case parseInt(localStorage.playersPoints) >4400 && parseInt(localStorage.playersPoints) <=5000:
        titleTextVariable = "Thoughtful Trailblazer";
        break;
    case parseInt(localStorage.playersPoints) >5000:
        titleTextVariable = "Genius Globetrotter";
        break;
      default:
        //never supposed to get here, but just incase...
        titleTextVariable = "SAFE Traveller";
        break;
    }
   //exception rank if player found the teddy bear souvenir
   if(localStorage.hasSouvenir7BeenCollected > 0){
    titleTextVariable = "Bear collector";
   }
   
   document.getElementById("ratingScoreboard").textContent=titleTextVariable;
   
   //amount of souvenirs found
   let totalSouvenirsFoundCount = parseInt(localStorage.hasSouvenir0BeenCollected) + parseInt(localStorage.hasSouvenir1BeenCollected) + parseInt(localStorage.hasSouvenir2BeenCollected) + parseInt(localStorage.hasSouvenir3BeenCollected) + parseInt(localStorage.hasSouvenir4BeenCollected) + parseInt(localStorage.hasSouvenir5BeenCollected) + parseInt(localStorage.hasSouvenir6BeenCollected) + parseInt(localStorage.hasSouvenir7BeenCollected);
   document.getElementById("souvenirsFoundCount").textContent = totalSouvenirsFoundCount;
     
   
   //amount of correct quiz answers as a percentage:
   
   var totalQuizAnswers = parseInt(localStorage.numberOfCorrectQuizAnswers) + parseInt(localStorage.numberOfWrongQuizAnswers);
   var percentageCorrect = (parseInt(localStorage.numberOfCorrectQuizAnswers) / totalQuizAnswers) * 100;
   // Round the percentage to two decimal places
  percentageCorrect = Math.round(percentageCorrect * 100) / 100;
   document.getElementById("percentageOfCorrectQuizAns").textContent = percentageCorrect;
  
 }
  
  //hidden teddy souvenir. have to gather 5000+ points before it appears to p1c5
  if(document.getElementById("souvenir7") != null){
    if(parseInt(localStorage.playersPoints) > 5000){
      document.getElementById("souvenir7").style.display = 'block';
    }
  }