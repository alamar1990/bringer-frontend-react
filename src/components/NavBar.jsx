import { Link } from "react-router-dom"

function NavBar() {
  console.log({VITE_API_URL: import.meta.env.VITE_API_URL});

  return (
    <section className='navbar'>
      <Link className="link" to="track">Track</Link>
      <Link className="link" to="login">Login</Link>
    </section>
  )
}

export default NavBar