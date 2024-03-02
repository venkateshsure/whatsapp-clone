  import { Switch, BrowserRouter, Route } from "react-router-dom";

  import "./App.css";

  import Sidebar from "./components/Sidebar";

  import Chat from "./components/Chat";

  import Login from "./components/Login";
  import { useStateValue } from "./StateProvider";

  const App = () => {
    const [{ user }] = useStateValue();
    // const [{ user }, dispatch] = useStateValue();

    return (
      <div className="app">
        {!user? (
          <Login />
        ) : (
          <div className="app_body">
            <BrowserRouter>
            <Sidebar />
              <Switch>
                <Route exact path="/" component={Chat}/>
                <Route exact path="/rooms/:roomId" component={Chat}/>         
              </Switch>
            </BrowserRouter>
          </div>
        )}
      </div>
    );
  };

  export default App;