var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.printname = function () {
        this.nombre;
    };
    Persona.prototype.sumaEdad = function (numanos) {
        return this.edad + numanos;
    };
    return Persona;
}());
var person1 = new Persona('lola', 'flores', 23);
// console.log(person1);
// console.log(person1.sumaEdad(10));
// console.log(person1.nombre);
// person1.edad = 35
console.log(person1.getApellido());
person1.setApellido('lopez');
console.log(person1.getApellido());
