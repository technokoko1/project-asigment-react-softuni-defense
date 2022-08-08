import { Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";

import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateListing from "./components/CreateListing";
import DetailsPage from "./components/DetailsPage";


function App() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/data/catalog')
    .then(res => res.json())
        .then(result => {
            console.log(result);
            setEquipment(result);
        });
}, []);
  return (
    <div id="background">
      <Header/>
      <main>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/catalog' element={<Catalog equipment={equipment}/>}/>
      <Route path='/profile-page' element={<Profile/>}/>
      <Route path='/create-listing' element={<CreateListing/>}/>
      {/* maybe make the profilepage path to be the username  TODO*/}
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/catalog/:id" element={<DetailsPage equipment={equipment}/>} />
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
