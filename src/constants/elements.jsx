import { Circle, Square, HalfCircle, Triangle, Sparkle } from './components';
import guzoLogoImage from '../assets/GuzoLogo.png';
import financyImage from '../assets/Financy.png';
import cougarCSLogoImage from '../assets/CougarCS.svg';
import safeCoogsImage from '../assets/SafeCoogs.png';
import cougarMarketImage from '../assets/CougarMarket.png';
import virtualPetSimulatorImage from '../assets/VirtualPetSimulator.png';

export const guzoLogo = {
    element: guzoLogoImage,
    style: "flex justify-center py-10 w-full h-full overflow-hidden"
};

export const guzoElements = [
    {
        element: <Circle color="#FFE757" />,
        className: "absolute left-[5%] top-[42%]"
    },
    {
        element: <Square color="#4335EF" />,
        className: "absolute left-[20%] top-[55%] rotate-0"
    },
    {
        element: <HalfCircle color="#27E2D8" />,
        className: "absolute left-[9%] bottom-[20%] rotate-0"
    },
    {
        element: <Triangle color="#FF5A5A" />,
        className: "absolute left-[28%] bottom-[5%] rotate-180"
    },
    {
        element: <Circle color="#27E2D8" />,
        className: "absolute right-[5%] top-[44%]"
    },
    {
        element: <HalfCircle color="#FF5A5A" />,
        className: "absolute right-[23%] top-[56%] rotate-[310deg]"
    },
    {
        element: <Triangle color="#4335EF" />,
        className: "absolute right-[10%] bottom-[17%] rotate-0"
    },
    {
        element: <Square color="#FFE757" />,
        className: "absolute right-[30%] bottom-[1%] rotate-[39.11deg]"
    }
];

export const financyElement = {
    element: financyImage,
    style: "flex justify-center py-5 w-full h-full"
};

export const cougarCSLogo = {
    element: cougarCSLogoImage,
    style: "flex justify-center w-full h-full py-4 overflow-hidden"
};

export const cougarCSElements = [
    {
        element: <Sparkle size={26} />,
        className: "absolute left-[7%] top-[50%]"
    },
    {
        element: <Sparkle size={39} />,
        className: "hidden sm:block absolute left-[27%] top-[40%]"
    },
    {
        element: <Sparkle size={39} />,
        className: "absolute left-[15%] top-[65%]"
    },
    {
        element: <Sparkle size={39} />,
        className: "absolute left-[3%] bottom-[5%]"
    },
    {
        element: <Sparkle size={26} />,
        className: "absolute left-[30%] bottom-[3%]"
    },
    {
        element: <Sparkle size={26} />,
        className: "hidden sm:block absolute right-[28%] top-[45%]"
    },
    {
        element: <Sparkle size={39} />,
        className: "absolute right-[18%] bottom-[23%]"
    },
    {
        element: <Sparkle size={39} />,
        className: "absolute right-[10%] bottom-[2%]"
    },
    {
        element: <Sparkle size={24} />,
        className: "absolute right-[32%] bottom-[8%]"
    },
    {
        element: <Sparkle size={24} />,
        className: "absolute right-[5%] bottom-[40%]"
    }
];

export const safeCoogsElement = {
    element: safeCoogsImage,
    style: "flex justify-center items-center py-2 object-fit: fill"
};

export const cougarMarketElement = {
    element: cougarMarketImage,
    style: "flex justify-center align-center py-2"
};

export const virtualPetSimulator = {
    element: virtualPetSimulatorImage,
    style: "flex justify-center py-10"
};