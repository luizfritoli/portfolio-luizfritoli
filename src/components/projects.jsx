import React from 'react'
import { motion } from 'framer-motion'
import pIcon from "../assets/pokedex-project.png"

const Projects = () => {
    return (
        <div>
            <section id='projects' className='h-screen w-full flex flex-col p-4 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200'>

                <motion.h2
                    className='text-stone-950 text-5xl self-center font-black'
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Projetos
                </motion.h2>

                <motion.div
                    className='flex items-center justify-center mt-6'
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className='bg-neutral-100 w-full sm:min-h-[150px] sm:min-w-[300px] md:max-w-[800px] md:min-h-[300px] h-auto p-4 rounded-lg flex items-center justify-center shadow-lg'>
                        <div className='flex gap-5'>
                            <a href="https://luizfritoli.github.io/pokedex-project" target="_blank" className='p-2 bg-violet-100 rounded sm:w-60 md:w-120 text-center text-2xl transition-transform duration-300 ease-in-out hover:scale-105 font-medium'>
                                Mini Pokédex<br />
                                <img src={pIcon} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default Projects
