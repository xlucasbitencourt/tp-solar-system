import React from 'react';
import PropTypes from 'prop-types';

function PlanetCard({ planetName, planetImage }) {
  return (
    <div data-testid="planet-card">
      <p className="nome-planeta" data-testid="planet-name">{ planetName }</p>
      <img className="img-planeta" src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}

PlanetCard.propTypes = { // essa declaração que não entendi muito bem porque, e a trybe não explicou direito
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
