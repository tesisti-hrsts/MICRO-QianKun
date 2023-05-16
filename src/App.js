import { useState } from 'react';
import logoReact from "./assets/react.png";
import './App.css';

function App() {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => setClicked(!clicked);

	const handleButtonPlus = () => {
		window.dispatchEvent(new CustomEvent('buttonPlus'));
	}

	const handleButtonMinus = () => {
		window.dispatchEvent(new CustomEvent('buttonMinus'));
	}

	return (
		<div id='back_app1'>
			<div id='divPlusMinus_app1'>
				<button type='button' id='buttonPlus_app1' onClick={handleButtonPlus}> + </button>
				<button type='button' id='buttonMinus_app1' onClick={handleButtonMinus}> - </button>
			</div>
			<button type='button' id='button_app1' onClick={handleClick}> Click me! </button>
			<div id='imageDiv_app1'> {clicked ? <img id='img_app1' src={logoReact} alt="React Logo" /> : ""} </div>
		</div>
	);
}

export default App;
