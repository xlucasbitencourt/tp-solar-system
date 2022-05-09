import React from 'react';
import PropTypes from 'prop-types';

function MissionCard({ name, year, country, destination }) {
  return (
    <div data-testid="mission-card">
      <p data-testid="mission-name">{name}</p>
      <p data-testid="mission-year">{year}</p>
      <p data-testid="mission-country">{country}</p>
      <p data-testid="mission-destination">{destination}</p>
    </div>
  );
}

MissionCard.propTypes = { // essa declaração que não entendi muito bem porque, e a trybe não explicou direito
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
