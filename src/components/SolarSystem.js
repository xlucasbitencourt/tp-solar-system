import React from 'react';
import Title from './Title'; // requisito 4
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() { // requisito 2
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      <div className="planetas-container">
        {planets.map((pl) => ( // Pega cada componente do array planets, e chama pra cada um o PlanetCard
          <PlanetCard
            key={ pl.name }
            planetName={ pl.name }
            planetImage={ pl.image }
          />))}
      </div>
    </div>
  );
}

export default SolarSystem;
