import { Link } from "react-router-dom"

function NavBar() {
    return (
      <section className='navbar'>
        <Link className="link" to="track">Track</Link>
        <Link className="link" to="login">Login</Link>
      </section>
    )
}

export default NavBar