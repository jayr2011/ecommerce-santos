import { createContext } from 'react';
import type { CartSliderContextType } from './types/cartSliderTypes';

export const SliderContext = createContext<CartSliderContextType>({} as CartSliderContextType);