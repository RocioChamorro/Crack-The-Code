import { gettingDataFromFirebase } from './firestore.js';


//const btnGetting = document.querySelector('#getting-data');
const renderizingTable = () => {
    let table = document.querySelector('#containerUser')
    gettingDataFromFirebase('clases-pruebas', 'nameOfStudents', query => {
        table.innerHTML = " ";
        let number = 1;
        query.forEach((element, i) => {


            console.log(element.data());
            table.innerHTML += `
                <tr>
                    <th scope="row">${number}</th>
                    <td>${element.data().dniOfStudent}</td>
                    <td>${element.data().nameOfStudents}</td>
                    <td>${element.data().lastNameOfStudent}</td>
                    <td>${element.data().yearOfStudent}</td>
                    <td>${element.data().schoolOfStudent}</td>
                    <td> <img src="${element.data().photo}" alt="photo"></td>

                </tr>
        
           `
            number++;

        })
    })
}
renderizingTable();