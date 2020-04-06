"use strict";

// variable que indica la cantidad de la actual moneda
let ammount = prompt(`Please , select your current ammount currency : `);

// funcion async await para obtener rates de las divisas
async function getCurrencyRates() {
   const textData = await fetch (`https://api.exchangerate-api.com/v4/latest/euro`);
   const jsonData = await textData.json()
      return jsonData.rates; 
}
// impresion y resultados de las conversiones
getCurrencyRates()
.then (rates  => console.log(
   `${ammount} € son `, 
   // euro a peso colombiano
   (ammount * rates.COP).toFixed(2), '$ pesos colombianos, ',
   // euro a yen
   (ammount * rates.JPY).toFixed(2), '¥ yenes japoneses, ',
   // euro a dolar
   (ammount * rates.USD).toFixed(2), '$ dolares americanos, ',
   // euro a libras esterlinas
   (ammount * rates.GBP).toFixed(2), '£ libras esterlinas, '
));
