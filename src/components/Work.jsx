import ProjectCard from "./ProjectCard";
import { projects } from "../constants/index";
import { motion } from "framer-motion";
const Work = () => {
    return (
        <section id="Work">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ amount: 0.15 }} className="flex flex-col items-center justify-center px-4">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-light-grey">WORK</p>
                    <p className="font-weight-500 text-3xl text-center font-medium">Highlights from My Portfolio</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10">
                    {projects.map((item) => {
                        return (
                            <ProjectCard
                                key={item.id}
                                title={item.title}
                                tags={item.tags}
                                description={item.description}
                                buttonText={item.buttonText}
                                url={item.url}
                                color={item.color}
                                mainElement={item.mainElement}
                                otherElements={item.otherElements}
                            />
                        );
                    })}
                </div>
            </motion.div >
        </section >
    );
};

export default Work;