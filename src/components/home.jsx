import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import luizImage from "../assets/luizfritoli-image.png";
import githubIcon from "../assets/github.png";
import instagramIcon from "../assets/instagram.png";

const Home = () => {
    return (
        <section
            id="home"
            className="scroll-smooth h-screen w-full bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 flex items-center"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl mx-auto px-6 gap-6 items-center">

                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={luizImage}
                        alt="Luiz Fritoli"
                        className="rounded-full w-64 h-64 object-cover shadow-lg"
                    />
                </motion.div>

                <motion.div
                    className="flex flex-col items-start gap-6 text-stone-950"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="font-mono text-3xl">
                        Olá!<br />Eu sou o Luiz Fritoli!
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="https://github.com/luizfritoli"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={githubIcon}
                                alt="GitHub"
                                className="h-12 w-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </a>
                        <a
                            href="https://instagram.com/luizgbarros"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={instagramIcon}
                                alt="Instagram"
                                className="h-12 w-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </a>
                    </div>

                    <a
                        href="#about"
                        className="flex items-center gap-2 text-stone-950 hover:underline underline-offset-4"
                    >
                        <ArrowDown className="animate-bounce" />
                        Rolar para baixo
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
