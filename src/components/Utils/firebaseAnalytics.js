// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "authDomainHere",
    databaseURL: "databaseURLHere",
    projectId: "projectIdHere",
    storageBucket: "storageBucketHere",
    messagingSenderId: "messagingSenderIdHere",
    appId: "appIdHere",
    measurementId: "measurementIdHere"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(app);

export const firebaseCall = (eventName, parameters) => {
    logEvent(firebaseAnalytics, eventName, parameters);
}

