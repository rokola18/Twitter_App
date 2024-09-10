import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFeatherPointed, faHouse, faMagnifyingGlass, faBell, faEnvelope, faSquareMinus, faUsers, faX, faBoltLightning, faUser, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const PrimeraSeccion = ({ handleHomeClick, handleExploreClick, handleNotificationsClick, handleIconClick, optionsActive, optionsRef, optionsIconRef }) => {
  return (
    <section className='primera-seccion'>

         <a href='lol'>
            <div className='solo-icon eliminar'>
             {/* No encontre el icono de Twitter X */}
            <FontAwesomeIcon className='icon-twiter' icon={faX} /> 
            </div>
        </a>
 
        <div className='primera-parte'>

          <div className='hover-iconos uno' onClick={handleHomeClick}>
            <div className='solo-icon'>
              <FontAwesomeIcon className='icon-twiter' icon={faHouse}/>
              <span className='home span-2'>Home</span>
            </div>
          </div>

          <div className='hover-iconos dos' onClick={handleExploreClick}>
            <div className='solo-icon'>
              <FontAwesomeIcon className='icon-twiter' icon={faMagnifyingGlass} />
              <span className='span-2'>Explore</span>
            </div>
          </div>  

           <div className='hover-iconos tres'  onClick={handleNotificationsClick}> 
              <div className='solo-icon' >
               <FontAwesomeIcon className='icon-twiter' icon={faBell} />
               <span className='span-2'>Notifications</span>
              </div>
            </div>

            <div className='hover-iconos cuatro' href='lol'>
              <div className='solo-icon'>
                 <FontAwesomeIcon className='icon-twiter' icon={faEnvelope}/>
                 <span className='span-2'>Messages</span>
              </div>
            </div>

              <div className='hover-iconos cinco' href='lol'>
                 <div className='solo-icon'>
                    <FontAwesomeIcon className='icon-twiter' icon={faSquareMinus} />
                    <span className='span-2'>Grok</span>
                  </div>
              </div>
              
              <div className='hover-iconos seis' href='lol'>
                  <div className='solo-icon'>
                    <FontAwesomeIcon className='icon-twiter' icon={faUsers} />
                    <span className='span-2' >Communities</span>
                  </div>
              </div>
              <div className='hover-iconos siete' href='lol'>
                  <div className='solo-icon'>
                    <FontAwesomeIcon className='icon-twiter' icon={faX} />
                    <span className='span-2'>Premium</span>
                  </div>
              </div>

        </div>

           <div className='hover-iconos ocho' href='lol'>
                  <div className='solo-icon eliminar'>
                      <FontAwesomeIcon className='icon-twiter' icon={faBoltLightning} />
                      <span className='span-2'>Verified Orgs</span>
                  </div>
              </div>
              <div className='hover-iconos nueve' href='lol'>
                  <div className='solo-icon eliminar'>
                    <FontAwesomeIcon className='icon-twiter' icon={faUser}/>
                    <span className='span-2'>Profile</span>
                  </div>
              </div>
              
              <div className='hover-iconos diez' href='lol'>
                  <div className='solo-icon eliminar'>
                       <FontAwesomeIcon className='icon-twiter' icon={faEllipsis} />
                       <span className='span-2'>More</span>
                  </div>
              </div>


        <button className='boton-post'>
          <span className='button-text'>Post</span>
          <FontAwesomeIcon className='button-icon' icon={faFeatherPointed} />
        </button>

        <div className='padre' ref={optionsIconRef} onClick={handleIconClick}>
          <div className='cuenta'>
            <div className='circulo'>j</div>
            <div>
              <div className='nombre'>jonas berry</div>
              <div className='usuario'>@berry_jonas</div>
            </div>
            <div className='img-cuenta'>
            <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
        </div>

        {optionsActive && (
          <div className={`options ${optionsActive ? 'active' : ''}`} ref={optionsRef}>
            <div className='options-2'>
              <a href='lol'>
                <div>Add an existing account</div>
              </a>
              <a href='lol'>
                <div>Manage accounts</div>
              </a>
              <a href='lol'>
                <div>Log out @berre_jona67700</div>
              </a>
            </div>
          </div>
        )}
      </section>
  );
};

export default PrimeraSeccion;
