import {getFirestore} from '@firebase/firestore'
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyD854hFitQG8Sb83W-4LF--u-F47n6jMVU",
    authDomain: "movie-app-c88b9.firebaseapp.com",
    projectId: "movie-app-c88b9",
    storageBucket: "movie-app-c88b9.appspot.com",
    messagingSenderId: "1078255130288",
    appId: "1:1078255130288:web:a6f02a1aafb73a4b910d75",
    measurementId: "G-NLE3CQ4YXC"
}

initializeApp(firebaseConfig)

export const db = getFirestore()