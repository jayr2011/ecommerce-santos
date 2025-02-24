import type { ReactNode } from 'react';

/**
 * Type definition for the Cart Slider context
 */
export interface CartSliderContextType {
    toggleOpen: boolean;
    toggleSlider: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Props interface for the CartSlider Provider component
 */
export interface CartSliderProviderProps {
    children: ReactNode;
}