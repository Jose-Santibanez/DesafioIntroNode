const fs = require("fs");
const { json } = require("stream/consumers");

let cita = [];

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  cita = [
    {
      nombre_animal: nombre,
      edad: edad,
      tipo_animal: tipo,
      color: color,
      enfermedad: enfermedad,
    },
  ];
  fs.writeFileSync('citas.json', JSON.stringify(cita))
  console.log('Cita creada');
};

registrar('Benito','2 años', 'perro' ,'blanco', 'vomitos');

const leer = ()=>{
    console.log(JSON.parse(fs.readFileSync("citas.json", "utf-8")));
}

