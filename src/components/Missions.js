import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      {missions.map((mm) => (
        <MissionCard
          key={ mm.name }
          name={ mm.name }
          year={ mm.year }
          country={ mm.country }
          destination={ mm.destination }
        />
      ))}
    </div>
  );
}

export default Missions;
