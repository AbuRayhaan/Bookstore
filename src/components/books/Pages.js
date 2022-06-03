import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Book from './Book';
import Categories from '../categories/Category.js';

const Pages = () => {
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Book />} />;
        <Route path ="/categories" element={<Categories />} />;
      </Routes>
    </BrowserRouter>
}

export default Pages;