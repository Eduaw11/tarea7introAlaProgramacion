let libro = {
    titulo: 'Harry Potter',
    autor: 'J. K. Rowling'
};

function agregarCapitulos(capitulos) {
    this.capitulos = capitulos;
}

let listaCapitulos = ['Harry Potter y la piedra filosofal', 'Harry Potter y la cámara secreta', 'Harry Potter y el prisionero de azkaban', 'Harry Potter y el cáliz de fuego'];

agregarCapitulos.apply(libro, [listaCapitulos]);

console.log(libro);
