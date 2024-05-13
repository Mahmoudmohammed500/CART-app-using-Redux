import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from "../RTK/products-slice";
import { addtocart } from '../RTK/cart-slice';
import '../CSS/products.css'
function Products() {
    const products = useSelector((state) => state.products);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchproducts());
    }, [])

    return (
        <Container className='pt-5'>
            <br></br>
            <Row className='pt-5'>
                {products.map((product) => {
                    return (
                        <Col className='mb-5' style={{ flex:"0 0 0%" }} key={product.id}>
                            <Card style={{ padding:"20px" , height:"500px"  ,width: '16rem'}}>
                                <Card.Img style={{ width:"200px" , height: "250px" }} variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title className='producthead'>{product.title}</Card.Title>
                                    <Card.Text className='mt-4 mb-4 productprice'>
                                       {product.price}$
                                    </Card.Text>
                                    <Button className='d-flex m-auto' variant="primary" onClick={() => dispatch(addtocart(product)) }>Add To Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}

                <br></br>
            </Row>
        </Container>
    )
}
export default Products;