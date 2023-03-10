import ContainerEx from '../components/ContainerInfo';
import CarouselMain from '../components/Carousel';
import CardMain from '../components/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main() {
    return (
        <div className="App">
        <CarouselMain />
        <ContainerEx />
        <Container className='containerCards'>
            <Row>
                <Col><CardMain 
                    title='Regular Events'
                    desc='Donec a euismod eros, nec porttitor sapien. Proin aliquam et tortor et elementum. Aenean ac fringilla 
                    nulla, sed pulvinar arcu. Phasellus lacinia vehicula luctus.'/>
                </Col>
                <Col><CardMain 
                    title='Models Heritage'
                    desc='Aenean ac fringilla nulla, sed pulvinar arcu. Phasellus lacinia vehicula luctus. Donec a euismod eros, 
                    nec porttitor sapien. Proin aliquam et tortor et elementum.' />
                </Col>
                <Col><CardMain 
                    title='Agency Shows'
                    desc='Phasellus lacinia vehicula luctus. Donec a euismod eros, nec porttitor sapien. Proin aliquam et tortor 
                    et elementum. Proin aliquam et tortor et elementum. Aenean ac fringilla nulla, sed pulvinar arcu.' />
                </Col>
            </Row>
        </Container>
        
        </div>
    );
}

export default Main;
