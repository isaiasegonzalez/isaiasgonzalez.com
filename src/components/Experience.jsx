import { experiences } from "../constants/index";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <section id="Experience">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ amount: 0.6 }} className="flex flex-col items-center justify-center px-4">
                <p className="text-light-grey">EXPERIENCE</p>
                <p className="font-weight-500 text-3xl font-medium text-center">Career and Leadership Roles</p>
                <div className="py-10 space-y-10">
                    {experiences.map((item) => {
                        return (
                            <div key={item.id} className="flex flex-row items-center">
                                <div className="w-16 h-16 flex-shrink-0">
                                    <img src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col text-left flex-grow ml-5">
                                    <p className="text-lg">{item.title}</p>
                                    <p className="text-light-grey">{item.company}</p>
                                </div>
                                <div className="ml-20 text-right">
                                    <p className="text-light-grey">{item.date}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;