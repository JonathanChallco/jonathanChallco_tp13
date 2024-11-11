// Array 
let operaciones = [5700, -18000, 44000, -5300, 15000];

function calculateBalances(operaciones) {
    let totalDepositos = 0;
    let totalRetiros = 0;

    operaciones.forEach(monto => {
        if (monto > 0) {
            totalDepositos += monto;
        } else {
            totalRetiros += monto;
        }
    });

    let saldoActual = totalDepositos + totalRetiros;
    return {
        totalDepositos,
        totalRetiros,
        saldoActual,
    };
}

// Balance de la cuenta Bancaria
function bankBalance(nombre, apellido, operaciones) {
    let { totalDepositos, totalRetiros, saldoActual } = calculateBalances(operaciones);
    return `Estimada/o ${nombre} ${apellido}:\nEl monto total de los depósitos es de: $${totalDepositos}.\nEl monto total de los retiros es de: $${totalRetiros}.\nPor lo tanto, su saldo actual en la cuenta es de: $${saldoActual}.`;
}


//console.log(bankBalance("Gloria", "Medina", operaciones));
//console.log(bankBalance("Jonathan", "Challco", operaciones));
console.log(bankBalance("Nadia", "Nina", operaciones));

module.exports = bankBalance;
