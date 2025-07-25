import React from 'react'

const Footer = ()  => {
  return (
    <div>
        <footer>
            <div className='flex flex-col items-center justify-end min-h-15 h-auto bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300'>
                <p className='text-center'>© Pensado e feito por <strong>Luiz Fritoli</strong> com muito capuccino! ☕︎</p>
                <p className='text-center'><strong>Tailwind CSS</strong>, <strong>JavaScript</strong> e <strong>React.js</strong> foram utilizados para
                    a montagem da estrutura da página. Escrito com <strong>Visual Studio Code</strong>.
                </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
