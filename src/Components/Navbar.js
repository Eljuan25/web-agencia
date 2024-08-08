import React from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css'; 
import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5'; 

const Navbar = () => {
    const [navBarOpen, setNavbarOpen] = useState(false);

    const links = [
        { id: 1, link: "Home" },
        { id: 2, link: "Services" },
        { id: 3, link: "HowWeWork" },
        { id: 4, link: "Benefits" },
    ];

    return (
        <div className={styles.Navbar}>
            <p>Digital Solution</p>
            {navBarOpen ? (
                <IoClose 
                    className={styles.closeIcon}
                    onClick={() => setNavbarOpen(false)} 
                />
            ) : (
                <CiMenuBurger 
                    className={styles.menuIcon}
                    onClick={() => setNavbarOpen(true)} 
                />
            )}
            {navBarOpen && (
                <div className={styles.menu}>
                    <ul className={styles.navLinks}>
                        {links.map(x => (
                            <li key={x.id}>
                                <Link 
                                    to={x.link} 
                                    smooth={true} 
                                    duration={500}
                                    className={styles.navLink}
                                    activeClass={styles.active}
                                >
                                    {x.link === "HowWeWork" ? "How we work" : x.link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
