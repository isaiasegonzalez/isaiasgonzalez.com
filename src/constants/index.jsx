import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub, IoIosDocument } from "react-icons/io";
import { guzoLogo, guzoElements, financyElement, cougarCSLogo, cougarCSElements, safeCoogsElement, cougarMarketElement, virtualPetSimulator } from "../constants/elements";
import guzoIcon from '../assets/GuzoIcon.png';
import cougarCSIcon from '../assets/CougarCSIcon.png';
import codeNinjasIcon from '../assets/CodeNinjasIcon.png';

export const navigation = [
    {
        id: "0",
        title: "About",
    },
    {
        id: "1",
        title: "Experience",
    },
    {
        id: "2",
        title: "Work",
    }
];

export const boxLinks = [
    {
        id: "0",
        title: "GitHub",
        logo: <IoLogoGithub size={24} />,
        url: "https://github.com/isaiasegonzalez"
    },
    {
        id: "1",
        title: "LinkedIn",
        logo: <FaLinkedinIn size={24} />,
        url: "https://linkedin.com/in/isaiasegonzalez/"
    },
    {
        id: "2",
        title: "Resume",
        logo: <IoIosDocument size={24} />,
        url: "/Isaias_Gonzalez_Resume.pdf"
    }
];

export const experiences = [
    {
        id: "0",
        title: "Software Engineer Intern",
        company: "Guzo",
        logo: guzoIcon,
        date: "May 2024 - Present",
    },
    {
        id: "1",
        title: "Design Officer",
        company: "CougarCS",
        logo: cougarCSIcon,
        date: "January 2024 - Present",
    },
    {
        id: "2",
        title: "Coding Instructor",
        company: "Code Ninjas",
        logo: codeNinjasIcon,
        date: "May 2023 - January 2024",
    }
];

export const projects = [
    {
        id: "0",
        title: "Guzo",
        tags: ["React", "Python", "Firebase", "FastAPI", "Figma"],
        description: "Building an AI-powered platform that generates personalized roadmaps to help users achieve their goals.",
        buttonText: "View Website",
        url: "https://guzo.io/",
        color: "white",
        mainElement: guzoLogo,
        otherElements: guzoElements
    },
    {
        id: "1",
        title: "Financy",
        tags: ["React", "MongoDB", "Express.js", "Node.js", "Figma"],
        description: "A full-stack application that provides users with detailed financial metrics based on their income and expense inputs.",
        buttonText: "GitHub",
        url: "https://github.com/helloworldmynameisnancy/Personal-Finance-Dashboard",
        color: "secondary",
        mainElement: financyElement
    },
    {
        id: "2",
        title: "CougarCS",
        tags: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects"],
        description: "Creating visually appealing designs for the largest computer science organization at the University of Houston.",
        buttonText: "View Instagram",
        url: "https://www.instagram.com/cougarcs_uh",
        color: "white",
        mainElement: cougarCSLogo,
        otherElements: cougarCSElements
    },
    {
        id: "3",
        title: "SafeCoogs",
        tags: ["Figma", "Adobe Illustrator"],
        description: "A conceptual mobile app empowering University of Houston students to coordinate group walks, enhancing campus safety during late hours.",
        buttonText: "In Progress",
        color: "secondary",
        mainElement: safeCoogsElement
    },
    {
        id: "4",
        title: "CougarMarket",
        tags: ["Figma", "Adobe Illustrator"],
        description: "A student-oriented marketplace app developed for Case Quest 2023, enabling CougarCS and MISSO members to exchange diverse services. Features a functional prototype, system design, and user app flow.",
        buttonText: "View Figma",
        url: "https://figma.com/design/BmHLfIX0M8b1Hm4RXLtQlT/Case-Quest-2023-Midnight-Coders?node-id=133-133&t=gbT6RFfLgzBflWOV-1",
        color: "white",
        mainElement: cougarMarketElement
    },
    {
        id: "5",
        title: "Virtual Pet Simulator",
        tags: ["C++"],
        description: "A Tamagotchi-style game using object-oriented programming enabling players to interact with their pet and maintain its status metrics.",
        buttonText: "GitHub",
        url: "https://github.com/isaiasegonzalez/Final-Project-Tamagotchi-Pet-Game",
        color: "secondary",
        mainElement: virtualPetSimulator
    }
];

export const footerPages = [
    {
        id: "0",
        title: "About",
        url: "/about"
    },
    {
        id: "1",
        title: "Experience",
        url: "/experience"
    },
    {
        id: "2",
        title: "Work",
        url: "/work"
    },
    {
        id: "3",
        title: "Contact",
        url: "/contact"
    }
];

export const footerConnect = [
    {
        id: "0",
        title: "GitHub",
        url: "https://github.com/isaiasegonzalez"
    },
    {
        id: "1",
        title: "LinkedIn",
        url: "https://linkedin.com/in/isaiasegonzalez/"
    },
    {
        id: "2",
        title: "Resume",
        url: "/Isaias_Gonzalez_Resume.pdf"
    },
    {
        id: "3",
        title: "Email",
        url: "mailto:xisaiasgonzalez@gmail.com"
    }
];