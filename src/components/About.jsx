import { motion } from "framer-motion";
import headshot from "../assets/Headshot.jpg";

const About = () => {
    return (
        <section id="About">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ amount: 0.2 }} className="flex flex-col items-center justify-center px-4">
                <p className="text-light-grey text-center">ABOUT ME</p>
                <p className="font-medium text-3xl text-center">My Professional Journey</p>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full pt-10 max-w-7xl gap-8">
                    <div className="flex items-center">
                        <img src={headshot} alt="Headshot" />
                    </div>
                    <div className="flex flex-col justify-center text-left">
                        <h1 className="text-3xl  font-medium mb-5">Hello, I&apos;m Isaias!</h1>
                        <p className="text-base text-light-grey mb-5">I’m a Junior studying Computer Science and minoring in Management Information Systems at the University of Houston. As a first-generation college student, I’ve learned to navigate the complexities of college and career opportunities independently. It’s been quite a journey, but it’s taught me to be more resilient and self-reliant.</p>
                        <p className="text-base text-light-grey mb-5">Despite these challenges, I’ve secured a Software Engineer Intern position at Guzo, where I contribute to building an AI-powered platform using technologies like React, Python, FastAPI, and Firebase. Additionally, I serve as a Design Officer for CougarCS, the largest Computer Science organization on campus, where I create engaging promotional content using Figma and Adobe Creative Cloud applications. I also previously worked as a Coding Instructor at Code Ninjas, where I taught and organized several summer camps for over 80 students.</p>
                        <p className="text-base text-light-grey">These experiences have fueled my passion for technology, problem-solving, and leadership. I’ve learned to thrive in challenging environments and am determined to ensure my work delivers the best results possible.</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;