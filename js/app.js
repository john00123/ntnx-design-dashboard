
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
    const list = $('#list');

    //create reference
    const dbRefObject = firebase.database().ref().child('object');
    const dbRefList   = dbRefObject.child('hobbies');
    //SYNC object changes

    dbRefObject.on('value', snap => {
      preObject.html(JSON.stringify(snap.val(), null, 3));
    });

    dbRefList.on('child_added', snap => {
      const li = document.createElement('li');
      list.append(`<li id=${snap.key}>${snap.val()}</li>`);
    });


    dbRefList.on('child_change', snap => {
      $(`#${snap.key}`).text(snap.val());
    });

}());
