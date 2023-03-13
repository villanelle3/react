import ContainerEx from '../components/ContainerInfo';
import CarouselMain from '../components/Carousel';
import CardMain from '../components/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleSubtitle from '../components/TitleSubtitle';
import Grid3x3 from '../components/3x3Grid';

function Main() {
    return (
        <div className="App">
            <CarouselMain />
            <ContainerEx />
            <Container className='containerCards'>
                <Row>
                    <Col><CardMain 
                        local = 'true'
                        sty = '22rem'
                        title='Regular Events'
                        desc='Donec a euismod eros, nec porttitor sapien. Proin aliquam et tortor et elementum. Aenean ac fringilla 
                        nulla, sed pulvinar arcu. Phasellus lacinia vehicula luctus.'
                        image='pic1'/>
                    </Col>
                    <Col><CardMain
                        local = 'true'
                        sty = '22rem' 
                        title='Models Heritage'
                        desc='Aenean ac fringilla nulla, sed pulvinar arcu. Phasellus lacinia vehicula luctus. Donec a euismod eros, 
                        nec porttitor sapien. Proin aliquam et tortor et elementum.'
                        image='pic2' />
                    </Col>
                    <Col><CardMain 
                        local = 'true'
                        sty = '22rem'
                        title='Agency Shows'
                        desc='Phasellus lacinia vehicula luctus. Donec a euismod eros, nec porttitor sapien. Proin aliquam et tortor 
                        et elementum. Proin aliquam et tortor et elementum. Aenean ac fringilla nulla, sed pulvinar arcu.'
                        image='pic3' />
                    </Col>
                </Row>
            </Container>
            <TitleSubtitle
                bg='bg-green-50'
                id='title1'
                title='Amazing Specialities Of Our Agency'
                subtitle='Sed egestas, sapien a pellentesque euismod, odio nibh dignissim nulla, euismod lacinia arcu turpis gravida
                tortor. Donec tempor enim ut sollicitudin pulvinar. Nulla sit amet blandit lectus.'
            />
            <Container fluid className='bg-green-50'>
                <Grid3x3/>
            </Container>
            <Container fluid className='bg-transparent container2'>
                <TitleSubtitle
                    bg='bg-transparent'
                    id='title2'
                    title='Amazing Team Of Agency'
                    subtitle='Sed egestas, sapien a pellentesque euismod, odio nibh dignissim nulla, euismod lacinia arcu turpis gravida
                    tortor. Donec tempor enim ut sollicitudin pulvinar. Nulla sit amet blandit lectus.'
                />
                <Container className='containerCards'>
                    <Row>
                        <Col><CardMain 
                            sty = '25rem'
                            local = 'false'
                            imglink = 'https://images.unsplash.com/photo-1531537571171-a707bf2683da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                            title='Regular Events'
                            desc='Donec a euismod eros, nec porttitor sapien. Proin aliquam et tortor et elementum. Aenean ac fringilla 
                            nulla, sed pulvinar arcu. Phasellus lacinia vehicula.'
                            />
                        </Col>
                        <Col><CardMain
                            sty = '25rem'
                            local = 'false'
                            imglink = 'https://images.unsplash.com/photo-1531535807748-218331acbcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                            title='Models Heritage'
                            desc='Aenean ac fringilla nulla, sed pulvinar arcu. Phasellus lacinia vehicula luctus. Donec a euismod eros, 
                            nec porttitor sapien. Proin aliquam et tortor.'
                            />
                        </Col>
                        <Col><CardMain 
                            sty = '25rem'
                            local = 'false'
                            imglink = 'https://images.unsplash.com/photo-1531496681078-27dc2277e898?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                            title='Agency Shows'
                            desc='Phasellus lacinia vehicula luctus. Donec a euismod eros, nec porttitor sapien. Proin aliquam et tortor 
                            et elementum. Proin aliquam et tortor.'
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Main;
