import React from 'react';
import Header from '../components/Header';
import '../scss/Categories.scss';

function Categories() {
  const handleClick = () => {
    alert('Page Under Construction');
  };

  return (
    <>
      <Header />
      <div className="container">
        <button type="button" className="statusBtn" onClick={handleClick}>
          Check status
        </button>
      </div>
    </>
  );
}

export default Categories;
