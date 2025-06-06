import React, { useState } from 'react'
import { motion } from 'framer-motion'
import jsIcon from '../assets/js.png'
import tailwindIcon from '../assets/tailwind.png'
import reactIcon from '../assets/react.png'

const Skillsets = () => {
    const [showJs, setShowJs] = useState(false)
    const [showTailwind, setShowTailwind] = useState(false)
    const [showReact, setShowReact] = useState(false)

    return (
        <div>
            <section id='skillsets' className='min-h-100 h-auto bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 flex flex-col justify-center items-center'>

                <motion.h2
                    className='text-stone-950 font-black text-5xl'
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Habilidades
                </motion.h2>

                <motion.div
                    className='flex justify-center items-center text-violet-50 mt-25 text-lg gap-20'
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={jsIcon}
                        alt='JavaScript'
                        className='h-14 w-14 lg:h-20 lg:w-20 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer'
                        onClick={() => (setShowJs(true), setShowTailwind(false), setShowReact(false))}
                    />
                    <img
                        src={tailwindIcon}
                        alt='Tailwind CSS'
                        className='h-12 w-18 lg:h-20 lg:w-32 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer'
                        onClick={() => (setShowJs(false), setShowTailwind(true), setShowReact(false))}
                    />
                    <img
                        src={reactIcon}
                        alt='React Native'
                        className='h-14 w-14 lg:h-20 lg:w-20 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer'
                        onClick={() => (setShowJs(false), setShowTailwind(false), setShowReact(true))}
                    />
                </motion.div>

                <ul className='mt-8'>
                    <li><b>+ Design responsivo</b></li>
                </ul>

                <motion.span
                    className='mt-4 text-1xl text-center'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {
                        showJs
                            ? 'O JavaScript é usado primordialmente para criar interações em páginas web.'
                            : showTailwind
                                ? 'O Tailwind é usado para estilizar interfaces web de forma rápida e responsiva diretamente no HTML.'
                                : showReact
                                    ? ' O React é uma biblioteca JavaScript para construir interfaces de usuário com componentes reutilizáveis e reativos.'
                                    : 'Clique em um dos ícones para saber sobre!'
                    }
                </motion.span>
            </section>
        </div>
    )
}

export default Skillsets
