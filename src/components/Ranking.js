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
      <h2 className="Margen">First place winners</h2>
      <table className="active">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Player Cart</th>
            <th>Lane</th>
            <th>Kilometers Traveled</th>
          </tr>
        </thead>

        <tbody id="firstPlace">
          {one.map((item, i) => {
            return (
              <tr key={i}>

                <td><span>Player Name</span>{item.namePositionOne}</td>
                <td><span>Player Cart</span>{item.carPositionOne}</td>
                <td><span>Lane</span>{item.lane}</td>
                <td><span>Kilometers Traveled</span>{item.kilometerPositionOne}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>Second place winners</h2>
      <table className="active">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Player Cart</th>
            <th>Lane</th>
            <th>Kilometers Traveled</th>
          </tr>
        </thead>

        <tbody id="secondPlace">
          {two.map((item, i) => {
            return (
              <tr key={i}>
                <td><span>Player Name</span>{item.namePositionTwo}</td>
                <td><span>Player Cart</span>{item.carPositionTwo}</td>
                <td><span>Lane</span>{item.lane}</td>
                <td><span>Kilometers Traveled</span>{item.kilometerPositionTwo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>Third place winners</h2>
      <table className="active">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Player Cart</th>
            <th>Lane</th>
            <th>Kilometers Traveled</th>
          </tr>
        </thead>

        <tbody id="thirdPlace">
          {three.map((item, i) => {
            return (
              <tr key={i}>
                <td><span>Player Name</span>{item.namePositionThree}</td>
                <td><span>Player Cart</span>{item.carPositionThree}</td>
                <td><span>Lane</span>{item.lane}</td>
                <td><span>Kilometers Traveled</span>{item.kilometerPositionThree}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
