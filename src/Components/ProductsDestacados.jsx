import React from 'react';

const products = [
  {
    id: 1,
    name: 'Aceite Esencial de Lavanda',
    description: 'Un aceite calmante que ayuda a reducir el estrés y promover el bienestar.',
    image: 'assets/images/Productos (1).jpg',
  },
  {
    id: 2,
    name: 'Crema Facial Hidratante',
    description: 'Suaves y refrescantes, libres de flúor y sulfatos.',
    image: 'assets/images/Productos (2).jpg',
  },
  {
    id: 3,
    name: 'Arcilla Verde Patagónica',
    description: 'Algunos de sus beneficios son: limpia la piel en profundidad, brindando un efecto relajante. Tiene un efecto detoxificante y purificante. Favorece la formación de colágeno. Revitaliza la piel. Afirma y brinda luminosidad. Estimula la circulación.',
    image: 'assets/images/Productos (3).jpg',
  },
  {
    id: 4,
    name: 'Bálsamos Labiales ',
    description: 'La naturaleza protege tus labios todo el año dejándolos más tersos y suaves. Ideados para ayudar en la regeneración y recuperación de labios castigados y/o agrietados. Generan una barrera frente a las condiciones climáticas extremas, retardando la pérdida de humedad, protegiéndolos del envejecimiento y aliviándolos al instante con un efecto calmante, brindándoles suavidad y tersura.',
    image: 'assets/images/Productos (4).jpg',
  },
  {
    id: 5,
    name: 'Crema dental Carbon activado',
    description: 'Recomendada para toda la familia Brinda una saludable higiene bucal sin agredir el esmalte de los dientesSabor fresco y dulce, con aroma natural',
    image: 'assets/images/Productos (5).jpg',
  },
  {
    id: 6,
    name: 'jabon de coco',
    description: 'Características: Las Toallitas Húmedas Boti-K Puro están fabricadas en un delicado y suave paño no textil, biodegradable, de Bambú Orgánico. De aroma sutil y herbáceo.Indicado para todo tipo de piel. Recomendado para pieles delicadas y para todas las edades',
    image: 'assets/images/Productos (6).jpg',
  },
];

const ProductsDestacados = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
        Productos Destacados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-t-xl"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">{product.name}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsDestacados;
