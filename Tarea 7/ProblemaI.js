function saludar() {
  return `¡Hola, ${this.nombre}! ¿Cómo estás?`;
}
let persona = {
  nombre: "Juan",
};
let mensajeSaludo = saludar.call(persona);

console.log(mensajeSaludo);
