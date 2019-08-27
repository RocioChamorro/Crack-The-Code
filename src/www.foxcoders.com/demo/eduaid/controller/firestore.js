export const saveDataofInscription = (namecollection, obj) => {
    return firebase.firestore().collection(namecollection).add(obj);
}


export const gettingDataFromFirebase = (namecollection, property, callbackTemplate) => {
    return firebase.firestore().collection(namecollection).orderBy(property).onSnapshot(callbackTemplate);
}