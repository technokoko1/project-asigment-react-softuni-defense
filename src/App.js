import { Route, Routes ,useNavigate} from "react-router-dom";
import { useState,useEffect} from "react";

import { AuthContext } from "./contexts/AuthConext";
import { EquipmentContext } from "./contexts/EqupmentContext";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import CreateListing from "./components/CreateListing";
import DetailsPage from "./components/DetailsPage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import EditPage from "./components/EditPage";

function App() {
 
  const [equipment, setEquipment] = useState([]);
  const [auth, setAuth] = useLocalStorage('auth', {});
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:3030/data/catalog')
    .then(res => res.json())
        .then(result => {
            console.log(result);
            setEquipment(result);
        });
}, []);

const userLogin = (authData) => {
  setAuth(authData);
};

const userLogout = () => {
  setAuth({});
};

const equipmentAdd = (equipmentData) => {
  setEquipment(state => [
      ...state,
      equipmentData,
  ]);

  navigate('/catalog');
};
  return (
    <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
    <div id="background">
      <Header/>
      <EquipmentContext.Provider value={{equipment, equipmentAdd, }}>
      <main>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/catalog' element={<Catalog equipment={equipment}/>}/>
      <Route path='/profile-page' element={<Profile equipment={equipment}/>}/>
      <Route path='/create-listing' element={<CreateListing/>}/>
      {/* maybe make the profilepage path to be the username  TODO*/}
      <Route path='/login' element={<Login/>}/>
      <Route path="/logout" element={<Logout />} />
      <Route path='/register' element={<Register/>}/>
      <Route path="/catalog/details/:id" element={<DetailsPage equipment={equipment}/>} />
      <Route path="/catalog/edit/:id" element={<EditPage equipment={equipment}/>} />
      {/* TODO ADD EDIT AND DELETE */}

      </Routes>

      </main>
      </EquipmentContext.Provider>
      <div className="footerWrap">
    <div className="footer">
      <div className="footerContent">
        <p>Sell your old gym equipment or buy new one!</p>
      </div>     
    </div>
</div>

    </div>


    </AuthContext.Provider>
    );
}

export default App;
