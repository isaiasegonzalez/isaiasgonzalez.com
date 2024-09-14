import { IGLogo } from '../constants/components';
import { navigation } from '../constants/index';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Link } from 'react-scroll'
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed t-0 z-40 w-full bg-secondary">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
                <div className="w-1/2">
                    <Bars3Icon className="flex justify-start h-6 w-6 md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                    <ul className="hidden md:flex justify-start gap-10">
                        {navigation.map((item) => (
                            <li key={item.id}>
                                <Link
                                    className="text-light-grey hover:text-white cursor-pointer"
                                    to={item.title}
                                    smooth={true}
                                    duration={1000}
                                    offset={-80}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center">
                    <Link
                        className="cursor-pointer"
                        to="Hero"
                        smooth={true}
                        duration={1000}
                        offset={-75}
                    >
                        <IGLogo />
                    </Link>
                </div>
                <div className="flex justify-end w-1/2">
                    <a
                        href="mailto:xisaiasgonzalez@gmail.com"
                        className="bg-white rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-300 transition-colors duration-300"
                    >
                        Contact
                    </a>
                </div>
            </div>
            {
                isMobileMenuOpen && (
                    <div className="md:hidden bg-secondary">
                        <ul className="px-6 py-3">
                            {navigation.map((item) => (
                                <li key={item.id} className="py-3">
                                    <Link
                                        className="text-light-grey hover:text-white cursor-pointer"
                                        to={item.title}
                                        smooth={true}
                                        duration={1000}
                                        offset={-75}
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div >
                )}
        </nav >
    );
};

export default Navbar;