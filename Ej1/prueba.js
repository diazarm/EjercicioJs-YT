const crearUsuario = (nombre, apellido, correo, ocupacion, edad) => {
    return {
      nombre,
      apellido,
      correo,
      ocupacion,
      edad,
    }
  }
  


  const mostrarUsuario = ({ nombre, apellido, correo, ocupacion, edad }) => {
    const mensaje = ` El nombre es: ${nombre} ${apellido}\n Su correo es: ${correo}\n${ocupacion} ${edad} años`;
    console.log(mensaje);  
  }
  


  const usuario1 = crearUsuario("Ariel", "Perez", "perez@me.com", "Ingeniero", 38);
  
 // mostrarUsuario(usuario1);
  
  

  const usuarios = [];
  
  usuarios.push(crearUsuario("Ernesto", "Peña", "ernesto@gmail.com", "Estudiante", 18));
  usuarios.push(crearUsuario("Ariel", "Perez", "perez@me.com", "Ingeniero", 38));
  usuarios.push(crearUsuario("Felipe", "Tomazo", "tomazo@me.com", "Estudiante", 22));
  
  //console.log(usuarios);
  
  // usuarios.forEach(element => mostrarUsuario(element))
  
  
   usuarios.forEach(papa => console.log(papa.edad));