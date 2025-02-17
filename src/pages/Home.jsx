import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

// Usamos Suspense para el lazy loading de productos
const ProductsDestacados = React.lazy(() => import('../components/ProductsDestacados'));

// Importa el componente TestSeals
import TestSeals from '../components/TestSeals';

function Home() {
  return (
    <>
      {/* Meta tags para mejorar SEO */}
      <head>
        <title>Tienda Rosa | Productos Naturales y Cuidado Personal</title>
        <meta name="description" content="Compra productos naturales y orgánicos para el cuidado personal en Tienda Rosa. Calidad y excelencia para tu bienestar." />
        <meta name="keywords" content="productos naturales, cuidado personal, ingredientes orgánicos, tienda rosa" />
      </head>

      <Navbar />
      <Banner />
      
      {/* Agrega el componente de los sellos de testeo */}
      <TestSeals />

      {/* Suspense para cargar el componente ProductsDestacados */}
      <Suspense fallback={<div>Cargando productos...</div>}>
        <ProductsDestacados />
      </Suspense>

      <Footer />
    </>
  );
}

export default Home;
