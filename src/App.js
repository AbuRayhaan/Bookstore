import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Header from './components/Header';

const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route exact path="/" element={<Books />} />
        ;
        <Route path="/categories" element={<Categories />} />
        ;
      </Routes>
    </main>
  </>
);

export default App;
