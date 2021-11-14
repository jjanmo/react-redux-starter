import React from 'react';
import { BookList } from './components/bookList';
import { BookDetail } from './components/bookDetail';
import './App.css';

function App() {
  return (
    <div className="app">
      <BookList />
      <BookDetail />
    </div>
  );
}

export default App;
