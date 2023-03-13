import Container from 'react-bootstrap/esm/Container';
import Modal1 from '../Modals';

function ContainerEx(props) {
    return (
        <>
            <header className="App-header">
                <div className='containerinfo'>
                    <h1>The World's Number One Commercial Talent Agency</h1>
                    <Modal1/>
                </div>
                <Container fluid>
                {/* <blockquote className="blockquote text-center blockquote-message">
                    <p className="mb-0 blockquote-message__p">
                        {props.name ? props.name : 'Your Message here'}
                    </p>
                    <footer className="blockquote-footer">
                        Happy client <cite title="Source Title">{props.message ? props.message : 'Your Name'}</cite></footer>
                </blockquote> */}
                </Container>
            </header>
        </>
    );
}

export default ContainerEx;