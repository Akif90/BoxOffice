import React, { useState } from 'react';
import ActorGrid from '../components/actors/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/shows/ShowGrid';
// import { Link } from 'react-router-dom';
import { apiCAll } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';

const Home = () => {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [query, setQuery] = useState('search/people?q');

  const isShowsSearch = query === 'search/shows?q';

  const onInputChange = ev => {
    setInput(ev.target.value);
    // console.log(ev.target.value);
  };
  const onSearch = () => {
    // console.log(ev);
    apiCAll(`${query}=${input}`).then(response => {
      const res = response;
      setResults(res);
      // console.log(res);
    });
  };
  const onKeyDown = e => {
    if (e.keyCode === 13) onSearch();
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>Not Found</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };
  const onRadioClicked = e => {
    if (e.target.id === 'actors') setQuery('search/people?q');
    else setQuery('search/shows?q');
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        value={input}
        placeholder="Search for something"
        onKeyDown={onKeyDown}
        onChange={onInputChange}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      <div>
        <label htmlFor="actors">
          Actors
          <input
            id="actors"
            type="radio"
            onChange={onRadioClicked}
            checked={!isShowsSearch}
            value="people"
          />
        </label>
        <label htmlFor="shows">
          Shows
          <input
            id="shows"
            checked={isShowsSearch}
            value="shows"
            type="radio"
            onChange={onRadioClicked}
          />
        </label>
      </div>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
