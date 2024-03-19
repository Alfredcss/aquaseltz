const Navigation = () => {
    return (
      <ul className="flex border-b bg-gray-200 font-montserrat">
        <li className="mr-1">
          <a className="inline-block py-2 px-4 text-gray-700 hover:text-blue-700 font-semibold" href="./home">Home</a>
        </li>
        <li className="mr-1">
          <a className="inline-block py-2 px-4 text-gray-700 hover:text-blue-700 font-semibold" href="./acerca">Acerca</a>
        </li>
        <li className="mr-1">
          <a className="inline-block py-2 px-4 text-gray-700 hover:text-blue-700 font-semibold" href="./contactos">Contacto</a>
        </li>
        <li className="mr-1">
          <a className="inline-block py-2 px-4 text-gray-700 hover:text-blue-700 font-semibold" href="./aqua">AquaSeltz</a>
        </li>
      </ul>
    );
  };
  
  export default Navigation;
  