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
const id=4;
const otro=5;
//defino un metodo asincrono
const getEmpleadoById=async (id)=>{
    
    try{
        const empleado=empleados.find(empleado=>empleado.id===id );
        if(empleado){
           return empleado;
        }
        throw Error(`El id de empleado  ${id}  no existe.`);
    }catch(error){
        throw error;

    }
     
        

     }
    

//getEmpleadoById(otro);
//definimos una funcion asincrona, nos devuelve una promesa
const getSueldoById=async (id)=>{
   
try{
    const sueldo=sueldos.find(sueldo=>sueldo.id===id );
    if(sueldo){
        return(sueldo);
      
    }
    throw Error(`El id de sueldo  ${id}  no existe.`)
}catch(err){
    throw err;
}
     }
    

let nombre;
const getDatosCompletosEmpleados=async (id)=>{
    try{
        const empleado= await getEmpleadoById(id);
        const sueldo=await getSueldoById(id);
        console.log(empleado);
        console.log(sueldo);
        return{
            id,
            sueldo:sueldo.sueldo,
            empleado:empleado.nombre
        }
    }catch(err){
throw err;
    }
    
}

getDatosCompletosEmpleados(id)
.then(data=>console.log(`El empleado con id ${data.id} tiene un sueldo de ${data.sueldo}  y su nombre es ${data.empleado}`))
.catch(err=>console.log(err.message));