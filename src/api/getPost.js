import { postRef } from '../firebase/firebase'

export default (uid, content) => {
    postRef.once('value', snap => {
        return snap.val()
    }));
};