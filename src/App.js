import React,{useContext} from "react";
import Dashboard from "./page/dashboard/Dashboard";
import LandingPage from "./page/landingpage/LandingPage"
import {AuthContext} from "./context/Authcontext"
function App() {
  const {loggedin} = useContext(AuthContext)
  return (
    <div className="App">
    {loggedin?<Dashboard/>:<LandingPage/>}
    </div>
  );
}

export default App;
