// pages/Productos.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCartPlus } from 'react-icons/fa';

function Productos() {
  const productos = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción breve del producto 1', precio: '$100', imagen: '/assets/images/producto1.jpg' },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción breve del producto 2', precio: '$150', imagen: '/assets/images/producto2.jpg' },
    { id: 3, nombre: 'Producto 3', descripcion: 'Descripción breve del producto 3', precio: '$200', imagen: '/assets/images/producto3.jpg' },
    { id: 4, nombre: 'Producto 4', descripcion: 'Descripción breve del producto 4', precio: '$250', imagen: '/assets/images/producto4.jpg' },
    { id: 5, nombre: 'Producto 5', descripcion: 'Descripción breve del producto 5', precio: '$300', imagen: '/assets/images/producto5.jpg' },
    { id: 6, nombre: 'Producto 6', descripcion: 'Descripción breve del producto 6', precio: '$350', imagen: '/assets/images/producto6.jpg' },
    { id: 7, nombre: 'Producto 7', descripcion: 'Descripción breve del producto 7', precio: '$400', imagen: '/assets/images/producto7.jpg' },
    { id: 8, nombre: 'Producto 8', descripcion: 'Descripción breve del producto 8', precio: '$450', imagen: '/assets/images/producto8.jpg' },
    { id: 9, nombre: 'Producto 9', descripcion: 'Descripción breve del producto 9', precio: '$500', imagen: '/assets/images/producto9.jpg' },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center text-rose-600">Nuestros Productos</h1>
        <p className="text-center text-gray-700 mt-4">Explora nuestra variedad de productos con ingredientes naturales y exclusivos</p>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-rose-50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-rose-600">{producto.nombre}</h3>
                <p className="text-gray-600 mt-2">{producto.descripcion}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-rose-600">{producto.precio}</span>
                  <button className="bg-rose-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-rose-700 transition-colors">
                    <FaCartPlus /> Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Productos;
