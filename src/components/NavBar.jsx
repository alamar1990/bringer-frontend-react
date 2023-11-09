import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import useAuthStore from '../store/authStore'
import useAuth from "../hooks/useAuth";

function NavBar() {
  const { handleLogout } = useAuth();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  console.log({isAuthenticated});

  return (
    <section className='navbar'>
      
      {
        isAuthenticated && <a className="link" onClick={handleLogout}>Logout</a>
      }
      
    </section>
  )
}

export default NavBar