import React from 'react';
import { Pet } from '../models/pet';

interface PetCardProps {
    pet: Pet;
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
    return (
        <div className="pet-card">
            <h2>{pet.name}</h2>
            <p>Health: {pet.health}</p>
            <p>Happiness: {pet.happiness}</p>
        </div>
    );
};

export default PetCard;