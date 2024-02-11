/****NO HE SABIDO HACER LO DEL METODO LICENCIA, NO ENTIENDO BIEN COMO FUNCIONA. EN CLASE PREGUNTARÉ **********/


// ********* CLASE AUTOBUS ***************//

class Autobus{
    capacidad;
    pasajeros;
    matricula;
    constructor(capacidad, pasajeros, matricula){
      this.capacidad=parseInt(capacidad);
      this.pasajeros=parseInt(pasajeros);
      this.matricula=matricula;
    }
    
    getCapacidad(){
      return this.capacidad;
    }
    
    setCapacidad(capacidad){
      this.capacidad=capacidad;
    }
    
    getPasajeros(){
      return this.pasajeros;
    }
    
    setPasajeros(pasajeros){
      this.pasajeros=pasajeros;
    }
    
    getMatricula(){
      return this.matricula;
    }
    
    setMatricula(matricula){
      this.matricula=matricula;
    }
    
  static mostrarDatosAutobus(autobus){
    console.log("La matricula es " + autobus.getMatricula() + ". La capacidad es: " + autobus.getCapacidad()+ ".Ahora mismo lleva " + autobus.getPasajeros() + " pasajeros.")
  }
    
   subir(num){
     
     this.pasajeros=this.pasajeros+num;
      if(this.pasajeros>this.capacidad) {
        this.pasajeros=this.capacidad;
      }
     
     }
     
     
  
    
    bajar(num){
     this.pasajeros=this.pasajeros-num;
      
      if(this.pasajeros<0){
        this.pasajeros=0;
      }
   }  
    
  }
  
  // ********* CLASE CONDUCTOR ***************//
  
  class Conductor{
    nombre;
    licencia;
    
    constructor(nombre, licencia){
      this.nombre=nombre;
      this.licencia=licencia;
    }
    
    getNombre(){
      return this.nombre;
    }
    setNombre(nombre){
      this.nombre=nombre;
    }
    
    getLicencia(){
      return this.licencia;
    }
    setLicencia(licencia){
      this.licencia=licencia;
    }
    
    static mostrarDatos(conductor){
      console.log("El nombre del conductor es " + conductor.getNombre() + " y su licencia es " + conductor.getLicencia());
    }
  }
  
  function main(){
    
    let conductor1= new Conductor("Pedro", "123456");
    let autobus1= new Autobus(54, 20, "8125HFN")
    Conductor.mostrarDatos(conductor1);
    Autobus.mostrarDatosAutobus(autobus1);
    autobus1.subir(5);
    Autobus.mostrarDatosAutobus(autobus1);
    autobus1.bajar(3);
    Autobus.mostrarDatosAutobus(autobus1);
    autobus1.subir(2);
    Autobus.mostrarDatosAutobus(autobus1);
     autobus1.subir(22);
    Autobus.mostrarDatosAutobus(autobus1);
     autobus1.subir(10);
    Autobus.mostrarDatosAutobus(autobus1);
    
   autobus1.bajar(50);
    Autobus.mostrarDatosAutobus(autobus1);
    autobus1.bajar(5);
    Autobus.mostrarDatosAutobus(autobus1);
  }
  
   main();