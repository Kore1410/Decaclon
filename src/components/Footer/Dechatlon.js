import './Dechatlon.css';
import apple from '../Image/apple.svg'
import android from '../Image/android.svg'

function Decathlon() {
  return (
    <div className='PreguntasMedio'>
        <h3 className='footerTitle'>APP DECHATLON</h3>
        <div className='tiendas'>
          <img src={apple} className='imageTienda' alt="logotipo Apple" />
          <p>Apple Store</p> 
          <br/>
          <img src={android} className='imageTienda' alt="logotipo Android" />
          <p>Google Play</p>
        </div>
    </div>
  );
}

export default Decathlon;