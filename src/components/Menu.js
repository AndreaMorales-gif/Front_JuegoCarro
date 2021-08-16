import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Menu.css';

export default function Menu({ children }) {
	const handleShowMenu = () => {
		const BTNBARS = document.getElementById('btnBars');
		const NAVIGATION = document.getElementById('navigation');

		BTNBARS.checked ? NAVIGATION.classList.add('show-menu') : NAVIGATION.classList.remove('show-menu');
	};

	const handleEffectActive = (e) => {
		const BTNBARS = document.getElementById('btnBars');
		const NAVIGATION = document.getElementById('navigation');
		const ACTIVE_CLASS_ELEMENT = document.querySelector('.active');
		const CLICKED_ITEM = e.target.parentNode;

		if (!CLICKED_ITEM.classList.contains('active')) {
			BTNBARS.checked = false;
			NAVIGATION.classList.remove('show-menu');
			ACTIVE_CLASS_ELEMENT.classList.remove('active');
			CLICKED_ITEM.classList.add('active');
		}
	};
	return (
		<React.Fragment>
			<div className="bars">
				<input type="checkbox" id="btnBars" onClick={handleShowMenu} />
				<label htmlFor="btnBars">
					<span id="line1"></span>
					<span id="line2"></span>
					<span id="line3"></span>
				</label>
			</div>

			<ul className="navigation" id="navigation">
				<li>
					<a href="/" className="website-section active">
						<span onClick={handleEffectActive}>Inicio</span>
					</a>
				</li>
				<li>
					<Link to="/Ranking" className="website-section">
						<span onClick={handleEffectActive}>Ranking</span>
					</Link>
				</li>
			</ul>
			{children}
		</React.Fragment>
	);
}
