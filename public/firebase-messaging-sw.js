importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

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
  firebase.messaging();
