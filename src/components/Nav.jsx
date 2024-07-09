import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import { motion } from "framer-motion";


const Nav = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    // Animation affichage Menu Mobile (framer-motion)
    const menuVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        },
        closed: {
            opacity: 0,
            y: '-200%',
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    };

    return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="max-container flex justify-between items-center">
            <a href="/">
                <img
                    src={headerLogo}
                    alt="Logo"
                    width={130}
                    height={29}
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="font-montserrat leading-normal text-lg text-slate-gray"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Hamburger */}
            <div className="hidden max-lg:block relative ">
                <button
                    type="button"
                    onClick={toggleHamburger}
                >
                    <img src={hamburger} alt="Hamburger" width={25} height={25}/>
                </button>
            </div>

            <motion.div
                className="absolute right-1 bg-white shadow-lg rounded-lg ring-1 ring-slate-900/5 p-4 w-full max-w-sm top-16"
                initial="closed"
                animate={hamburgerOpen ? 'open' : 'closed'}
                variants={menuVariants}
            >
                <ul>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>

        </nav>
    </header>
    )
}

export default Nav