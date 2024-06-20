import { Button, Card } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';


const App = () => {
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="img/nature-1.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>               
                </Col>
               <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="img/nature-2.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>                
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="img/nature-3.avif" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>      
                </Col>
            </Row>
        </Container>


 
        </>
    )
}

export default App