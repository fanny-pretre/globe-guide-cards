import React, { useState } from "react";

function Card({ destinations }) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <img
            src={destinations.Src}
            alt={destinations.Name}
            className="card__image"
          />
        </div>
        <div className="card__body">
          <span className="tag tag-blue">{destinations.Label}</span>
          <h4>Visitez {destinations.Name} !</h4>
          <p>{destinations.Text}</p>
          <div className="button-wrapper">
            <a className="button" onClick={() => toggleModal(true)}>
              En savoir plus
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="button-svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
        {modalOpen && (
          <div className="modal">
            <div className="overlay" onClick={() => toggleModal(false)}>
              <div className="modal-content">
                <div className="details">
                  <div className="modal-header">
                    <button onClick={() => toggleModal(false)}> X </button>
                    <h2> Visitez {destinations.Name}</h2>
                  </div>
                  <div className="modal-text"> {destinations.Text}</div>
                  <h3> Météo</h3>
                  <div className="meteo">
                    <img
                      className="meteo-icon"
                      src="https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-3-2682848_90785.png"
                      alt="météo"
                    />
                    <p> 16 °C°F </p>
                    <div className="meteo-text">
                      <p> Précipitations : 0% </p>
                      <p> Humidité : 44%</p>
                      <p> Vent : 10 km/h</p>
                    </div>
                  </div>
                  <div className="converter">
                    <h3> Convertisseur de devises</h3>
                    <label> Monnaie 1 </label>
                    <input></input>
                    <label> Monnaie 2 </label>
                    <input></input>
                    <div className="converter-result">
                      <label> Result </label>
                      <br></br>
                      <input></input>
                    </div>
                  </div>
                  <div className="holidays">
                    <h3> Jours fériés</h3>
                    <p> 5 FÉV 2024 - Día de la Constitución Mexicana </p>
                    <p> 18 MAR 2024 Natalicio de Benito Juárez</p>
                  </div>
                  <div className="modal-bottom">
                    <div className="tags">
                      <span className="tag tag-blue">{destinations.Label}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
