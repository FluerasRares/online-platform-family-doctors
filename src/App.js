import React from 'react';
import './App.css';
import VideoChat from "./VideoChat";

const App = () => {
    return (
        <div className="app">
            <header>
                <h1>Medics Video Chat</h1>
            </header>
            <main>
                <VideoChat/>
            </main>
        </div>
    );
};

export default App;