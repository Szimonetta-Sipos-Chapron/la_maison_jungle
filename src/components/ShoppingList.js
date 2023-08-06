import '../styles/ShoppingList.css';
import { useState } from 'react';
import {plantList} from '../datas/plantList.js';
import PlantItem from './PlantItem';
import Categories from './Categories';

function ShoppingList({cart, setCart}) {

    const [activeCategory, setActiveCategory] = useState('');

    const categories = plantList.reduce(
        (acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category), [])

function addToCart(name, price) {
    const currentPlantInCart = cart.find((plant) => plant.name === name)
    if (currentPlantInCart) {
        const filteredCurrentPlant = cart.filter((plant) => plant.name !== name)
        setCart([...filteredCurrentPlant, {name, price, amount: currentPlantInCart.amount +1}
        ])
    } else {
        setCart([...cart, {name, price, amount: 1}])
    }
}

    return (
        <div className='lmj-plant-content'>
            <Categories 
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, water, light, price, category}) => 
                    !activeCategory || activeCategory === category ? (
                    <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} price={price} />
                        <button className='lmj-button-add-to-cart' onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                ) : null
                )}
            </ul>
        </div>
    );
}

export default ShoppingList;