import facebook from '../Image/facebook.svg';
import youtube from '../Image/youtube.svg';
import instagram from '../Image/instagram.svg';
import x from '../Image/x.svg';
import pinterest from '../Image/pinterest.svg';

import './Redes.css';



function Redes() {
  return (
    <div className='redesSociales'>
        <h3 className='footerTitle'>REDES SOCIALES</h3>
        <div className='imagenesRedes'>
            <img src={facebook} alt="logo Facebook" />
            <img src={youtube} alt="logo Youtube" />
            <img src={instagram} alt="logo Instagram" />
            <img src={x} alt="logo X" />
            <img src={pinterest} alt="logo Pinterest" />
        </div>
    </div>
  );
}

export default Redes;