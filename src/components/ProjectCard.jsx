import PropTypes from 'prop-types';
import { motion } from "framer-motion";
const ProjectCard = ({ title, tags, description, buttonText, url, color, mainElement, otherElements }) => {
    return (
        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }} className="relative w-full h-[30rem]">
            <div className={`absolute inset-0 z-10`}>
                {otherElements && otherElements.map((element, index) => (
                    <div key={index} className={`scale-75 md:scale-100 ${element.className}`}>
                        {element.element}
                    </div>
                ))}
            </div>
            <div className={`bg-${color} p-7 w-full h-full shadow-md flex flex-col text-center relative overflow-hidden`}>
                <h2 className={`text-xl mb-2 ${(color === 'white') ? 'text-black' : 'text-white'}`}>{title}</h2>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-dark-grey px-3 py-1 rounded-full text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex justify-center">
                    <p className={`mb-2 max-w-2xl ${(color === 'white') ? 'text-black' : 'text-white'}`}>{description}</p>
                </div>
                <div className="flex justify-center z-20">
                    <a href={url} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 text-sm rounded-full border ${(color === 'white') ? 'text-dark-grey border-dark-grey' : 'text-light-grey border-light-grey'} ${buttonText === 'In Progress' || buttonText === 'Coming Soon' ? 'cursor-not-allowed pointer-events-none' : ''}`}>
                        {buttonText}
                    </a>
                </div>
                <div className={mainElement.style} >
                    <img src={mainElement.element} alt={title} />
                </div>
            </div>
        </motion.div>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    url: PropTypes.string,
    color: PropTypes.string.isRequired,
    mainElement: PropTypes.shape({
        element: PropTypes.string.isRequired,
        style: PropTypes.string.isRequired
    }).isRequired,
    otherElements: PropTypes.arrayOf(PropTypes.shape({
        element: PropTypes.element.isRequired,
        className: PropTypes.string.isRequired
    }))
};

export default ProjectCard;