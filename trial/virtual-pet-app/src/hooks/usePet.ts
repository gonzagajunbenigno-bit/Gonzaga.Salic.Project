import { useState } from 'react';
import { Pet } from '../models/pet';

const usePet = () => {
    const [pet, setPet] = useState<Pet>({
        name: 'Fluffy',
        health: 100,
        happiness: 100,
    });

    const feedPet = () => {
        setPet(prevPet => ({
            ...prevPet,
            health: Math.min(prevPet.health + 10, 100),
            happiness: Math.min(prevPet.happiness + 5, 100),
        }));
    };

    const petPet = () => {
        setPet(prevPet => ({
            ...prevPet,
            happiness: Math.min(prevPet.happiness + 10, 100),
        }));
    };

    return {
        pet,
        feedPet,
        petPet,
    };
};

export default usePet;