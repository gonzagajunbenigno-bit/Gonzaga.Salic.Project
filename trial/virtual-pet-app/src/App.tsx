import React from 'react';
import PetCard from './components/PetCard';
import PetControls from './components/PetControls';
import usePet from './hooks/usePet';
import './styles/app.css';

const App: React.FC = () => {
    const { pet, feedPet, petPet } = usePet();

    return (
        <div className="app">
            <h1>Virtual Pet App</h1>
            <PetCard pet={pet} />
            <PetControls onFeed={feedPet} onPet={petPet} />
        </div>
    );
};

export default App;