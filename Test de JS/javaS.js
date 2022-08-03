/* const name = "Erika";
const lastName = "Aviles";
const nickName = "Eka";

function NombreCompleto(name, lastName, nickName) {
    const completeName = name + " "+ lastName;
    return console.log("Mi nombre es: " + completeName + ", pero prefiero que me digas " + nickName);
}

NombreCompleto(name, lastName, nickName); */

//Mi nombre es: Erika Aviles, pero prefiero que me digas Eka

//**************************************/

/* const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

const tipoSup = "dkjjf";
if(tipoSup === "Free"){
    console.log("Estas suscripto en un plan " + tipoSup + " y solo puedes tomar los cursos gratis");
}else if (tipoSup === "Basic"){
    console.log("Estas suscripto en un plan " + tipoSup + " y puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoSup === "Expert") {
    console.log("Estas suscripto en un plan " + tipoSup + " y puedes tomar casi todos los cursos de Platzi durante un año");
}else if (tipoSup === "ExpertPlus"){
    console.log("Tú y alguien estan suscripto en el plan " + tipoSup + " y pueden tomar TODOS los cursos de Platzi durante un año");
}else{
    console.log("(" + tipoSup + ")" + " no pertenece a ningun tipo de suscripcion");
}

const tS = "Expert";
if(tS === "Free"){
    console.log("Estas suscripto en un plan " + tS + " y solo puedes tomar los cursos gratis");
}
if (tS === "Basic"){
    console.log("Estas suscripto en un plan " + tS + " y puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tS === "Expert") {
    console.log("Estas suscripto en un plan " + tS + " y puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tS === "ExpertPlus"){
    console.log("Tú y alguien estan suscripto en el plan " + tS + " y pueden tomar TODOS los cursos de Platzi durante un año");
}
 */
//Objeto 
const plan = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}

const a = "free";
console.log("OBJETO");
function tipoDeSuscripcion(suscripcion) {
   if(plan[suscripcion]){
        console.log(plan[suscripcion]);
        return;
    }
    console.warn("Ese tio de suscripcion no existe")
}
tipoDeSuscripcion(a)



