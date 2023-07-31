import sun from '../assets/sun.png';
import water from '../assets/water.png';
import '../styles/CareScale.css';

const quantity = {
    1 : 'peu',
    2 : 'modérément',
    3 : 'beucoup',
}

function CareScale({scaleValue, careType}) {

    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? ( 
        <img src={sun} alt='sun' className='icon-sun'/> 
        ) : ( 
        <img src={water} alt='water' className='icon-water'/> 
        )

    return (
    <div onClick={() => 
        alert (`Cette plante requie ${quantity[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'arrosage"}`)}>
        {range.map((r) => 
            scaleValue >= r ? <span key={r.toString()}> {scaleType} </span> : null
        )}
    </div>
    )
}

export default CareScale;