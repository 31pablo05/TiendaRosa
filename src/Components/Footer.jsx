import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contacto" className="bg-[#B24A64] text-white py-8 mt-10">
      <div className="container mx-auto px-6">
        {/* Información de contacto a la izquierda */}
        <div className="flex flex-col sm:flex-row sm:justify-between mb-6">
          <div className="flex flex-col items-start mb-4 sm:mb-0">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-xl mr-2" />
              <p className="text-sm sm:text-base">Dirección: Calle Ficticia 123, Ciudad</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-xl mr-2" />
              <p className="text-sm sm:text-base">Celular: +54 9 123 456 7890</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-xl mr-2" />
              <p className="text-sm sm:text-base">Email: contacto@tienda.com</p>
            </div>
          </div>

          {/* Redes sociales a la derecha */}
          <div className="flex justify-start sm:justify-end gap-6 mb-6 sm:mb-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl hover:text-[#1877F2] transition-colors" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl hover:text-[#C13584] transition-colors" />
            </a>
            <a href="https://wa.me/541234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-3xl hover:text-[#25D366] transition-colors" />
            </a>
          </div>
        </div>

        {/* Desarrollado por en el centro */}
        <div className="text-center mt-6">
          <p className="text-sm sm:text-base">Desarrollado por Pablo Proboste</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
