let rectangulo = {
  ancho: 5,
  alto: 10,
  area: function () {
    return this.ancho * this.alto;
  },
};

const cuadrado = {
  lado: 7,
};

const areaCuadrado = rectangulo.area.call({
  ancho: cuadrado.lado,
  alto: cuadrado.lado,
});


console.log("El área del cuadrado es:", areaCuadrado);
