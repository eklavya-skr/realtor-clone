import { Route, Routes } from 'react-router-dom';
 import Home from "./pages/Home.jsx";
import Offers from './pages/Offers.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
 import Profile from './pages/Profile.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Header from './components/Header.jsx';
import { REALTOR_LOGO } from './constants/index.js';


function App() {
 
  return (
    <>
    <Header />
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/offers" element={<Offers />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/forgot" element={<ForgotPassword />} /> 
    </Routes>
    </>

  );
}

export default App;
