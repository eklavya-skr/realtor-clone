import { Link, Route, Routes } from 'react-router-dom';
 import Home from "./pages/Home.jsx";
import Offers from './pages/Offers.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
 import Profile from './pages/Profile.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';


function App() {
 
  return (
    <>
    <nav>
      <ul className='flex justify-between'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/signin">signin</Link></li>
        <li><Link to="/signup">signup</Link></li>
        <li><Link to="/profile">profile</Link></li>
        <li><Link to="/forgotpasssword">forgotpasssword</Link></li> 
       
      </ul>
    </nav>
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
