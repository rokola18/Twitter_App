import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';

const PrimeraSeccion = ({ handleHomeClick, handleExploreClick, handleNotificationsClick, handleIconClick, optionsActive, optionsRef, optionsIconRef }) => {
  return (
    <section className='primera-seccion'>

         <a href='lol'>
            <div className='solo-icon eliminar'>
              <img className='icon-twiter twiter-img' alt='twiter-img' src='https://cdn-user-icons.flaticon.com/152601/152601768/1718674333450.svg?token=exp=1718675249~hmac=61300e555dacbc54dc8c29021b1139ff' />
            </div>
        </a>
 
        <div className='primera-parte'>

          <div className='hover-iconos uno' onClick={handleHomeClick}>
            <div className='solo-icon'>
              <img className='icon-twiter' alt='casa' src='https://cdn-user-icons.flaticon.com/152601/152601768/1718674018872.svg?token=exp=1718674935~hmac=e2f96a4595b1ad0ee1c2ece873d2327f' />
              <span className='home span-2'>Home</span>
            </div>
          </div>

          <div className='hover-iconos dos' onClick={handleExploreClick}>
            <div className='solo-icon'>
              <img className='icon-twiter' alt='casa' src='https://cdn-user-icons.flaticon.com/152601/152601768/1718672867947.svg?token=exp=1718673784~hmac=a3ed8a23b555d07c09a5af694cded6fa'></img>
              <span className='span-2'>Explore</span>
            </div>
           </div>  

           <div className='hover-iconos tres'  onClick={handleNotificationsClick}> 
              <div className='solo-icon' >
               <img className='icon-twiter' alt='casa' src='https://cdn-user-icons.flaticon.com/152601/152601768/1718673082200.svg?token=exp=1718674006~hmac=911279d47cf21a5c7d540ba65a78b360'></img>
               <span className='span-2'>Notifications</span>
              </div>
            </div>

            <div className='hover-iconos cuatro' href='lol'>
              <div className='solo-icon'>
                 <img className='icon-twiter' alt='casa' src='https://cdn-user-icons.flaticon.com/152601/152601768/1718673291894.svg?token=exp=1718674208~hmac=a5ac8dcda12b8aa493231d096d6d99a0'></img>
                 <span className='span-2'>Messages</span>
              </div>
            </div>

              <div className='hover-iconos cinco' href='lol'>
                 <div className='solo-icon'>
                    <img className='icon-twiter' alt='casa' src='https://cdn-user-icons.flaticon.com/152601/152601768/1718673484062.svg?token=exp=1718674400~hmac=96196de2675b05c992ab8df439fa40d2'></img>
                    <span className='span-2'>Grok</span>
                  </div>
              </div>
              
              <div className='hover-iconos seis' href='lol'>
                  <div className='solo-icon'>
                    <img className='icon-twiter' alt='casa' src='https://cdn-user-icons.flaticon.com/152601/152601768/1718673547927.svg?token=exp=1718674464~hmac=a655eac51583feb674c11039e96610e0'></img>
                    <span className='span-2' >Bookmarks</span>
                  </div>
              </div>
              <div className='hover-iconos siete' href='lol'>
                  <div className='solo-icon'>
                    <img className='icon-twiter' alt='casa' src='https://cdn-user-icons.flaticon.com/152601/152601768/1718673717835.svg?token=exp=1718674634~hmac=5b8a6af181fd51267f4d59dbbbe10da4'></img>
                    <span className='span-2'>Communities</span>
                  </div>
              </div>

        </div>

           <div className='hover-iconos ocho' href='lol'>
                  <div className='solo-icon eliminar'>
                      <img className='icon-twiter premiun' alt='twiter-img-premiun' src='https://cdn-user-icons.flaticon.com/152601/152601768/1718674333450.svg?token=exp=1718675249~hmac=61300e555dacbc54dc8c29021b1139ff'></img>
                      <span className='span-2'>Premium</span>
                  </div>
              </div>
              <div className='hover-iconos nueve' href='lol'>
                  <div className='solo-icon eliminar'>
                    <img className='icon-twiter profile' alt='casa' src='https://cdn-user-icons.flaticon.com/152601/152601768/1718673814189.svg?token=exp=1718674731~hmac=d549467b348a0f4a900861c6a19c7c9e'></img>
                    <span className='span-2'>Profile</span>
                  </div>
              </div>
              
              <div className='hover-iconos diez' href='lol'>
                  <div className='solo-icon eliminar'>
                       <img className='icon-twiter more' alt='casa' src='https://cdn-user-icons.flaticon.com/152601/152601768/1718673888489.svg?token=exp=1718674804~hmac=f07d742a6581119d281ab0cc4eec1f7a'></img>
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
              <img alt='icon-trespuntos' src='https://cdn-user-icons.flaticon.com/152601/152601768/1718842785304.svg?token=exp=1718926241~hmac=9f332fa1d27a8f87bf6faead8bb20dd2' />
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
