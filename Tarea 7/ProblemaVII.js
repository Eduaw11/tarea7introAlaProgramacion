let cuentaBancaria = {
  titular: "Eduardo Colindres",
  saldo: 1000,
};

function actualizarSaldo(monto) {
  this.saldo += monto;
}

let montoAgregar = 500;

actualizarSaldo.apply(cuentaBancaria, [montoAgregar]);

console.log(cuentaBancaria);
