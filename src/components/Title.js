import React from 'react';
import PropTypes from 'prop-types';

function Title({ headline }) { // requisito 3 - tem que colocar dentro de parenteses, e dentro de chaves
  return (
    <h2>{ headline }</h2> // ao chamar, fazer dentro de chaves
  );
}

Title.propTypes = { // essa declaração que não entendi muito bem porque, e a trybe não explicou direito
  headline: PropTypes.string.isRequired,
};

export default Title;
