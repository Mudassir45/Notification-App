import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6duEnivfOEmdAHTMR8auS_GcAiR--l-A",
    authDomain: "notification-app-367fc.firebaseapp.com",
    databaseURL: "https://notification-app-367fc.firebaseio.com",
    projectId: "notification-app-367fc",
    storageBucket: "notification-app-367fc.appspot.com",
    messagingSenderId: "558719177851",
    appId: "1:558719177851:web:93960a446246b3872bbede"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();


export function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === 'granted') {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN => ", currentToken);
                } else {
                  // Show permission request.
                  console.log('No Instance ID token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}

// code takeen from firebase website inside cloud messaging => Web(JavaScript) +>
// set up a JS client