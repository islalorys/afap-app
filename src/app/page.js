import React from 'react'
import second, { PaginaInicioComponent } from '@/components/pagina-inicio'
import LoginTecnico from '@/components/login/LoginTecnico'

function HomePage() {
  
  return (
    <div className='flex items-center justify-center h-full mt-4'>
      {/* <PaginaInicioComponent/> */}
      <LoginTecnico/>
    </div>
  )
}

export default HomePage