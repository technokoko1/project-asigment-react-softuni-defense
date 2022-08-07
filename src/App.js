import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateListing from "./components/CreateListing";
function App() {
  return (
    <div id="background">
      <Header/>
      <main>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/profile-page' element={<Profile/>}/>
      <Route path='/create-listing' element={<CreateListing/>}/>
      {/* maybe make the profilepage path to be the username  TODO*/}
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      {/* TODO ADD LOGOUT */}

      </Routes>

      </main>
      <div className="footerWrap">
    <div className="footer">
      <div className="footerContent">
        <p>Sell your old gym equipment or buy new one!</p>
      </div>     
    </div>
</div>

    </div>


  );
}

export default App;
