import { students } from "../model/modelStudents.js";
import { studentsViewList } from "../view/viewStudents.js";
import { insertTitleList } from "../view/viewStudents.js";

const buttonCall = document.getElementById("btnListar");

//Obtenido del modelo
const getListStudents = (students) => {
    let datos=[];
    for(let s of students){
        let datosTemplate= `${s.name} ${s.lastName} ${s.age}`;
        datos.push(datosTemplate);
    }
    return datos; 
}

//Se asocia el evento al boton 

buttonCall.addEventListener("click", () => {
    const reponse = getListStudents(students);

    // console.log(response);
    studentsViewList(reponse);
    insertTitleList();
});