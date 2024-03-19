import React from 'react';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto">
        {/* Título grande con estilo minimalista */}
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-6">Bienvenido a nuestra página Nautico</h1>

        {/* Texto mediadamente grande */}
        <p className="text-lg text-gray-700 mt-8">
          Aquí puedes encontrar información sobre nuestro proyecto AquaSeltz para monitorear el nivel de agua y calidad del agua de cualquier deposito ya sea un tinaco o cistener en tiempo real en web y app movil y cómo estamos trabajando para mejorar cada día.
        </p>

      </div>
    </div>
  );
}
