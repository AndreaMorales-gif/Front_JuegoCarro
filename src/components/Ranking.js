import React, { useEffect, useState } from "react";
import axios from "axios";
import Environment from "../environment/BackendUrl";

const Ranking = () => {
  const [one, setOne] = useState([]);
  const [two, setTwo] = useState([]);
  const [three, setThree] = useState([]);

  const getPodium = () => {
    const RANKINFIRST = axios
      .get(Environment.Api + "/findAllPositionOne")
      .then((res) => {
        setOne(res.data);
        
      })
      .catch((err) => {
        console.error(err.mesagge);
      });

    const RANKINSECOND = axios
      .get(Environment.Api + "/findAllPositionTwo")
      .then((res) => {
        setTwo(res.data);
      })
      .catch((err) => {
        console.error(err.mesagge);
      });

    const RANKINTHIRD = axios
      .get(Environment.Api + "/findAllPositionThree")
      .then((res) => {
        setThree(res.data);
      })
      .catch((err) => {
        console.error(err.mesagge);
      });
  };

  useEffect(() => {
    getPodium();
    console.log(getPodium());
  }, []);

  return (
    <div class="content-alignment">
      <h2 className="Margen">Ganadores en primer puesto</h2>
      <table className="active">
        <thead>
          <tr>
            <th>Nombre de jugador</th>
            <th>Número carro</th>
            <th>Carril</th>
            <th>Kilometros Recorridos</th>
          </tr>
        </thead>

        <tbody id="firstPlace">
          {one.map((item, i) => {
            return (
              <tr key={i}>

                <td><span>Nombre de jugador</span>{item.namePositionOne}</td>
                <td><span>Número carro</span>{item.carPositionOne}</td>
                <td><span>Carril</span>{item.lane}</td>
                <td><span>Kilometros Recorridos</span>{item.kilometerPositionOne}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>Ganadores en segundo puesto</h2>
      <table className="active">
        <thead>
          <tr>
            <th>Nombre de jugador</th>
            <th>Número carro</th>
            <th>Carril</th>
            <th>Kilometros Recorridos</th>
          </tr>
        </thead>

        <tbody id="secondPlace">
          {two.map((item, i) => {
            return (
              <tr key={i}>
                <td><span>Nombre de jugador</span>{item.namePositionTwo}</td>
                <td><span>Número carro</span>{item.carPositionTwo}</td>
                <td><span>Carril</span>{item.lane}</td>
                <td><span>Kilometros Recorridos</span>{item.kilometerPositionTwo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>Ganadores en tercer puestos</h2>
      <table className="active">
        <thead>
          <tr>
            <th>Nombre de jugador</th>
            <th>Número carro</th>
            <th>Carril</th>
            <th>Kilometros Recorridos</th>
          </tr>
        </thead>

        <tbody id="thirdPlace">
          {three.map((item, i) => {
            return (
              <tr key={i}>
                <td><span>Nombre de jugador</span>{item.namePositionThree}</td>
                <td><span>Número carro</span>{item.carPositionThree}</td>
                <td><span>Carril</span>{item.lane}</td>
                <td><span>Kilometros Recorridos</span>{item.kilometerPositionThree}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
