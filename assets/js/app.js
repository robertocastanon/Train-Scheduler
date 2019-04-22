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

  //button for adding trains
  document.querySelector("#add-train-btn").addEventListener("click", function(event) {
      event.preventDefault();

    // variables to capture user input
      var tName = doucment.querySelector("#train-name-input").value.trim();
      var tDestination = document.querySelector("#destination-input").value.trim();
      var tFirst = document.querySelector("#first-input").value.trim();
      var tFrequency = document.querySelector("#frequency-input").value.trim();

      //create local "temp" object for holding train data
      var newTrain = {
          train: tName,
          destination: tDestination,
          first: tFirst,
          frequency: tFrequency
      };

      //uploads train data to the database
  })

});

// jQuery document.on("ready")
// $(function() {
  
// });