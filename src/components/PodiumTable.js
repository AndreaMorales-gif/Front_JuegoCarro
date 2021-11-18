import React from 'react';
import '../style/Table.css';

const PodiumTable = ({ SeeRanking, goToRanking, seePodium }) => {
	return (
			<div class="content-alignment">
				<table id="table">
					<thead>
						<tr>
							<th>Nombre del jugador</th>
							<th>Número carro</th>
							<th>Carril</th>
							<th>Kilometros</th>
						</tr>
					</thead>
					<tbody>
						<tr id="one"></tr>
						<tr id="two"></tr>
						<tr id="three"></tr>
					</tbody>
				</table>

				<div className="see-podium" id="see-podium">
					<h2 id="text">Felicidades fue una gran carrera</h2>
					{SeeRanking ? (
						<button className="button" onClick={goToRanking}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Ir a Ranking
						</button>
					) : (
						<button className="button" onClick={seePodium}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Ver Podium
						</button>
					)}
				</div>
			</div>
	);
};

export default PodiumTable;