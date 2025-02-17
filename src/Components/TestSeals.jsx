import { useState } from "react";

function TestSeals() {
  const seals = [
    { img: "assets/sellos_testeoswebp/1.webp", alt: "Sello 1", description: "CON CONSERVANTES ECO Conservantes ecológicos, que protegen el medioambiente." },
    { img: "assets/sellos_testeoswebp/2.webp", alt: "Sello 2", description: "RESPETO ANIMAL Productos libres de crueldad animal, no testeados en animales de ninguna especie." },
    { img: "assets/sellos_testeoswebp/3.webp", alt: "Sello 3", description: "APTO PARA VEGANOS Productos desarrollados sin materias primas, ni derivados de origen animal." },
    { img: "assets/sellos_testeoswebp/4.webp", alt: "Sello 4", description: "LIBRE DE SULFATOS Productos libres sulfatos y sus derivados." },
    { img: "assets/sellos_testeoswebp/5.webp", alt: "Sello 5", description: "SIN PETROLATOS Productos libres de activos de síntesis química derivados de la industria del petróleo, como vaseline, paraffinum, etc. " },
    { img: "assets/sellos_testeoswebp/6.webp", alt: "Sello 6", description: "HECHO EN ARGENTINA Productos desarrollados bajo las más exigentes normas de Calidad e Higiene, en los laboratorios más modernos de la Argentina." },
    { img: "assets/sellos_testeoswebp/9.webp", alt: "Sello 9", description: "CONCIENCIA ECOLÓGICA Prácticas de producción consciente con una visión holística de los problemas sociales y medioambientales que provoca la industria" },
    { img: "assets/sellos_testeoswebp/10.webp", alt: "Sello 10", description: "CLINICA Y DERMATÓLOGICAMENTE TESTEADO Productos testeados clinica y dermatólogicamente en humanos" },
    { img: "assets/sellos_testeoswebp/11.webp", alt: "Sello 11", description: "HIPOALERGÉNICO Productos desarrollados especialmente para personas de piel reactiva, minimizando los riesgos de alergias." },
    { img: "assets/sellos_testeoswebp/12.webp", alt: "Sello 12", description: "LIBRES DE GLÚTEN Y CASEÍNA Productos libres de proteínas que afectan principalmente a los niños del espectro autista, celíacos e intolerantes." },
    { img: "assets/sellos_testeoswebp/13.webp", alt: "Sello 13", description: "SIN CONSERVANTES Productos desarrollados sin conservantes agregados de ninguna clase." },
    { img: "assets/sellos_testeoswebp/15.webp", alt: "Sello 15", description: "CULTIVO ORGÁNICO Productos con componentes orgánicos certificados." },
    { img: "assets/sellos_testeoswebp/16.webp", alt: "Sello 16", description: "SIN T.A.C.C Productos libres de Glúten que afectan principalmente a Celíacos." }
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Sellos de Testeo de Nuestros Productos
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 px-4">
          {(showAll ? seals : seals.slice(0, 4)).map((sello, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
              <img src={sello.img} alt={sello.alt} className="w-24 h-24 object-contain mb-3" />
              <p className="text-sm text-gray-700 text-center">{sello.description}</p>
            </div>
          ))}
        </div>
        {/* Botón "Ver más" o "Ver menos" */}
        <div className="mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-white bg-gray-800 hover:bg-gray-600 rounded-lg transition-all"
          >
            {showAll ? "Ver menos" : "Ver más"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestSeals;
