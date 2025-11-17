import './Text.css';

function Text({title, info, info2, info3, info4, info5, info6,info7, info8, info9}) {
  return (
    <div className='text'>
        <h3 className='footerTitle'>{title}</h3>
        <p className='info'>{info}</p>
        <p className='info'>{info2}</p>
        <p className='info'>{info3}</p>
        <p className='info'>{info4}</p>
        <p className='info'>{info5}</p>
        <p className='info'>{info6}</p>
        <p className='info'>{info7}</p>
        <p className='info'>{info8}</p>
        <p className='info'>{info9}</p>

    </div>
  );
}

export default Text;