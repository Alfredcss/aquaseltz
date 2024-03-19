export default function Page() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Primer Integrante */}
        <div className="text-center">
          <img src="img/1.jpg" alt="Nombre del Primer Integrante" className="mx-auto rounded-full w-32 h-32 mb-4" />
          <p className="text-lg font-semibold">Erick</p>
          {/* Descripción breve */}
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ligula eget odio volutpat vehicula.</p>
        </div>
        {/* Segundo Integrante */}
        <div className="text-center">
          <img src="img/2.jpg" alt="Nombre del Segundo Integrante" className="mx-auto rounded-full w-32 h-32 mb-4" />
          <p className="text-lg font-semibold">Giancarlo</p>
          {/* Descripción breve */}
          <p className="text-sm text-gray-600">Ut euismod justo eget fermentum posuere. Phasellus a est a libero consequat vulputate non nec sapien.</p>
        </div>
        {/* Tercer Integrante */}
        <div className="text-center">
          <img src="img/3.jpg" alt="Nombre del Tercer Integrante" className="mx-auto rounded-full w-32 h-32 mb-4" />
          <p className="text-lg font-semibold">Alfredo</p>
          {/* Descripción breve */}
          <p className="text-sm text-gray-600">Sed id ipsum in ante fringilla fringilla. Suspendisse eu nisl quis mauris consequat tincidunt.</p>
        </div>
        {/* Cuarto Integrante */}
        <div className="text-center">
          <img src="img/4.jpg" alt="Nombre del Cuarto Integrante" className="mx-auto rounded-full w-32 h-32 mb-4" />
          <p className="text-lg font-semibold">Jorge</p>
          {/* Descripción breve */}
          <p className="text-sm text-gray-600">Fusce sit amet efficitur velit. Nulla facilisi. Morbi non velit vel metus vestibulum pulvinar.</p>
        </div>
      </div>
      
    );
  }
  