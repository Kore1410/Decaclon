import appDays from '../Image/appDays.png';
import './Banner.css'

function Banner() {
    return (
        <section className="banner">
            <img src={appDays} className='image' alt="banner" />
        </section>
    );
  }
  
  export default Banner;
  