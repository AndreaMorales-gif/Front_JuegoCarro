import React from 'react';
import '../style/Table.css';

const PodiumTable = ({ SeeRanking, goToRanking, seePodium }) => {
	return (
			<div class="content-alignment">
				<table id="table">
					<thead>
						<tr>
							<th>Player Name</th>
							<th>Player Cart</th>
							<th>Lane</th>
							<th>Kilometers</th>
						</tr>
					</thead>
					<tbody>
						<tr id="one"></tr>
						<tr id="two"></tr>
						<tr id="three"></tr>
					</tbody>
				</table>

				<div className="see-podium" id="see-podium">
					<h2 id="text">Congratulations it was a great race</h2>
					{SeeRanking ? (
						<button className="button" onClick={goToRanking}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Go To Ranking
						</button>
					) : (
						<button className="button" onClick={seePodium}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							See Podium
						</button>
					)}
				</div>
			</div>
	);
};

export default PodiumTable;