import React from 'react';
import { v4 as uuidv4 } from 'uuid';
// import Header from '../components/Header';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

function Home() {
  const books = [
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      completed: Math.floor(Math.random() * 100),
    },
    {
      id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      completed: Math.floor(Math.random() * 100),
    },
    {
      id: uuidv4(),
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
      completed: Math.floor(Math.random() * 100),
    },
  ];
  return (
    <>
      {/* <Header /> */}
      <BookList books={books} />
      <AddBook />
    </>
  );
}

export default Home;
