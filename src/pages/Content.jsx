import React, { useEffect, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/shows/ShowGrid';
import { apiCAll } from '../misc/config';
import { useShows } from '../misc/custom-hooks';

const Content = () => {
  const [starredShows] = useShows();
  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (starredShows && starredShows.length > 0) {
      const promises = starredShows.map(showId => apiCAll(`shows/${showId}`));
      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(res => {
          setShows(res);
          setIsLoading(false);
        })
        .catch(er => {
          setError(er.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starredShows]);
  return (
    <MainPageLayout>
      {isLoading && <div>Shows are loading</div>}
      {error && <div>Error</div>} {!isLoading && !shows && <div>No shows </div>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
};

export default Content;
