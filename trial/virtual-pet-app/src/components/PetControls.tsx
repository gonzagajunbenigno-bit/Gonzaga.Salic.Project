import React from 'react';

interface PetControlsProps {
    onPet: () => void;
    onFeed: () => void;
}

const PetControls: React.FC<PetControlsProps> = ({ onPet, onFeed }) => {
    return (
        <div className="pet-controls">
            <button onClick={onPet}>Pet</button>
            <button onClick={onFeed}>Feed</button>
        </div>
    );
};

export default PetControls;