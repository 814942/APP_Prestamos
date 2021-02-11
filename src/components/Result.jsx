import React from "react";

const Result = ({ total, cantidad, plazo }) => (
  <div className="u-full-width resultado">
    <h2>Resumendo</h2>
    <p>La cantidad solicitada es: $ {cantidad}</p>
    <p>A pagar en: {plazo} meses</p>
    <p>Su pago mensual es de: $ {(total / plazo).toFixed(2)}</p>
    <p>Total a pagar: $ {total.toFixed(2)}</p>
  </div>
);

export default Result;
