import { Switch, BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Sidebar from "./components/Sidebar";

import Chat from "./components/Chat";

import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

const App = () => {
  // const [{ user }] = useStateValue();
  // const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {false ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar/>
          <Chat/>
        </div>
      )}
    </div>
  );
};

export default App;

/* <BrowserRouter>
            <Switch>
              <Sidebar />
              <Route exact path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route exact path="/">
                <Chat />
              </Route>
            </Switch>
          </BrowserRouter> */