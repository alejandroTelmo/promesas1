const empleados=[
    {
        id:1,
        nombre:"Sebastian",
        apellido:"Ñoño"
    },
    {
        id:2,
        nombre:"Alejandro",
        apellido:"Telmo"
    },
    {
        id:3,
        nombre:"Paola",
        apellido:"Sepulveda"
    }
];
const sueldos=[
    {
        id:1,
        sueldo:55000,
        registrado:true
    },
    {
        id:2,
        sueldo:20000,
        registrado:false
    },
    {
        id:3,
        sueldo:30000,
        registrado:true
    }
];
console.table(sueldos);
console.table(empleados);
const id=0;
const otro=5;
const getEmpleadoById=(id)=>{
    return new Promise((resolve,reject)=>{

        const empleado=empleados.find(empleado=>empleado.id===id );
        if(empleado){
            resolve(empleado);
            return;
        }
        reject(`El id de empleado  ${id}  no existe.`);

     })
    }

//getEmpleadoById(otro);
const getSueldoById=(id)=>{
    return new Promise((resolve,reject)=>{

        const sueldo=sueldos.find(sueldo=>sueldo.id===id );
        if(sueldo){
            resolve(sueldo);
            return;
        }
        reject(`El id de sueldo  ${id}  no existe.`);

     })
    }

let nombre;
getEmpleadoById(id).then(empleado=>{
     nombre=empleado.nombre;
    return getSueldoById(id);
}).then(sueldo=>console.log(`El empleado ${nombre} tiene un salario de ${sueldo.sueldo}`))
.catch(err=>console.log(err));

getEmpleadoById(id);