import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerEx() {
    return (
        <Container>
        <Row>
            <Col className='bg-orange-300'>1 of 2</Col>
            <Col className='bg-orange-300'>2 of 2</Col>
        </Row>
        <Row>
            <Col className='bg-orange-300'>1 of 3</Col>
            <Col className='bg-orange-300'>2 of 3</Col>
            <Col className='bg-orange-300'>3 of 3</Col>
        </Row>
        </Container>
    );
}

export default ContainerEx;