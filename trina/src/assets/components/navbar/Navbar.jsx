import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faShop } from '@fortawesome/free-solid-svg-icons/faShop';



const Header = () => {
    // Header Sticky scroll;
    const [color, setColor] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 65) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <header className={`${color ? 'header header-bg' : 'header'} z-20`}>
                <div className="flex justify-between w-10/12 items-center">
                    <a className='text-xl text-red-800' href="/">Trina .</a>

                    <div className="flex items-center gap-4 lg:hidden">
                        <a className='nav-icons' href="/search"><FontAwesomeIcon icon={faSearch} /></a>
                        <a className='nav-icons' href="/shop"><FontAwesomeIcon icon={faShop} /></a>
                        <button className="text-xl" onClick={toggleMenu}>
                            {menuOpen ? '✖' : '☰'}
                        </button>
                    </div>

                    <nav className="hidden lg:flex gap-4">
                        <a className="nav-links" href="/">Home</a>
                        <a className="nav-links" href="/">Produtos</a>
                        <a className="nav-links" href="/">Sobre nós</a>
                        <a className="nav-links" href="/">Nosso-aplicativo</a>
                    </nav>

                    <div className="hidden lg:flex items-center gap-7">
                        <a className='nav-icons' href="/search"><FontAwesomeIcon icon={faSearch} /></a>

                        <div className="nav-search-icon">
                        <a className='nav-icons' href="/shop"><FontAwesomeIcon icon={faShop} /></a>
                        <div className="dot"></div>
                        </div>
                        <a className='nav-btn' href="/Login">Login</a>
                    </div>
                    
                </div>
            </header>

            {menuOpen && (
                <div className="fixed top-0 right-0 h-auto w-64 bg-white shadow-md flex flex-col gap-4 p-4 lg:hidden z-30">
                    <button className="absolute top-4 right-4 text-xl" onClick={toggleMenu}>
                        ✖
                    </button>
                    <nav className="flex flex-col gap-4 mt-12">
                        <a className="nav-links" href="/">Home</a>
                        <a className="nav-links" href="/">Produtos</a>
                        <a className="nav-links" href="/">Sobre nós</a>
                        <a className="nav-links" href="/">Nosso-aplicativo</a>
                    </nav>

                    <div className="flex flex-col items-start gap-4 mt-auto mb-4">
                        <a className='nav-btn' href="/Login">Login</a>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;