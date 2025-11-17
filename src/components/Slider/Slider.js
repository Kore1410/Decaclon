import Article from './Article';
import './Slider.css';

function Slider() {
  return (
    <section className='slider'>
        <h2 className='sectionTitle'>Top ventas cerca de ti</h2>
        <div className='tarjetas'>
            <Article /> 
        </div>
        
    </section>
  );
}

export default Slider;
