
(function(){
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCX2mp5rLjF0nroDjIo4GtjnDr6CpLkqJ0",
      authDomain: "ntnx-dteam.firebaseapp.com",
      databaseURL: "https://ntnx-dteam.firebaseio.com",
      projectId: "ntnx-dteam",
      storageBucket: "ntnx-dteam.appspot.com",
      messagingSenderId: "220244852409"
    };

    firebase.initializeApp(config);

    const preObject = $('#object');

    //create reference
    const dbRefObject = firebase.database().ref().child('object');

    //SYNC object changes

    dbRefObject.on('value', snap => console.log(snap.val()));

}());
