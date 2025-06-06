import React from 'react'
import { motion } from 'framer-motion'
import icon from "../assets/about-img.png"

const About = () => {
    return (
        <div>
            <section
                id='about'
                className='scroll-smooth min-h-screen h-auto w-full bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 text-lg
      flex flex-col items-center justify-center px-6
      lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:px-0'>

                <motion.div
                    className="flex justify-center items-center"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <img src={icon} alt="Ilustração de programação" className='w-80 h-80' />
                </motion.div>

                <motion.p
                    className='text-center mt-10 lg:mt-0 lg:text-left self-center lg:self-start lg:pt-20 lg:pr-20'
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Começando a ter contato com a programação em fevereiro de 2025, tenho me dedicado a ser um desenvolvedor de nível, absorvendo conceitos técnicos, priorizando otimização e práticas modernas. Minha linguagem prioritária é JavaScript, aprimorando minhas habilidades diariamente para ter completo domínio da linguagem.
                </motion.p>

                <motion.p
                    className='text-center mt-10 lg:mt-0 lg:text-left lg:self-end lg:pb-20 lg:pl-20'
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Atualmente, estou no 1° semestre de Engenharia de Software pela Uniasselvi, tendo escolhido este curso principalmente por eu sempre ter adorado mexer com a web, arquivos e programas desde os 4 anos de idade. Me capacitando cada vez mais para construir aplicações de ponta.
                </motion.p>

                <motion.div
                    className="flex justify-center text-sm sm:text-base items-center mt-10 lg:mt-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <code className='font-mono font-bold text-left'>
                        &lt;html&gt;<br />
                        &nbsp;&lt;body&gt;<br />
                        &nbsp;&nbsp;&lt;section&gt;<br />
                        &nbsp;&nbsp;&lt;span&gt;
                        <p className='font-normal inline'>
                            &nbsp;&nbsp;De certa forma, programar é legal!
                        </p>
                        &nbsp;&nbsp;&lt;/span&gt;<br />
                        &nbsp;&nbsp;&lt;/section&gt;<br />
                        &nbsp;&lt;/body&gt;<br />
                        &lt;/html&gt;
                    </code>
                </motion.div>
            </section>
        </div>
    )
}

export default About
