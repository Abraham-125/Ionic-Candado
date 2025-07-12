import React from "react";

interface AcordeonProps {
  id: string; // id único para el acordeón
  titulo: string; // título del botón
  contenido: React.ReactNode; // contenido dentro del body
  isOpen?: boolean; // si parte abierto o no
}

const Acordeon: React.FC<AcordeonProps> = ({
  id,
  titulo,
  contenido,
  isOpen = false,
}) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded={isOpen}
          aria-controls={`collapse-${id}`}
        >
          {titulo}
        </button>
      </h2>
      <div
        id={`collapse-${id}`}
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        aria-labelledby={`heading-${id}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{contenido}</div>
      </div>
    </div>
  );
};

export default Acordeon;
