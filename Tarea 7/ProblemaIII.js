function saludar() {
  return `¡Hola, ${this.nombre}! ¿Cómo estás?`;
}

let persona1 = {
  nombre: "Juan",
};

let persona2 = {
  nombre: "María",
};

let mensajeSaludo1 = saludar.call(persona1);
let mensajeSaludo2 = saludar.call(persona2);

console.log(mensajeSaludo1);
console.log(mensajeSaludo2);
