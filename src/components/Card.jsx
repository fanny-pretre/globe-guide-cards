import React, { useState } from "react";

function Card({ destinations }) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const modalStyle = {
    position: "relative",
    borderRadius: "10px",
    overflow: "scroll",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${destinations.Src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    opacity: 0.2,
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
          <div className="overlay">
            <div style={overlayStyle}></div>
            <div className="modal" style={modalStyle}>
              <div className="modal-content">
                <div className="details">
                  <div className="modal-header">
                    <svg
                      onClick={() => toggleModal(false)}
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
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                    <h2>Visitez {destinations.Name} ! </h2>
                  </div>
                  <div className="modal-text">{destinations.Text}</div>
                  <h3>Météo</h3>
                  <div className="meteo">
                    <img
                      className="meteo-icon"
                      src="https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-3-2682848_90785.png"
                      alt="météo"
                    />
                    <p>16 °C°F</p>
                    <div className="meteo-text">
                      <p>Précipitations : 0%</p>
                      <p>Humidité : 44%</p>
                      <p>Vent : 10 km/h</p>
                    </div>
                  </div>
                  <div className="converter">
                    <h3>Convertisseur de devises</h3>
                    <div className="converter-input">
                      <label>Monnaie 1 </label>
                      <input></input>
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
                          d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                        />
                      </svg>

                      <label>Monnaie 2 </label>
                      <input></input>
                    </div>
                    <div className="converter-result">
                      <label>Result </label>
                      <br></br>
                      <input></input>
                    </div>
                  </div>
                  <div className="holidays">
                    <h3>Jours fériés</h3>
                    <p>5 FÉV 2024 - Día de la Constitución Mexicana </p>
                    <p>18 MAR 2024 Natalicio de Benito Juárez</p>
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
