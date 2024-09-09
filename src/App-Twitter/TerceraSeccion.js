import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const TerceraSeccion = ({ showContent }) => {
  return (
    <div className='tercera-seccion'>
    {(showContent === 'home' || showContent === 'notifications') && (
      <div className='negro'>
        <input className='busqueda' placeholder='Search' />
        <div className='icon-img-2'>
          <FontAwesomeIcon className='icon-img' icon={faMagnifyingGlass} />
        </div>
      </div>
    )}
  
  
    {showContent === 'home' && (
      <div className='subscribete raya'>
        <h3 className='subs'>Subscribe to Premium</h3>
        <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button>Subscribe</button>
      </div>
    )}
  
  <div className={`tofollow raya ${showContent === 'notifications' ? 'margen-extra' : ''} ${showContent === 'explore' ? 'margen-superior' : ''}`}>
      <h3 className='subs'>Who to follow</h3>
      <div>
        <div className='follow'>
          <img alt='sanemi' src='https://i.pinimg.com/736x/19/db/42/19db42a014b55189550aaeea26b2fe4f.jpg' />
        </div>
        <div className='perfil'>
          <p>El-viento-sanemi</p>
          <p className='nombre-abajo'>@sanemi</p>
        </div>
        <button className='boton-follow'>Follow</button>
      </div>
  
      <div>
        <div className='follow'>
          <img alt='sanemi' src='https://cdn.statically.io/img/fantasytopics.com/f=auto/wp-content/uploads/2022/02/Gyumei-Himejima-Season-1.-edited.png' />
        </div>
        <div className='perfil'>
          <p>Himejima-rock</p>
          <p className='nombre-abajo'>@himejima</p>
        </div>
        <button className='boton-follow'>Follow</button>
      </div>
  
      <div>
        <div className='follow'>
          <img alt='sanemi' src='https://i.pinimg.com/originals/31/28/bd/3128bd7a38d8cfca96390299766a9f40.jpg' />
        </div>
        <div className='perfil'>
          <p>Elpatroncito</p>
          <p className='nombre-abajo'>@patroncito</p>
        </div>
        <button className='boton-follow'>Follow</button>
      </div>
    </div>
  </div>
  );
};

export default TerceraSeccion;
