import React from 'react';
import SearchBar from './SearchBar';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

export default App;
