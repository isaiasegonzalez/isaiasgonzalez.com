import { IGLogo } from '../constants/components';
import { footerConnect } from '../constants/index';
import { Link } from 'react-scroll'

const Footer = () => {
    const handleLogoClick = (e) => {
        e.preventDefault();
        const element = document.getElementById('hero');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - 80;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            window.history.pushState(null, '', '/');
        }
    };
    return (
        <div className="bg-secondary">
            <div className="flex flex-col md:flex-row items-center px-6 py-8 w-full max-w-7xl mx-auto">
                <div className="hidden md:flex w-full md:w-1/2 justify-start mb-4 md:mb-0">
                    <Link
                        className="cursor-pointer"
                        to="Hero"
                        smooth={true}
                        duration={1000}
                        offset={-80}
                    >
                        <IGLogo />
                    </Link>
                </div>
                <div className="w-full flex flex-wrap items-center justify-center mb-4 md:mb-0">
                    {footerConnect.map((item, index) => (
                        <div key={item.id} className="flex items-center">
                            <a
                                className="text-light-grey hover:text-white mx-3" target="_blank" rel="noopener noreferrer"
                                href={item.url}
                            >
                                {item.title}
                            </a>
                            {index < footerConnect.length - 1 && (
                                <div className="h-4 w-px bg-light-grey mx-1"></div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start text-left sm:text-right text-sm text-light-grey mb-4 md:mb-0">
                    <p>© 2024 Isaias Gonzalez. All Rights Reserved.</p>
                </div>
                <div className="md:hidden w-full md:w-1/4 flex justify-center">
                    <a
                        href="/"
                        onClick={(e) => handleLogoClick(e)}
                    >
                        <IGLogo />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;