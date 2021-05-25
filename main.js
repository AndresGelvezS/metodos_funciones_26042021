function Saludar(p1,p2,p3){
    return `Hola ${p1} ${p2} como estas tu edad es: ${p3}`;
}
console.log(Saludar.call(null, "Andres","Gelvez",37));
console.log(Saludar.call(null, "Kelly","Vega",34));
console.log(Saludar.apply(null, ["Angie","Vega",10]));
let ejecutar = Saludar.bind(null,"Andres","Suarez",25);
console.log(ejecutar());