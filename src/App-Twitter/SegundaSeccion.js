import React from 'react';
import Explore from './Explore';
import Notifications from './Notifications';

const SegundaSeccion = ({ showContent, handleReplyClick, isOpen, handleMundoClick, options3Active, options3Ref, options3IconRef, tweets }) => {
  return (
    <section className='segunda-seccion'>
      {showContent === 'home' && (
        <>
          <div className='encabezado raya'>
            <div>For you</div>
            <div>Following</div>
          </div>
          <div className='encabezado-2'>
            <div className='circulo'>j</div>
            <input type='text' placeholder='What is happening?!' onClick={handleReplyClick} />
          </div>

          <div className='mundo-padre'>
            <div className={`mundo-1 ${isOpen ? 'active' : ''}`}>
              <div className='mundo-2' onClick={handleMundoClick} ref={options3IconRef}>
                <img alt='mundo' src='https://cdn-user-icons.flaticon.com/152601/152601768/1719275323884.svg?token=exp=1719276226~hmac=258de6172ed7e7bc09677fa9948b681a' />
                <p>Everyone can reply</p>
              </div>
              <div>
                <hr />
              </div>
            </div>
          </div>

          {options3Active && (
            <div className={`options-3 ${options3Active ? 'active' : ''}`} ref={options3Ref}>
              <p>Who can reply?</p>
              <p>Choose who can reply to this post.</p>
              <p>Anyone mentioned can always reply.</p>
            </div>
          )}

          <div className='tweets'>
            {tweets.map((tweet, index) => (
              <div key={index} className='tweet'>
                <img className='avatar' src={tweet.avatar} alt={`${tweet.username}'s avatar`} />
                <div className='tweet-content'>
                  <div className='tweet-header'>
                    <span className='username'>{tweet.username}</span>
                    <span className='handle'>{tweet.handle}</span>
                  </div>
                  <div className='tweet-body'>{tweet.tweet}</div>
                  {tweet.image && <img className='tweet-media' src={tweet.image} alt='Tweet visual content' />}
                  {tweet.video && tweet.video.includes('youtube') ? (
                    <iframe 
                      className='tweet-media'
                      width="560"
                      height="315"
                      src={tweet.video}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title='YouTube video'
                    ></iframe>
                  ) : (
                    tweet.video && (
                      <video className='tweet-media' controls>
                        <source src={tweet.video} type='video/mp4' />
                        Your browser does not support the video tag.
                      </video>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {showContent === 'explore' && <Explore />}
      {showContent === 'notifications' && <Notifications />}
    </section>
  );
};

export default SegundaSeccion;
