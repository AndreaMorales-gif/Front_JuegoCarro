import React, { useState } from 'react';
import PodiumTable from './PodiumTable';
import Environment from '../environment/BackendUrl';
import axios from 'axios';
import Ranking from './Ranking';

let one = {};
let two = {};
let three = {};

const Podium = ({ dataForRanking, km }) => {
	const [SeeRanking, setSeeRanking] = useState(false);
	const [GoToRanking, setGoToRanking] = useState(false);

	const seePodium = () => {
		const TABLE = document.getElementById('table');
		const POSITION_ONE = document.getElementById('one');
		const POSITION_TWO = document.getElementById('two');
		const POSITION_THREE = document.getElementById('three');
		const TEXT = document.getElementById('text');

		TABLE.classList.add('active');

		for (let i = 0; i < 3; i++) {
			if (dataForRanking[i][4] === 1) {
				POSITION_ONE.innerHTML = `
            <td>
              <span>Nombre del jugador</span>
              ${dataForRanking[i][0]}
            </td>
            <td>
              <span>Número carro</span>
              ${dataForRanking[i][1]}
            </td>
            <td>
              <span>Carril</span>
              ${dataForRanking[i][2]}
            </td>
            <td>
              <span>Kilometros</span>
              ${km}
            </td>
            `;
				one = {
					namePositionOne: dataForRanking[i][0],
					carPositionOne: dataForRanking[i][1],
					lane: dataForRanking[i][2],
					kilometerPositionOne: km,
				};

				axios.post(Environment.Api + '/createPositionOne', one)
					.then((res) => {
						console.log(res.data);
					})
					.catch((err) => {
						console.error(err.mesagge);
					});
			} else if (dataForRanking[i][4] === 2) {
				POSITION_TWO.innerHTML = `
        <td>
          <span>Nombre del jugador</span>
          ${dataForRanking[i][0]}
        </td>
        <td>
          <span>Número carro</span>
          ${dataForRanking[i][1]}
        </td>
        <td>
          <span>Carril</span>
          ${dataForRanking[i][2]}
        </td>
        <td>
          <span>Kilometros</span>
          ${km}
        </td>
        `;
				two = {
					namePositionTwo: dataForRanking[i][0],
					carPositionTwo: dataForRanking[i][1],
					lane: dataForRanking[i][2],
					kilometerPositionTwo: km,
				};

				axios.post(Environment.Api + '/createPositionTwo', two)
					.then((res) => {
						console.log(res.data);
					})
					.catch((err) => {
						console.error(err.mesagge);
					});
			} else {
				POSITION_THREE.innerHTML = `
          <td>
            <span>Nombre del jugador</span>
            ${dataForRanking[i][0]}
          </td>
          <td>
            <span>Número carro</span>
            ${dataForRanking[i][1]}
          </td>
          <td>
            <span>Carril</span>
            ${dataForRanking[i][2]}
          </td>
          <td>
            <span>Kilometros</span>
            ${km}
          </td>
        `;
				three = {
					namePositionThree: dataForRanking[i][0],
					carPositionThree: dataForRanking[i][1],
					lane: dataForRanking[i][2],
					kilometerPositionThree: km,
				};

				axios.post(Environment.Api + '/createPositionThree', three)
					.then((res) => {
						console.log(res.data);
					})
					.catch((err) => {
						console.error(err.mesagge);
					});
			}
		}

		setSeeRanking(true);
		TEXT.innerText = '¿Quieres ver el ranking global?';
	};

	const goToRanking = () => setGoToRanking(true);

	return (
		<React.Fragment>
			{GoToRanking ? (
				<Ranking />
			) : (
				<PodiumTable SeeRanking={SeeRanking} goToRanking={goToRanking} seePodium={seePodium} />
			)}
		</React.Fragment>
	);
};

export default Podium;