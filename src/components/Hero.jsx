import { boxLinks } from "../constants/index";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <section id="Hero">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ amount: 0.5 }} className="flex-col items-center justify-center w-screen relative space-y-5 mt-24 sm:mt-48 px-[5%]">
                <h1 className="text-center text-white text-5xl md:text-7xl font-medium">
                    Full-stack Developer <br /> & UX/UI Designer
                </h1>
                <div className=" w-full flex justify-center">
                    <p className="text-center text-light-grey max-w-[34rem]">
                        <span className="text-white">Isaias Gonzalez</span> excels in solving problems, delivering quality user experiences, and driving creative design.
                    </p>
                </div>
                <ul className="flex justify-center space-x-5">
                    {boxLinks.map((item) => (
                        <motion.div key={item.id} initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                            <li className="inline-block w-12 h-12 bg-secondary rounded-lg relative group overflow-hidden">
                                <div className="absolute inset-0 border border-transparent group-hover:border-white rounded-lg pointer-events-none
                        "/>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <div className="flex justify-center items-center w-full h-full object-contain p-3">
                                        {item.logo}
                                    </div>
                                </a>
                            </li>
                        </motion.div>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
};

export default Hero;