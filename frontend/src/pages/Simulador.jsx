import { useState, useEffect } from "react";
import Input from '../components/InputComponent';
import axios from 'axios';
import ProductoCard from '../components/ProductoCard';
import './Simulador.css'; // Importa el CSS aquí

export const Simulador = () => {
  const [productos, setProductos] = useState([]);
  const [monto, setMonto] = useState(10000);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    axios
      .get(`http://localhost:8000/api/productos/?monto=${monto}`)
      .then((res) => {
        setProductos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Error al cargar los productos");
        setLoading(false);
      });
  }, [monto]);

  return (
    <div className="simulador-container">
      <h1 className="simulador-title">Simulador de Inversión</h1>
      <p className="simulador-description">
        Compara diferentes opciones de inversión según el monto que deseas invertir
      </p>
      
      <div className="simulador-input-container">
        <label className="simulador-input-label">Monto a invertir:</label>
        <Input 
          value={monto} 
          onChange={(e) => setMonto(Number(e.target.value)||0)}
          className="simulador-input"
        />
      </div>

      {loading && <div className="loading">Cargando productos...</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="productos-container">
        {productos.map((producto, index) => (
          <ProductoCard key={index} producto={producto} />
        ))}
      </div>
    </div>
  );
};
