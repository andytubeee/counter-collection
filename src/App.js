import React from 'react';
import logo from './logo.svg';
import './App.css';
// Components import

import Counter from './components/counter';
import CounterList from './components/counterList';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="m-3">
            <Navbar />
            <CounterList />
        </div>
    );
}

export default App;
