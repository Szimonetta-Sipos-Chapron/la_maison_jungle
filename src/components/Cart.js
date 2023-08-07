import { useState, useEffect } from 'react';
import '../styles/Cart.css';

function Cart({cart, setCart}) {
	const [isOpen, setIsOpen] = useState(true);
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price, 0
	)

	useEffect(() => {
		if (total !== 0) {
			alert(`LMJ: ${total}€ à payer`);
		}
	}, [total]);

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2 className='lmj-cart-title'>Panier</h2>
					<ul>
						{cart.map(({name, price, amount}, index) => (
								<div key={`${name}-${index}`}>
									{name} {price}€ x {amount}
								</div>
						))}
					</ul>
					<h3 className='lmj-cart-subtitle'>Total : {total}€</h3>
					<button onClick={() => setCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	);
}

export default Cart;