import './Preguntas.css';
import chat from '../Image/chat.svg';

function Preguntas() {
  return (
    <div className='PreguntasMedio'>
        <h3 className='footerTitle'>PREGÚNTANOS LO QUE QUIERAS</h3>
        <div className='horario'>
          <img src={chat} className='image' alt="imagen de un chat" />
          <div className='texto'>
            <p>Lunes a sábado, 10:00h a 22:00h</p>
            <p className='iniciarChat'>Iniciar chat</p>
          </div>
        </div>
    </div>
  );
}

export default Preguntas;