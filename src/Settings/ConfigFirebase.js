import firebase from 'firebase/app';
import 'firebase/database';

const config={
    apiKey: "AIzaSyDpvJCkYo3-W9uIpApHWrM2u_jUV_HJeDo",
    authDomain: "dbfirebase-52031.firebaseapp.com",
    databaseURL: "https://dbfirebase-52031.firebaseio.com",
    projectId: "dbfirebase-52031",
    storageBucket: "dbfirebase-52031.appspot.com",
    messagingSenderId: "806174446323",
    appId: "1:806174446323:web:7f829ec3d677ba96191d86",
    measurementId: "G-6ZBTR9E1K1"

}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;