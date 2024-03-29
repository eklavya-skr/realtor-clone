
import { Link } from 'react-router-dom'
import { REALTOR_LOGO } from '../constants'
// import Button from "./Button.jsx";
const Header = () => {
  return (
   
    <nav>
      <ul className='w-full flex gap-96 justify-between border-b-2 shadow-md border-zinc-100 items-center py-5 text-red-600 font-semibold'>
        <div className='logo w-1/12 ml-10'>
        <li><Link to="/">
        <img src={REALTOR_LOGO} alt='brand-logo' /></Link></li>
        </div>
        <div className='menu-options flex gap-16 mr-10'>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/signin">sign in</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/forgotpasssword">Forgot Passsword</Link></li> 
        </div>
       
      </ul>
    </nav>
     
  )
}

export default Header