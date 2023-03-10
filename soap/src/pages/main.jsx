import ContainerEx from '../components/ContainerInfo';
import CarouselMain from '../components/Carousel';
import CardMain from '../components/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoIcons from '../components/InfosIcons';

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
                    nulla, sed pulvinar arcu. Phasellus lacinia vehicula luctus.'
                    image='pic1'/>
                </Col>
                <Col><CardMain 
                    title='Models Heritage'
                    desc='Aenean ac fringilla nulla, sed pulvinar arcu. Phasellus lacinia vehicula luctus. Donec a euismod eros, 
                    nec porttitor sapien. Proin aliquam et tortor et elementum.'
                    image='pic2' />
                </Col>
                <Col><CardMain 
                    title='Agency Shows'
                    desc='Phasellus lacinia vehicula luctus. Donec a euismod eros, nec porttitor sapien. Proin aliquam et tortor 
                    et elementum. Proin aliquam et tortor et elementum. Aenean ac fringilla nulla, sed pulvinar arcu.'
                    image='pic3' />
                </Col>
            </Row>
        </Container>
        <InfoIcons/>
        </div>
    );
}

export default Main;
