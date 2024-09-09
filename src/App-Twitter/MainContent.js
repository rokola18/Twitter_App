import React, { useEffect, useState, useRef } from 'react'; // Importa hooks de React para gestionar el estado y efectos secundarios.
import PrimeraSeccion from './PrimeraSeccion';
import SegundaSeccion from './SegundaSeccion';
import TerceraSeccion from './TerceraSeccion';

const MainContent = () => { 
  // Estado para almacenar tweets
  const [tweets, setTweets] = useState([]);
  // Estado para controlar la visibilidad del menú de opciones
  const [optionsActive, setOptionsActive] = useState(false);
  // Referencia al contenedor de opciones
  const optionsRef = useRef(null);
  // Referencia al ícono que activa las opciones
  const optionsIconRef = useRef(null);
  
  // Estado y referencias para otro menú de opciones (options3)
  const [options3Active, setOptions3Active] = useState(false);
  const options3Ref = useRef(null);
  const options3IconRef = useRef(null);
  
  // Estado y referencias para un tercer menú desplegable (mundo1)
  const [mundo1Active, setMundo1Active] = useState(false);
  const mundo1Ref = useRef(null);
  const mundo1IconRef = useRef(null);
  
  // Estado para controlar si el menú de respuestas está abierto
  const [isOpen, setIsOpen] = useState(false);
  // Estado para controlar qué contenido mostrar (home, explore, notifications)
  const [showContent, setShowContent] = useState('home'); 

  // useEffect para cargar tweets y manejar clics fuera de los menús desplegables
  useEffect(() => {
    // Cargar tweets desde un archivo JSON
    fetch('tweets.json')
      .then(response => response.json())
      .then(data => setTweets(data))
      .catch(error => console.error('Error fetching tweets:', error));

    // Función para cerrar menús si se hace clic fuera de ellos
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target) &&
          optionsIconRef.current && !optionsIconRef.current.contains(event.target)) {
        setOptionsActive(false);
      }
      if (options3Ref.current && !options3Ref.current.contains(event.target) &&
          options3IconRef.current && !options3IconRef.current.contains(event.target)) {
        setOptions3Active(false);
      }
      if (mundo1Ref.current && !mundo1Ref.current.contains(event.target) &&
          mundo1IconRef.current && !mundo1IconRef.current.contains(event.target)) {
        setMundo1Active(false);
      }
    };

    // Agrega el event listener para manejar clics fuera de los menús
    document.addEventListener('click', handleClickOutside);
    // Elimina el event listener al desmontar el componente
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [optionsActive, options3Active, mundo1Active]);

  // Función para alternar la visibilidad del primer menú desplegable (options)
  const handleIconClick = (e) => {
    e.stopPropagation(); // Evita que el clic se propague
    setOptionsActive(prevState => !prevState); // Cambia el estado de visibilidad
  };

  // Función para alternar la visibilidad del segundo menú desplegable (options3)
  const handleMundoClick = (e) => {
    e.stopPropagation(); // Evita que el clic se propague
    setOptions3Active(prevState => !prevState); // Cambia el estado de visibilidad
  };

  // Función para alternar la visibilidad del menú de respuestas
  const handleReplyClick = () => {
    setIsOpen(!isOpen); // Cambia el estado de visibilidad
  };

  // Funciones para cambiar la sección mostrada en el contenido principal
  const handleExploreClick = () => {
    setShowContent('explore'); // Muestra la sección Explore
  };

  const handleHomeClick = () => {
    setShowContent('home'); // Muestra la sección Home
  };

  const handleNotificationsClick = () => {
    setShowContent('notifications'); // Muestra la sección Notifications
  };

  // Event listener para eliminar un div específico al reducir el tamaño de la pantalla
  window.addEventListener('resize', function() {
    const div = document.querySelector('.eliminar');  
    if (window.innerWidth < 376) {  // Si la pantalla es menor de 376px
      div.remove(); // Elimina el div con la clase 'eliminar'
    }
  });


  return (
    <main>
       <PrimeraSeccion
        handleHomeClick={handleHomeClick}
        handleExploreClick={handleExploreClick}
        handleNotificationsClick={handleNotificationsClick}
        handleIconClick={handleIconClick}
        optionsActive={optionsActive}
        optionsRef={optionsRef}
        optionsIconRef={optionsIconRef}
      />

      <SegundaSeccion
        showContent={showContent}
        handleReplyClick={handleReplyClick}
        isOpen={isOpen}
        handleMundoClick={handleMundoClick}
        options3Active={options3Active}
        options3Ref={options3Ref}
        options3IconRef={options3IconRef}
        tweets={tweets}
      />

      <TerceraSeccion showContent={showContent} />

</main>
  );
}

export default MainContent;