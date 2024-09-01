import React, { useEffect, useState } from 'react';
import { api } from '../../utils';
import './PhDataDisplay.css';

const PhDataDisplay = () => {
  // Definimos el estado inicial de phData como un arreglo vacío
  const [phData, setPhData] = useState([]);

  // useEffect se utiliza para realizar efectos secundarios en componentes funcionales
  useEffect(() => {
    // Definimos una función asincrónica fetchData para obtener los datos de pH
    const fetchData = async () => {
      try {
        // Realizamos una petición GET a la API para obtener los datos de pH
        const response = await api.get('/ph');
        // Actualizamos el estado de phData con los datos obtenidos de la respuesta
        setPhData(response.data);
      } catch (error) {
        // En caso de error, mostramos un mensaje de error en la consola
        console.error('Error al obtener los datos de pH:', error);
      }
    };

    // Llamamos a la función fetchData al cargar el componente
    fetchData();
  }, []);

  // Renderizamos el componente
  return (
    <div className="ph-container">
      <h1 className="ph-title">Datos de pH</h1>
      <ul className="ph-list">
        {/* Iteramos sobre los datos de pH y generamos una lista */}
        {phData.map((data) => (
          <li key={data._id} className="ph-list-item">
            {/* Mostramos el valor y la fecha de cada dato */}
            <span className="ph-value">Valor: {data.value}</span>
            <span className="ph-timestamp">Fecha: {new Date(data.timestamp).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhDataDisplay;