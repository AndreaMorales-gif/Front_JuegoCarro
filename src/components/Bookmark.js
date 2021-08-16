import React from "react";
import "../style/BookMark.css";

const Bookmark = ({ GameOn, careerStarted, startGame }) => {
  return (
    <div className='container'>
			<div className='row d-flex justify-content-center mt-4 bookmark'>
				<div>
					<h3 id='header'>¿Are You Ready?</h3>

					<div id='bookmark'></div>

					<div>
						{GameOn ? (
							<button onClick={careerStarted}>
								Throw Dice <span className='font-weight-bold' id='launchNumber'></span>
							</button>
						) : (
							<button onClick={startGame} >Start Game</button>
						)}
					</div>
				</div>
			</div>
		</div>
  );
};

export default Bookmark;
