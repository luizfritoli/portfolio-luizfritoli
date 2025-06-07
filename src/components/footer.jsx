import React from 'react'

const Footer = ()  => {
  return (
    <div>
        <footer>
            <div className='flex flex-col items-center justify-end h-15 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300'>
                <p className=''>© Pensado e feito por <strong>Luiz Fritoli</strong> com muito capuccino! ☕︎</p>
                <p className=''><strong>Tailwind CSS</strong>, <strong>JavaScript</strong> e <strong>React JS</strong> foram utilizados para
                    a montagem da estrutura da página. Escrito com <strong>Visual Studio Code</strong>.
                </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
