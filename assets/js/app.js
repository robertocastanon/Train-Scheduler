// JS
document.addEventListener("DOMContentLoaded", () => {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxfTSCkYzPGYczIAGD0HJap58fpzZDI2I",
    authDomain: "train-scheduler-29fc3.firebaseapp.com",
    databaseURL: "https://train-scheduler-29fc3.firebaseio.com",
    projectId: "train-scheduler-29fc3",
    storageBucket: "train-scheduler-29fc3.appspot.com",
    messagingSenderId: "923551889087"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // button for adding trains
  document.querySelector("#add-train-btn").addEventListener("click", function(event) {
      event.preventDefault();

    // variables to capture user input
      var tName = document.querySelector("#train-name-input").value.trim();
      var tDestination = document.querySelector("#destination-input").value.trim();

    //use of moment js
      var tFirst = moment(document.querySelector("#first-input").value.trim(), "hh:mm").format("X");
      var tFrequency = document.querySelector("#frequency-input").value.trim();

      //current time
      var currentTime = moment();
      console.log(moment(currentTime).format("hh:mm"));

      // create local "temp" object for holding train data
      var newTrain = {
          train: tName,
          destination: tDestination,
          first: tFirst,
          frequency: tFrequency
      };

      // uploads train data to the database
      database.ref().push(newTrain);

      // logs everything to console
      console.log(newTrain.train);
      console.log(newTrain.destination);
      console.log(newTrain.first);
      console.log(newTrain.frequency);

      // alert user that you added a new train
      alert("Added Train!");

      //clear all of the text-boxes
      document.querySelector("#train-name-input").value = "";
      document.querySelector("#destination-input").value = "";
      document.querySelector("#first-input").value = "";
      document.querySelector("#frequency-input").value = "";
  }); // end of click event

  // create a firebase event for adding train to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {

      console.log(childSnapshot.val());

      // store everything into a var
      var tName = childSnapshot.val().train;
      var tDestination = childSnapshot.val().destination;
      var tFirst = childSnapshot.val().first;
      var tFrequency = childSnapshot.val().frequency;

      // train info
      console.log(tName);
      console.log(tDestination);
      console.log(tFirst);
      console.log(tFrequency);

      //first train config
      var tTime = moment.unix(tFirst).format("hh:mm");

      //difference between times
      var difference = moment().diff(moment(tTime),"minutes");

      //remaining time
      var tRemain = difference % tFrequency;

      //mins until train arrives
      var minUntil = tFrequency - tRemain;

      //the next arrival time
      var nextArrival = moment().add(minUntil, "minutes").format("hh:mm");

	  //adding info to DOM table 
      $("#trains-appear-here").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tFrequency + "</td><td>" + nextArrival + "</td><td>" + minUntil + "</td></tr>");

    //   document.querySelector("#trains-appear-here").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tFrequency + "</td><td>" + nextArrival + "</td><td>" + minUntil + "</td></tr>");
      
      

  });

});
