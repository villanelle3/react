import Container from 'react-bootstrap/Container';

function TitleSubtitle(props) {
    return (
    <Container fluid className={`containerInfo ${props.bg}`}>
        <h1>{props.title}</h1>
        <hr />
        <p>{props.subtitle}</p>
    </Container>
    );
}

export default TitleSubtitle;