import './Footer.css';
import Text from'./Text';
import Preguntas from './Preguntas';
import Decathlon from './Dechatlon';
import Redes from './Redes';
import Partner from './Partner';
import Legal from './Legal';

function Footer() {
  return (
    <footer>
      <div className='superior'>
        <Text title="DECATHLON EMPRESA" info="Quienes somos" info2="Canal ético" info3="Trabaja con nosotros" 
        info4="Sala de prensa" info5="Decathlon afiliados" info6="Decathlon Marketplace" info7="Vende en Decathlon.es" 
        info8="Sostenibilidad" info9="Innovación" />

        <Text title="COMPRA" info="Método de entrega/Gasto de envio" info2="Métodos de pago" info3="Preguntas frecuentes" 
        info4="Envío Canarias/Ceuta/Melilla/Andorra" info5="Single Day" info6="Regalos para deportistas" info7="Rebajas" 
        info8="Botas de fútbol" />

        <Text title="POST-COMPRA" info="Cambios y devoluciones" info2="Factura formato electónico" info3="Tú opinión cuenta" 
        info4="Comunicado seguridad" info5="Tax free" info6="Clasificación de nuestros productos" info7="Servicio de montaje" />

        <Text title="DECATHLON EMPRESA" info="Quienes somos" info2="Canal ético" info3="Trabaja con nosotros" 
        info4="Sala de prensa" info5="Decathlon afiliados" info6="Decathlon Marketplace" info7="Vende en Decathlon.es" 
        info8="Sostenibilidad" info9="Innovación" />

        <Text title="SERVICIOS" info="Alquiler" info2="Soporte técnico" info3="Tarjeta regalo" 
        info4="Clubes, colegios y empresas" info5="Personalización" info6="Financiación" info7="Extensión de garantía" 
        info8="Equipaciones clubes" info9="Postventa" />

        <Text title="VENTAJAS" info="Decathlon Live" info2="Ventajas y servicios" info3="Decathlon segunda vida" 
        info4="Revender mis productos"/>
      </div>

      <div className='medio'>
        <Preguntas />
        <Decathlon />
        <Redes />
        <Partner />
      </div>

      <div className='bajo'>
        <Legal />
      </div>
    </footer>
  );
}

export default Footer;
