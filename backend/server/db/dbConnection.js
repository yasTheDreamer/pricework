import { firebaseConfig } from "../config/dbConfig";
import admin from "firebase-admin";

//firebase.initializeApp(firebaseConfig);

export const ref = admin.initializeApp(firebaseConfig);

// database setup
//export default firebase;

export default admin;
