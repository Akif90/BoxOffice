import React from 'react';
import ActorCard from './ActorCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => {
        return (
          <ActorCard
            key={person.id}
            name={person.name}
            country={person.country ? person.country.name : null}
            birthday={person.birthday}
            gender={person.gender}
            image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
            deathday={person.deathday}
          />
        );
      })}
    </div>
  );
};

export default ActorGrid;
