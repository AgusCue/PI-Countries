import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import CreatedActivity from "./components/Created/Created";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/activity">
            <CreatedActivity />
          </Route>
          <Route path="/country/:id">
            <Detail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
