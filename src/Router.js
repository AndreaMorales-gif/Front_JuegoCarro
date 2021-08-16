import React, {useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from "./components/Form";
import Game from "./components/Game";
import Menu from "./components/Menu";
import Ranking from "./components/Ranking";

export default function Router() {
  const [DataReady, setDataReady] = useState(false);
  const [PlayersData, setPlayersData] = useState([]);

  const checkingData = (dataCreated) => {
    setDataReady(true);
    setPlayersData(dataCreated);
  };
  return (
    <BrowserRouter>
    <Menu>
      <Switch>
        {DataReady ? (
          <Route exact path="/">
            <Game PlayersData={PlayersData} />
          </Route>
        ) : (
          <Route exact path="/">
            <Form checkingData={checkingData} />
          </Route>
        )}
        <Route exact path="/Ranking" component={Ranking} />
        
      </Switch>
      </Menu>
  </BrowserRouter>
  );
}