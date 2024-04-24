let nombreUsuario = prompt("ingrese su nombre");
let montoDisponible = 20000;
let montoRetirar = parseFloat(prompt(`usted dispone de ${montoDisponible} cuanto queire retirar?`));

function saldoActual(){
   if(montoDisponible > 0 && montoDisponible > montoRetirar){
    return "Felicitaciones su operacion se relizo con exito, su nuevo saldo es" + (montoDisponible - montoRetirar);
   }else{
    return "su saldo es insuficiente para esta operacion vuelva a ingresar un numero valido" ;
   }
} 

document.write(saldoActual())
// if (montoDisponible < montoRetirar){
//     return document.write(saldoActual)
// } else{
//     return "no tiene saldo suficiente ingrese otro motno"
// }