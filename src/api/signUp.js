import { firebaseApp } from '../firebase/firebase'

export default (email, password) => {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(() => {
        console.log("User added to db");
        return true
    }).catch((err) => {
        console.log(err)
    })
}