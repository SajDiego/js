const usuario = "Javier"
const contraseña = "js2023"
alert("Bienvenido Profesores")
let user= prompt("Nombre de Usuario")
let pasword= prompt("Ingresa tu contraseña")
let intento=1

do{
    if(usuario === user && contraseña === pasword){
        alert("Bienvenido"  + " " + usuario)
        break
    }else{
        alert("No sos mi tutor")  
    }   intento=intento + 1 
}
while(intento <=3); //Porque en vez de pedirme nuevamente (cuando es erroneo el logueo) el usuario me hace aceptar 3 veces y sigue abajo con la funcion notaFinal? 

function notaFinal() {
    let nombre = prompt("Ingrese el nombre del alumno");
    let examen1 = Nota(nombre, 1);
    let examen2 = Nota(nombre, 2);
    let examen3 = Nota(nombre, 3);

    let promedio = (Number(examen1) + Number(examen2) + Number(examen3)) / 3; 
    alert("El promedio de " + nombre + " es: " + promedio);
}

function Nota(nombre, numeroNota) {
    let  nota;
    do {
        nota = prompt("Ingrese la"+" "+ numeroNota +" "+ "de" + " "+ nombre +" "+ "del (1 al 10)");
//
        if (nota >= 1 && nota <= 10) {
            alert("Nota válida: " + nota);
        } else {
            alert("Ingrese una nota entre 1 y 10.");
        }
    } while (nota < 1 || nota > 10); // Aca si inicia el bucle otra vez. 

    return nota;
}

notaFinal();


