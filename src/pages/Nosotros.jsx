import Navbar from '../Components/Navbar';
import Footer from '../components/Footer';

function Nosotros() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center bg-rose-400 text-white mb-8">Quiénes Somos</h1>

        <p className="text-center text-[#F4B8C2] text-lg mb-12">
          Somos una empresa dedicada a ofrecer los mejores productos y servicios, con un enfoque en calidad, compromiso y atención al cliente. Conoce más sobre nuestra historia y visión.
        </p>

        {/* Sección con imagen y texto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-center text-center md:text-left">
            <h2 className="text-3xl font-semibold text-[#F4B8C2] mb-4">Nuestra Historia</h2>
            <p className="text-[#E8A0A7] text-lg mb-6">
              Fundada en 2020, nuestra empresa nació con la misión de brindar productos de la más alta calidad para satisfacer las necesidades de nuestros clientes. A lo largo de los años, hemos crecido, aprendiendo de nuestros errores y celebrando cada éxito con nuestro equipo y clientes.
            </p>
            <p className="text-[#E8A0A7] text-lg">
              Nuestra pasión por la excelencia nos impulsa a seguir innovando, siempre con un enfoque en el bienestar de nuestros clientes y el respeto por el medio ambiente.
            </p>
          </div>
          
          <div className="flex justify-center items-center">
            <img
              src="/assets/images/nosotros.jpg" // Asegúrate de tener una imagen relevante
              alt="Nuestro equipo"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Misión y visión */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-[#F4B8C2] mb-8">Nuestra Misión</h2>
          <p className="text-[#E8A0A7] text-lg max-w-4xl mx-auto mb-8">
            Proveer productos innovadores, responsables y accesibles, que mejoren la calidad de vida de nuestros clientes y contribuyan al desarrollo sustentable.
          </p>

          <h2 className="text-3xl font-semibold text-[#F4B8C2] mb-8">Nuestra Visión</h2>
          <p className="text-[#E8A0A7] text-lg max-w-4xl mx-auto">
            Ser la empresa líder en nuestro sector, reconocida por la calidad de nuestros productos, la satisfacción de nuestros clientes y el impacto positivo en la sociedad.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Nosotros;



