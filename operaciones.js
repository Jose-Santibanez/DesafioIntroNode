const fs = require("fs");

let cita = [];
// Creamos la funcion para registra cita
const registrar = (nombre, edad, tipo, color, enfermedad) => {
  /* revisamos si el archivo contiene citas */
  let citasIngresadas = Array.from(
    JSON.parse(fs.readFileSync("citas.json", "utf-8"))
  ); // transformamos lo obtenido en un valor string, luego a un objeto, este objeto lo pasamos a un array

  /* creamos la cita */
  cita = {
    nombre_animal: nombre,
    edad: edad,
    tipo_animal: tipo,
    color: color,
    enfermedad: enfermedad,
  };
  /* insertamos la cita a los valores ya encontrados dentro de citasIngresadas  */
  citasIngresadas.push(cita);
  fs.writeFileSync("citas.json", JSON.stringify(citasIngresadas));
  console.log("Cita creada");
};

const leer = () => {
  console.log(JSON.parse(fs.readFileSync("citas.json", "utf-8")));
};

module.exports = { registrar, leer };
