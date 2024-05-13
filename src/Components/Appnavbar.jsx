import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from "../Images/logo-removebg-preview.png";
import '../CSS/navbar.css'
function AppNavbar() {
  const cart = useSelector((state) => state.cart);
    return (
        <Navbar fixed="top" expand="lg" className='navbar'>
        <Container>
          <Link className="navbar-brand" to="/"><img style={{ with:"50px" , height:"50px" }} src={logo} alt="" /></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <NavLink className="nav-link me-3" to="/">Home</NavLink>
              <NavLink className="nav-link me-3" to="/products">Products</NavLink>
              <Link  className='relative' to="/cart"><FontAwesomeIcon className="carticon" icon="fa-solid fa-cart-shopping" />
              <span className='Cartlengthnumber'>{cart.length}</span>
              </Link>
                 </Nav>
                   </Navbar.Collapse>
        </Container>
      </Navbar>
    
    )
}
export default AppNavbar;

//  <div className='Cartlengthcontainer '><span className='Cartlengthnumber'>{cart.length}</span></div>
       