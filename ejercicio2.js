//crear una cuenta inicializada con cero pesos, donde me pida que si el monto de la cuenta es 0 no puedo retirar   

let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
let montoDisponible = 0;
   

    function depositarDinero(){
        let dineroIngresado = parseFloat(prompt(`Ingrese el monto que quiere depositar: `));
        if(dineroIngresado < 0){
            alert(`No se pude ingresar un monto menor a 0(cero). Por favor ingrese un monto mayor a 0(cero) o el numero 0 para volver al menú`);
            depositarDinero()
        } else if(isNaN(dineroIngresado)){
            alert(`Parece que ingresaste un caracter no valido. Por favor ingrese un monto mayor a 0(cero) o el numero 0 para volver al menú`);
            depositarDinero()
        } else{
            return alert(`Su operación se realizó con éxito su nuevo saldo es de: $${montoDisponible += dineroIngresado}`);
        }       
    }
 
    function extraerDinero(){
        let montoRetirar = parseFloat(prompt(`Ingrese el monto que quiere retirar: `));
        if(montoRetirar > montoDisponible){
            alert(`no tiene saldo suficiente pruebe con un monto menor`);
            extraerDinero()
        } else if(isNaN(montoRetirar)){
            alert(`Parece que ingresaste un caracter no valido. Ingrese ingrese el monto que desea extraer o el numero 0 para volver al menú `)
            extraerDinero()
        } else if(montoRetirar < 0){
            alert(`No se puede extraer un monto menor a cero. Por favor ingrese el monto que desea extraer o el numero 0 para volver al menú `)
            extraerDinero()
        } else{
            return alert(`su extraccion se realizó con exito, nuevo saldo es de $${montoDisponible -= montoRetirar}`);
        }
        
    };
       

    function verDineroDisponible(){
        alert(`Su saldo disponible es de: $${montoDisponible}`);
    }
    
    function salirDeAqui(){
        alert(`Gracias por usar nuestro servicio`)
    }

    function ingresarNumero(){
        let numIngresado = prompt(`Hola ${nombreUsuario} elegí el numero de la acción que deseas realizar:   
        1 -Depositar dinero 
        2 -Extraer dinero  
        3 -Ver dinero disponible  
        4 -Salir`);
    
        switch(numIngresado){
            case(numIngresado != "1" || numIngresado != "2" || numIngresado != "3" || numIngresado != "4"):
            `Ingrese el numero alguna de las opciones`;
                ingresarNumero();            
            break;
            case '1':
                depositarDinero();
                ingresarNumero();
                break;
            case '2':
                extraerDinero();
                ingresarNumero();
                break;
            case '3':
                verDineroDisponible();
                ingresarNumero();
            break;
            case '4':
                salirDeAqui();
                break;
            default:
                alert(`Ingrese el numero alguna de las opciones del menú`);
                ingresarNumero();
        };
        
    };
    
    ingresarNumero()
    
    
    