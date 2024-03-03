  import { Routes, BrowserRouter, Route } from "react-router-dom";

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
              <Routes>
                <Route exact path="/" element={<Chat/>}/>
                <Route exact path="/rooms/:roomId" element={<Chat/>}/>         
              </Routes>
            </BrowserRouter>
          </div>
        )}
      </div>
    );
  };

  export default App;