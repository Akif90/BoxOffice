import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
// import { Link } from 'react-router-dom';

const Home = () => {
  const [input, setInput] = useState('');
  // console.log(input);
  const onInputChange = ev => {
    setInput(ev.target.value);
    // console.log(ev.target.value);
  };
  const onSearch = () => {
    // console.log(ev);
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(res => res.json())
      .then(res => console.log(res));
  };
  const onKeyDown = e => {
    if (e.keyCode === 13) onSearch();
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
    </MainPageLayout>
  );
};

export default Home;
