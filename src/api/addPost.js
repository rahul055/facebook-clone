import { postRef } from '../firebase/firebase'

export default (uid, content) => {
    postRef.push({
        createdBy: uid,
        content
    });
};