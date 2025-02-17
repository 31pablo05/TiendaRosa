function Banner() {
    return (
      <div className="bg-gradient-to-r from-rose-400 to-rose-600 text-center py-24 flex items-center justify-center px-6">
        {/* Contenedor para el logo, ajustado en pantallas grandes y móviles */}
        <div className="flex items-center justify-center mr-0 sm:mr-48">
          <img
            src="assets/logos/logo1.webp"
            alt="Logo"
            className="h-40 sm:h-68 max-w-xs transition-all transform hover:scale-110 hover:shadow-2xl animate-fadeIn rounded-[10px]"
          />
        </div>
  
        {/* Título con animación de desvanecimiento */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white italic animate-fadeIn mb-4">
            Tienda Rosa
          </h1>
  
          {/* Subtítulo */}
          <p className="mt-22 text-gray-100 mt-6 animate-fadeIn text-lg sm:text-xl md:text-2xl px-4 sm:px-0">
            Productos Naturales - Cuidado Personal - Ingredientes Orgánicos
          </p>
        </div>
      </div>
    );
  }
  
  export default Banner;
  