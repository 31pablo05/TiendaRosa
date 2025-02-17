import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-[#9B1C31] p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Menú de navegación centrado */}
        <ul className={`flex gap-4 ${menuOpen ? 'block' : 'hidden'} md:flex md:mx-auto`}>
          <li><Link to='/' className='text-white hover:text-[#F2C6D8]'>Inicio</Link></li>
          <li><Link to='/nosotros' className='text-white hover:text-[#F2C6D8]'>Quiénes somos</Link></li>
          <li><Link to='/productos' className='text-white hover:text-[#F2C6D8]'>Productos</Link></li>
          <li><a href="#contacto" className='text-white hover:text-[#F2C6D8]'>Contacto</a></li>
        </ul>

        {/* Botón para abrir el menú en pantallas pequeñas */}
        <button className='text-white md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
