import React from 'react';
import './ProductoCard.css'; 

const ProductoCard = ({ producto }) => {
  const { institucion, nombre_producto, plazo_dias, tea, monto_invertido, interes, total_recibido } = producto;

  return (
    <tr className="card">
      <td><img src={`http://localhost:8000${producto.institucion.foto}`} alt={producto.institucion.nombre} className="logo" /></td>
      <td><h2>{institucion.nombre}</h2></td>
      <td><p><strong>{nombre_producto}</strong></p></td>
      <td><p>Plazo: {plazo_dias} días</p></td>
      <td><p>TEA: {tea}%</p></td>   
      <td><p>Monto Invertido: ${monto_invertido}</p></td>
      <td><p>Interés ganado: <span className="interes">${interes}</span></p></td>
      <td><p>Total a recibir: <span className="total">${total_recibido}</span></p></td>     
    </tr>
  );
};

export default ProductoCard;
