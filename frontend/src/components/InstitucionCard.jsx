import React from 'react';
import './InstitucionCard.css';

export const InstitucionCard = ({ institucion }) => {
  const { nombre, tipo, foto } = institucion;

  return (
    <div className="institucion-card">
      <div className="card-image-container">
        <img 
          src={`http://localhost:8000${foto}`} 
          alt={`Logo de ${nombre}`} 
          className="institucion-logo" 
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150?text=No+Image';
          }}
        />
      </div>
      <div className="card-content">
        <h3 className="institucion-name">{nombre}</h3>
        <div className="institucion-type">
          <span className="type-label">Tipo:</span>
          <span className="type-value">{tipo}</span>
        </div>
      </div>
    </div>
  );
};
