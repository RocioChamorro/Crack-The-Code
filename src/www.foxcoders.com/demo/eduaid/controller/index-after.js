import { saveDataofInscription } from './firestore.js'

//datos del estudiante
const nameOfStudents = document.querySelector('#nameOfStudent');
const lastNameOfStudent = document.querySelector('#lastNameOfStudent');
const dniOfStudent = document.querySelector('#dniOfStudent');
const yearOfStudent = document.querySelector('#yearOfStudent');
const schoolOfStudent = document.querySelector('#schoolOfStudent');
const user_class = document.querySelector('#user_class');
//datos de los padres
const nameOfFather = document.querySelector('#nameOfFather');
const lastNameOfFather = document.querySelector('#lastNameOfFather');
const dniOfFather = document.querySelector('#dniOfFather');
const cellphoneOfFather = document.querySelector('#cellphoneOfFather');
const emailOfFather = document.querySelector('#emailOfFather');
//parentesco
const nameAttorney = document.querySelector('#nameAttorney');
const lastNameAttorney = document.querySelector('#lastNameAttorney');
const parentescoAttorney = document.querySelector('#parentescoAttorney');
const cellphoneAttorney = document.querySelector('#cellphoneAttorney');
// boton enviar

const sendData = document.querySelector('#btnSubmit');

//boton siguiente 
const btnNext = document.querySelector('#btnProgress');


sendData.addEventListener('click', () => {
    const obj = {
        nameOfStudents: nameOfStudents.value,
        lastNameOfStudent: lastNameOfStudent.value,
        dniOfStudent: dniOfStudent.value,
        yearOfStudent: yearOfStudent.value,
        schoolOfStudent: schoolOfStudent.value,
        user_class: user_class.value,
        nameOfFather: nameOfFather.value,
        lastNameOfFather: lastNameOfFather.value,
        dniOfFather: dniOfFather.value,
        cellphoneOfFather: cellphoneOfFather.value,
        emailOfFather: emailOfFather.value,
        nameAttorney: nameAttorney.value,
        lastNameAttorney: lastNameAttorney.value,
        parentescoAttorney: parentescoAttorney.value,
        cellphoneAttorney: cellphoneAttorney.value
    }
    sessionStorage.setItem('all-data', JSON.stringify(obj));
    //  JSON.parse(sessionStorage.getItem('all-data')
    saveDataofInscription('clases-after', obj);

})


const validateInformationOfStudent = () => {

    let correctInformation = true;
    if (nameOfStudents.value.length < 2) {
        correctInformation = false;
    }
    if (lastNameOfStudent.value.length < 2) {
        correctInformation = false;
    }
    if (dniOfStudent.value.length < 8) {
        correctInformation = false;
    }
    if (schoolOfStudent.value.length < 2) {
        correctInformation = false;
    }
    if (!correctInformation) {
        alert('Algunos campos no están correctos, vuelva a revisarlos');
    }

    return correctInformation;

}

btnNext.addEventListener('click', () => {
    validateInformationOfStudent();
})

