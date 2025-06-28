import React from 'react'
import { motion } from 'framer-motion'
import pIcon from "../assets/pokedex-project.png"
import hIcon from "../assets/habitflow.png"

const Projects = () => {
    return (
        <div>
            <section id='projects' className='min-h-screen h-auto w-full flex
            flex-col p-4 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200'>

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
                    <div className='bg-neutral-100 w-full sm:min-h-[150px]
                    sm:min-w-[300px] md:max-w-[800px] md:min-h-[300px]
                    h-auto p-4 rounded-lg flex flex-col items-center
                    justify-center shadow-lg gap-y-4'>
                        <div className='flex gap-5'>
                            <a href="https://luizfritoli.github.io/pokedex-project" target="_blank" className='p-2 bg-violet-100 rounded sm:w-60 md:w-120 text-center text-2xl transition-transform duration-300 ease-in-out hover:scale-105 font-medium'>
                                Mini Pokédex<br />
                                <img src={pIcon} />
                                <p className='text-xs pt-2'>Projeto feito com
                                    HTML, CSS e Javascript utilizando a Poké API.
                                    Os pokémon ficam salvos no LocalStorage ao
                                    sair da página.
                                </p>
                            </a>
                        </div>
                        <div className='flex gap-5'>
                            <a href="https://habitflow-phi.vercel.app"
                            target="_blank"
                            className='p-2 bg-violet-100 rounded sm:w-60 md:w-120 text-center text-2xl transition-transform duration-300 ease-in-out hover:scale-105 font-medium'>
                                Habitflow<br />
                                <img src={hIcon} />
                                <p className='text-xs pt-2'>Projeto feito com
                                    CSS, JavaScript e React.js. É uma aplicação
                                    que auxilia a moldar novos hábitos, com um
                                    gráfico de gastos desnecessários, dinheiro
                                    poupado e tarefas diárias com histórico dos
                                    últimos 7 dias.
                                </p>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default Projects
