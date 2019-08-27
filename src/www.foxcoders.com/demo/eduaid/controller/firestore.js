export const saveDataofInscription = (namecollection, obj) => {
    return firebase.firestore().collection(namecollection).add(obj);
}