
class Persona {
    public nombre : string;
    private apellido : string;
    edad : number

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    
    public getApellido():string{
        return this.apellido
    }

    public setApellido(apellido):void{
        this.apellido = apellido
    }


    public printname ():void {
        this.nombre
    }

    sumaEdad (numanos:number):number{
        return this.edad + numanos
    }
}

let person1 : Persona = new Persona('lola','flores',23);

// console.log(person1);
// console.log(person1.sumaEdad(10));

// console.log(person1.nombre);
// person1.edad = 35

console.log(person1.getApellido());

person1.setApellido('lopez');
console.log(person1.getApellido());











