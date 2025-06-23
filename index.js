const { registrar, leer } = require("./operaciones.js");

const args = process.argv.slice(2);

const [option, nombre, edad, tipoAnimal, color, enfermedad] = args;

const main = () => {
  if (option === "leer") leer();
  if (option === "registrar")
    registrar(nombre, edad, tipoAnimal, color, enfermedad);
};

main();
