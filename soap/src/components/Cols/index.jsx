import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ColItem(props) {
    return (
        <Col sm className="mx-auto Row3x3__col">
            <Row>
                <Col sm={2}>
                    <img src={props.icon} alt="Star icon" />
                </Col>
                <Col sm={10}>
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                </Col>
            </Row>
        </Col>
    );
}

export default ColItem;