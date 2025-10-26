import { render, screen, fireEvent } from '@testing-library/react';
import { PetProvider } from '../hooks/usePet';
import PetControls from '../components/PetControls';
import PetCard from '../components/PetCard';

describe('Pet functionality', () => {
    test('should increase happiness when petting the pet', () => {
        render(
            <PetProvider>
                <PetCard />
                <PetControls />
            </PetProvider>
        );

        const petButton = screen.getByText(/pet/i);
        fireEvent.click(petButton);

        const happinessDisplay = screen.getByText(/happiness/i);
        expect(happinessDisplay).toHaveTextContent('Happiness: 1'); // Assuming initial happiness is 0
    });

    test('should increase health when feeding the pet', () => {
        render(
            <PetProvider>
                <PetCard />
                <PetControls />
            </PetProvider>
        );

        const feedButton = screen.getByText(/feed/i);
        fireEvent.click(feedButton);

        const healthDisplay = screen.getByText(/health/i);
        expect(healthDisplay).toHaveTextContent('Health: 1'); // Assuming initial health is 0
    });
});