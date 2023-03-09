import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function ContainerEx() {
    return (
        <>
            <header className="App-header">
                <div className='flex gap-6 containerinfo'>
                    <h1>The World's Number One Commercial Talent Agency</h1>
                    <Button variant="primary" className='containerinfo__btn'>Find out Now</Button>{' '}
                </div>
            </header>
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
        </>
    );
}

export default ContainerEx;