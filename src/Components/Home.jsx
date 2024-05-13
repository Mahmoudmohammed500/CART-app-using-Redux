import { Container } from "react-bootstrap";
import Appcarousel from "./Appcarousel";
import { Link } from "react-router-dom";

function Home() {
    const scrolltop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
          <Appcarousel />
            <Container className="pt-1">
                <h1 className="text-center pt-5 pb-5">All Your Needs Online On One <span>Cart</span></h1>
                <div className="text-center content">
                    <p>Introducing CART, a brand new online shopping experience by bringing Singapore's trusted brands all in one platform.</p>
                    <Link className="nav-link me-3" to="/products" onClick={() => scrolltop()}><h3 style ={{ color:"#2976a9" }}>Receive $50 worth of coupons*!</h3></Link>
                </div>
            </Container>
            <br></br> <br></br> <br></br>

        </>
    )
}
export default Home;