import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
// import { Link } from 'react-router-dom';
import { apiCAll } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  // console.log(input);
  const onInputChange = ev => {
    setInput(ev.target.value);
    // console.log(ev.target.value);
  };
  const onSearch = () => {
    // console.log(ev);
    apiCAll(`shows?q=${input}`).then(response => {
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
      return (
        <ul>
          {results.map(movie => {
            return <li key={movie.show.id}>{movie.show.name}</li>;
          })}
        </ul>
      );
    }
    return null;
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        value={input}
        onKeyDown={onKeyDown}
        onChange={onInputChange}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
