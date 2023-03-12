import Container from 'react-bootstrap/esm/Container';
import Modal1 from '../Modals';

function ContainerEx() {
    return (
        <>
            <header className="App-header">
                <div className='containerinfo'>
                    <h1>The World's Number One Commercial Talent Agency</h1>
                    <Modal1/>
                </div>
                <Container fluid>
                <blockquote class="blockquote text-center blockquote-message">
                    <p class="mb-0 blockquote-message__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                </Container>
            </header>
        </>
    );
}

export default ContainerEx;