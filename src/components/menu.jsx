import React, { useState } from "react";

const Menu = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <div className="text-zinc-50">
            <nav className="flex justify-between items-center fixed w-full h-20 bg-gray-950 px-5 z-50">
                <a href="#home" className="no-underline hover:underline underline-offset-4 transition duration-300">
                    Início
                </a>

                <button
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="lg:hidden focus:outline-none"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <ul className="hidden lg:flex gap-6">
                    <li><a href="#about" className="hover:underline underline-offset-4 transition duration-300">Sobre mim</a></li>
                    <li><a href="#skillsets" className="hover:underline underline-offset-4 transition duration-300">Habilidades</a></li>
                    <li><a href="#projects" className="hover:underline underline-offset-4 transition duration-300">Projetos</a></li>
                </ul>
            </nav>
            {menuAberto && (
                <div className="lg:hidden absolute fixed top-20 left-0 w-full bg-gray-950 flex flex-col items-start gap-4 px-5 py-4 z-40">
                    <a href="#about" className="hover:underline underline-offset-4">Sobre mim</a>
                    <a href="#skillsets" className="hover:underline underline-offset-4">Habilidades</a>
                    <a href="#projects" className="hover:underline underline-offset-4">Projetos</a>
                </div>
            )}
        </div>
    );
};

export default Menu;
