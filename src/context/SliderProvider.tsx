import React, { useState } from 'react';
import { SliderContext } from './SliderContext';
import type { CartSliderProviderProps } from './types/cartSliderTypes';

export const SliderProvider: React.FC<CartSliderProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <SliderContext.Provider value={{ toggleOpen: isOpen, toggleSlider: setIsOpen }}>
            {children}
        </SliderContext.Provider>
    );
};