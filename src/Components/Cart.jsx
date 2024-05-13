import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, decrementquantity, deletefromcart, incrementquantity } from "../RTK/cart-slice";
import Swal from "sweetalert2";
function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totlalprice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc
    }, 0)


    const senddatatoapi = () => {
        Swal.fire({
            title: ` Payment is successfully`,
        }).then(() => {
            fetch("https://json-server-for-cart-app-repositry.onrender.com/cart", {
                method: "post",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    cart,
                    totlalprice: totlalprice
                })
            })
                .then((res) => res.json)
                .then(() => dispatch(clear()))
        })
    }
    return (
        <Container className="pt-5">
            <h1 className="text-center pt-5" >Welcome to Your cart</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="text-center">#</th>
                        <th className="text-center">Title</th>
                        <th className="text-center"> Image</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td className="text-center">{product.id}</td>
                                <td className="text-center">{product.title}</td>
                                <td className="text-center"><Image src={product.image} alt={product.title} style={{ width: "30px", Height: "30px" }} /></td>
                                <td className="text-center">{product.price} $</td>
                                <td className="text-center">
                                    <Button className="me-3" variant="info" onClick={() => dispatch(incrementquantity(product))}>+</Button>
                                    {product.quantity}   
                                    <Button className="ms-3" variant="info" onClick={() => dispatch(decrementquantity(product))}>-</Button>
                                </td>
                                <td className="text-center">
                                    <Button variant="danger" onClick={() => dispatch(deletefromcart(product))}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <h3 className="pt-4">Total Price : {totlalprice.toFixed(2)} $</h3>
            <br></br>
            <div className="text-center">
                <Button className="me-5" variant="primary" onClick={() => dispatch(clear())}> Clear Cart</Button>
                <Button variant="success" onClick={() => senddatatoapi()}>Payment</Button>
            </div>
            <br></br> <br></br>
        </Container>
    )
}
export default Cart;