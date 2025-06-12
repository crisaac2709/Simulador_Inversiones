import { useEffect, useState } from "react";
import axios from "axios";
import { InstitucionCard } from "../components/InstitucionCard";
import "./Instituciones.css";
import {Formulario} from "../components/Formulario"

export const Instituciones = () => {
    const [instituciones, setInstituciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        axios
            .get(`http://127.0.0.1:8000/api/instituciones`)
            .then((response) => {
                setInstituciones(response.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setError("Error al cargar las instituciones")
                setLoading(false)
            });
    }, []);

    return (
        <div className="instituciones-page">
            <div className="instituciones-header">
                <h1 className="instituciones-title">Instituciones Financieras</h1>
                <p className="instituciones-subtitle">Descubre las instituciones registradas en nuestra plataforma de simulacion</p>
            </div>

            {loading && (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Cargando instituciones...</p>
                </div>
            )}

            {error && (
                <div className="error-container">
                    <p className="error-message">{error}</p>
                </div>
            )}

            <div className="instituciones-grid">
                {instituciones.map((institucion, index) => (
                    <InstitucionCard key={index} institucion={institucion} />
                ))}
            </div>

            
        </div>
    );
};
