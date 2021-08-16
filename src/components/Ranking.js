import React, { useEffect, useState } from "react";
import axios from "axios";
import Environment from "../environment/BackendUrl";

const Ranking = () => {
  const [one, setOne] = useState([]);
  const [two, setTwo] = useState([]);
  const [three, setThree] = useState([]);

  function getPodium() {
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
  }

  useEffect(() => {
    getPodium();
    console.log(getPodium());
  });

  return (
    <div className="container mt-4">
      <h2>First place winners</h2>
      <table className="table table-striped table-bordered mb-5">
        <thead className="bg-primary text-center text-white">
          <tr>
            <th>Player Name</th>
            <th>Player Cart</th>
            <th>Lane</th>
            <th>Kilometers Traveled</th>
          </tr>
        </thead>

        <tbody id="firstPlace">{one.map((item, i) => {
            return(
                <tr key={i}>
                <td>{item.namePositionOne}</td>
                <td>{item.carPositionOne}</td>
                <td>{item.lane}</td>
                <td>{item.kilometerPositionOne}</td>
            </tr>
            )
        })}</tbody>
      </table>

      <h2>Second place winners</h2>
      <table className="table table-striped table-bordered mb-5">
        <thead className="bg-primary text-center text-white">
          <tr>
            <th>Player Name</th>
            <th>Player Cart</th>
            <th>Lane</th>
            <th>Kilometers Traveled</th>
          </tr>
        </thead>

        <tbody id="secondPlace">{two.map((item, i) => {
            return(
                <tr key={i}>
                <td>{item.namePositionTwo}</td>
                <td>{item.carPositionTwo}</td>
                <td>{item.lane}</td>
                <td>{item.kilometerPositionTwo}</td>
            </tr>
            )
        })}</tbody>
      </table>

      <h2>Third place winners</h2>
      <table className="table table-striped table-bordered">
        <thead className="bg-primary text-center text-white">
          <tr>
            <th>Player Name</th>
            <th>Player Cart</th>
            <th>Lane</th>
            <th>Kilometers Traveled</th>
          </tr>
        </thead>

        <tbody id="thirdPlace">{three.map((item, i) => {
            return(
                <tr key={i}>
                <td>{item.namePositionThree}</td>
                <td>{item.carPositionThree}</td>
                <td>{item.lane}</td>
                <td>{item.kilometerPositionThree}</td>
            </tr>
            )
        })}</tbody>
      </table>
    </div>
  );
};

export default Ranking;
