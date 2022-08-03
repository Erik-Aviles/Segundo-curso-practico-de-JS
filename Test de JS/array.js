 //Array

 const planArray = [
    {
        name: "free" ,
        description: "Solo puedes tomar los cursos gratis", 
    },
    {
        name: "basic" ,
        description: "Puedes tomar casi todos los cursos de Platzi durante un mes", 
    },
    {
        name: "expert" ,
        description: "Puedes tomar casi todos los cursos de Platzi durante un año", 
    },
    {
        name: "expertPlus" ,
        description: "ú y alguien más pueden tomar TODOS los cursos de Platzi durante un año", 
    },
]
console.log("ARRAY");


//SOLO CON IF
const word = "free";
for (let i = 0; i < planArray.length; i++){
    if(word === planArray[i].name){
        console.log(planArray[i].description);
    }
}
//CON METODO FIND
/* const result = planArray.find(word => word.name === "basic");
console.log(`En tu plan: ${result.name} , ${result.description}`); */

