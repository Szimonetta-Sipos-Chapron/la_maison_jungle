import '../styles/PlantItem.css';
import CareScale from './CareScale';


function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix ! `)
}

function PlantItem({name, cover, id, light, water, price}) {
    return (
            <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
                <span className='lmj-plant-item-price'>{price}€</span>
                <img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover' />
                <div className='lmj-plant-item-section'> 
                <p className='lmj-plant-item-name'>
                    {name}
                </p>
                <div className='lmj-plant-item-care'>
                    <CareScale careType='water' scaleValue={water}/>
                    <CareScale careType='light' scaleValue={light}/>
                </div>
                </div>
            </li>
    )
}

export default PlantItem;