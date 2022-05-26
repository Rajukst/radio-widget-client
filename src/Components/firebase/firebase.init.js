import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialFirebase = () => {
  initializeApp(firebaseConfig);
};
export default initialFirebase;