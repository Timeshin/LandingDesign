import './App.scss';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <img src='/assets/icons/logo.svg' className="header__logo" />
        
        <input type="checkbox" id="menu-toggle" className="header__menu-toggle" />
        <label className="header__burger-menu" htmlFor="menu-toggle">
          <span className="header__burger-line"></span>
          <span className="header__burger-line"></span>
          <span className="header__burger-line"></span>
        </label>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Home
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Products
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="gradient-id" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                      <stop className='gradient-start' offset="0%" stopColor="#fff" />
                      <stop className='gradient-end' offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
                  <path fillRule="evenodd" clipRule="evenodd" 
                    d="M9.73106 18.8834C9.73106 17.8358 8.90901 16.9949 7.88498 16.9949C6.86097 16.9949 6.0389 17.8358 6.0389 18.8834C6.0389 19.931 6.86097 20.7719 7.88498 20.7719C8.90901 20.7719 9.73106 19.931 9.73106 18.8834ZM22.6536 18.8834C22.6536 17.8358 21.8315 16.9949 20.8075 16.9949C19.7835 16.9949 18.9614 17.8358 18.9614 18.8834C18.9614 19.931 19.7835 20.7719 20.8075 20.7719C21.8315 20.7719 22.6536 19.931 22.6536 18.8834ZM24.4997 2.83252C24.4997 2.31601 24.0814 1.88837 23.5766 1.88837H6.25526C6.11107 1.18018 6.09657 0 5.11591 0H1.42372C0.918956 0 0.500732 0.427865 0.500732 0.944C0.500732 1.46049 0.918956 1.88837 1.42372 1.88837H4.36593L6.91872 14.0299C6.71678 14.4574 6.0389 15.5936 6.0389 16.0509C6.0389 16.5674 6.45715 16.9949 6.96199 16.9949H21.7306C22.2353 16.9949 22.6536 16.5674 22.6536 16.0509C22.6536 15.5347 22.2353 15.1067 21.7306 15.1067H8.46192C8.60611 14.8116 8.80807 14.5017 8.80807 14.1627C8.80807 13.8232 8.6782 13.4546 8.62053 13.1297L23.6776 11.3302C24.1535 11.271 24.4997 10.858 24.4997 10.3857V2.83252Z" 
                    fill="url(#gradient-id)" />
                </svg>
                Cart
              </a>
            </li>
          </ul>
        </nav>
      </header>
      
      <main className="content">
        <section className="intro">
          <div className="intro__content">
            <h1 className="intro__title">Discover the vast <br/> expanses of <span className="intro__title--highlight">space</span></h1>
            <h3 className="intro__text">Where the possibilities are <span className="intro__text--highlight">endless!</span></h3>
            <button type="button" className="button-contained button-contained--large">Learn more</button>
          </div>
        </section>
        <section className="offers">
          <h2 className="offers__title">Offers</h2>
          <div className="offers__content">
            <div className="offers__item offers__item--1">
              <h3 className="offers__item-title">Move the borders <br/> of reality!</h3>
              <p className="offers__item-text">Go on a space adventure - it's possible with us!</p>
              <button type="button" className="button-outlined button-outlined--large">Learn more</button>
            </div>
            <div className="offers__item offers__item--2">
              <h3 className="offers__item-title">Space is not <br/> just stars and <br/> planets</h3>
              <p className="offers__item-text">Go on a space adventure</p>
              <button type="button" className="button-outlined button-outlined--large">Learn more</button>
            </div>
            <div className="offers__item offers__item--3">
              <h3 className="offers__item-title">For those <br/> who dream <br/> of stars</h3>
              <p className="offers__item-text">Our offer: make your dream come true</p>
              <button type="button" className="button-outlined button-outlined--large">Learn more</button>
            </div>
            <div className="offers__item offers__item--4">
              <h3 className="offers__item-title">Fulfill your <br/> fantastic dreams</h3>
              <p className="offers__item-text">Space has never been so close</p>
              <button type="button" className="button-outlined button-outlined--large">Learn more</button>
            </div>
          </div>
        </section>
        <section className="journey">
          <h2 className="journey__title">Embark on a space journey</h2>
          <input type="checkbox" id="toggle" className="journey__checkbox"/>
          <p className="journey__text">
            Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. 
            And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. 
            <span className="journey__text-hidden">
              We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. 
              We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. 
              Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. 
              We offer various options for space excursions.
            </span>
          </p>
          <label htmlFor="toggle" className="journey__label" />
        </section>
      </main>
      
      <footer className="footer">
        <img className="footer__image" src="/assets/images/rocket.png" alt="Rocket" />
        <p className="footer__text">Exciting space adventure!</p>
      </footer>
    </div>
  );
};

export default App;