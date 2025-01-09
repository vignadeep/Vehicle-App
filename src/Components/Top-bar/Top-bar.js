import './Top-bar.css';

/**
* Topbar funtion
* topbar - top bar that contains title, profile, language & metric
* @returns {HTML} 
*/ 
function Topbar() {
  return (
      <div className="top-bar red-border">
        <div className='top-title-bar'>
          MAIA
        </div>
        <div className='profile-bar'>
          <img className='image' src="germany.png" alt="Avatar"></img>
          <img className='image' src="person.png" alt="Avatar"></img>
        </div>
        <div className='language-bar'>
          GER
        </div>
        <div className='metric-bar'>
          KM
        </div>
      </div>
  );
}

export default Topbar;