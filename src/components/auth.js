import {AUTH} from '../firebase/Firebase'

export function signup(email, password) {
return AUTH.createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
return AUTH.signInWithEmailAndPassword(email, password);
}
