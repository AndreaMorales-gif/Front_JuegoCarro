import React, { useState } from "react";
import axios from "axios";
import Environment from "../environment/BackendUrl";
import "../style/Form.css";

const PLAYERS_DATA = [];

class GameSettings {
  constructor(name, car, kilometer) {
    this.name = name;
    this.car = car;
    this.kilometer = kilometer;
  }

  dataPlayer(amount, kilometer) {
    for (let i = 0; i < amount; i++) {
      let player = document.getElementById(`player${i + 1}`).value;
      let car = document.getElementById(`car${i + 1}`).value;

      const PLAYER = {
        name: player,
        car: car,
        kilometer,
      };

      axios
        .post(Environment.Api + "/createPlayer", PLAYER)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err.mesagge);
        });

      PLAYERS_DATA.push(...[new GameSettings(player, car, kilometer)]);
    }
  }
}

export default function Form({ checkingData }) {
  const [DataFilled, setDataFilled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const NUMBER_PLAYERS = document.getElementById("numberPlayers").value;
    const NAME_AND_CART = document.getElementById("nameAndCart");
    const KILOMETERS_TRACK = document.getElementById("kilometersTrack").value;
    PLAYERS_DATA.push(KILOMETERS_TRACK);

    NAME_AND_CART.classList.add('active');
    for (let i = 0; i < NUMBER_PLAYERS; i++) {
      NAME_AND_CART.innerHTML += `   
      <div class='user-box'>
        <input type="text"
          name="name"
          id="player${i + 1}"
          required 
        />
        <label>Name of player ${i + 1}</label>
      </div>  

    <div class='user-box'>
        <input type="text"
          name="car"
          id="car${i + 1}"
          required
        />
        <label>Player cart</label>
    </div>
    `;
    }

    setDataFilled(true);
  };

  const handleClick = () => {
    const PLAYERS = new GameSettings();
    const NUMBER_PLAYERS = document.getElementById("numberPlayers").value;
    const NAME_AND_CART = document.getElementById("nameAndCart");
    const FORM = document.getElementById("form");
    const KILOMETERS = document.getElementById("kilometersTrack").value;

    PLAYERS.dataPlayer(NUMBER_PLAYERS, KILOMETERS);
    FORM.reset();
    NAME_AND_CART.innerHTML = "";
    setDataFilled(false);
    checkingData(PLAYERS_DATA);
  };

  return (
    <div className="container">
      <div class="form-box">
        <h2>Add Players</h2>
        <form id="form" onSubmit={handleSubmit}>
          <div class="user-box">
            <input
              type="number"
              min="3"
              className="form-control"
              id="numberPlayers"
              required
            />
            <label>Number of players</label>
          </div>
          <div class="user-box">
            <input
              type="number"
              step="0.01"
              className="form-control"
              id="kilometersTrack"
              required
            />
            <label>Kilometers of the track</label>
          </div>
          <div id="nameAndCart"></div>

          {DataFilled ? (
            <button className="button" type="submit" onClick={handleClick}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Start Game
            </button>
          ) : (
            <button className="button" type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Following
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
