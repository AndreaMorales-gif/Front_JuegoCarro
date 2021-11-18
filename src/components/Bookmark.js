import React from "react";
import "../style/BookMark.css";

const Bookmark = ({ GameOn, careerStarted, startGame }) => {
  return (
    <div className='container'>
			<div className='row d-flex justify-content-center mt-4 bookmark'>
				<div>
					<h3 id='header'>¿Estás listo?</h3>

					<div id='bookmark'></div>

					<div>
						{GameOn ? (
							<button onClick={careerStarted}>
								Lanzar dado <span className='font-weight-bold' id='launchNumber'></span>
							</button>
						) : (
							<button onClick={startGame} >Iniciar juego</button>
						)}
					</div>
				</div>
			</div>
		</div>
  );
};

export default Bookmark;
