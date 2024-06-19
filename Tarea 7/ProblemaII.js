let auto = {
  marca: "Toyota",
  mostrarMarca: function () {
    return `La marca del auto es ${this.marca}`;
  },
};

let moto = {
  marca: "Honda",
};

let mensajeMarcaMoto = auto.mostrarMarca.call(moto);

console.log(mensajeMarcaMoto);
