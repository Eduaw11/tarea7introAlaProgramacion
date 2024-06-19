function presentar() {
  return `Hola, soy ${this.nombre}. Mucho gusto.`;
}

let persona1 = {
  nombre: "Juan",
};

let persona2 = {
  nombre: "María",
};

let mensajePresentacion = presentar.apply(persona2);

console.log(mensajePresentacion);
