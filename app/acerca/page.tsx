import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Espacio para el logo */}
        <div className="flex items-center justify-center mb-8">
        <img src="img/logotipo bw.png" alt="Logo" width={500} height={500} />

        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Acerca de Nautico</h2>
        <p className="text-lg text-gray-600 mb-8">
          Nautico es una empresa dedicada a la innovación en tecnologías TI.
          Fundada como equipo de cualquier materia que poco a poco empezo a tomar fuerza para comvertirese en empresa en tecnologias.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-300 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nuestro Compromiso</h3>
            <p className="text-gray-600">
              En Nautico nos esforzamos por ofrecer soluciones innovadoras y sostenibles 
              que beneficien tanto a nuestros clientes.
            </p>
          </div>
          <div className="border border-gray-300 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nuestros Valores</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Integridad</li>
              <li>Innovación</li>
              <li>Compromiso</li>
              <li>Colaboración</li>
              <li>Excelencia</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
