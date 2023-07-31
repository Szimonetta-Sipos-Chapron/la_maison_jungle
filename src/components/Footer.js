import {useState} from 'react';
import '../styles/Footer.css';

function Footer() {

    const [inputValue, setInputValue] = useState('');

    function handleInput(e) {
        e.preventDefault()
        setInputValue(e.target.value);
    }

    function handleBlur(e) {
        if(!inputValue.includes('@')) {
            alert("Attention, ceci n'est pas une adresse valide !")
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes
            </div>
            <div className='lmj-footer-elem'>Laissez nous votre mail :</div>
                <input type='text' placeholder='exemple@gmail.com' value={inputValue} onChange={handleInput} onBlur={handleBlur} />
        </footer>
    )
}

export default Footer;