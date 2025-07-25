import { motion } from 'framer-motion'
import jsIcon from '../assets/js.png'
import tailwindIcon from '../assets/tailwind.png'
import reactIcon from '../assets/react.png'
import tsIcon from '../assets/typescript.png'
import htmlIcon from '../assets/html5.png'
import cssIcon from '../assets/css.png'

const skills = [
    {
        id: 'html',
        icon: htmlIcon,
        alt: 'HTML5',
        className: 'w-[2.7em] h-[2.7em] sm:w-[4em] sm:h-[4em]',
    },
        {
        id: 'CSS',
        icon: cssIcon,
        alt: 'CSS3',
        className: 'w-[3.1em] h-[3.1em] sm:w-[4.4em] sm:h-[4.4em]',
    },
    {
        id: 'js',
        icon: jsIcon,
        alt: 'JavaScript',
        className: 'w-[2.7em] h-[2.7em] sm:w-[4em] sm:h-[4em]',
    },
        {
        id: 'typescript',
        icon: tsIcon,
        alt: 'TypeScript',
        className: 'w-[2.7em] h-[2.7em] sm:w-[4em] sm:h-[4em]',
    },
    {
        id: 'react',
        icon: reactIcon,
        alt: 'React.js',
        className: 'w-[2.7em] h-[2.7em] sm:w-[4em] sm:h-[4em]',
    },
        {
        id: 'tailwind',
        icon: tailwindIcon,
        alt: 'Tailwind CSS',
        className: 'w-[4em] h-[2.7em] sm:w-[6em] sm:h-[4em]',
    },
]

const Skillsets = () => {

    return (
        <section
            id="skillsets"
            className="min-h-100 h-auto bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 flex flex-col justify-center items-center"
        >
            <motion.h2
                className="text-stone-950 font-black text-5xl"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Habilidades
            </motion.h2>

            <motion.div
                className="flex flex-wrap justify-center items-center text-violet-50 mt-24 text-lg gap-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {skills.map(({ id, icon, alt, className }) => (
                    <img
                        key={id}
                        src={icon}
                        alt={alt}
                        className={`${className} transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer`}
                    />
                ))}
            </motion.div>

            <ul className="mt-16">
                <li>
                    <b>+ Design responsivo</b>
                </li>
            </ul>
        </section>
    )
}

export default Skillsets
