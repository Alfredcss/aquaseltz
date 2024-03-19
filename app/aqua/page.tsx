import Link from 'next/link';

export default function WaterMonitoringPage() {
  return (
    <div>
      <header className="flex items-center justify-center">
        {/* Aquí va tu imagen superior */}
        <img src="/img/logo chido.png" alt="Imagen Superior" />
      </header>

      <main className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 mt-8">
          {/* Columna de Calidad de Agua */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Calidad de Agua</h2>
            {/* Aquí va tu gráfico real-time para la calidad de agua */}
            <p>Aquí iría el gráfico real-time para la calidad de agua...</p>
          </div>

          {/* Columna de Nivel de Agua */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Nivel de Agua</h2>
            {/* Aquí va tu gráfico real-time para el nivel de agua */}
            <p>Aquí iría el gráfico real-time para el nivel de agua...</p>
          </div>
        </div>
      </main>

    </div>
  );
}
