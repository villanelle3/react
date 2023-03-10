import Card from 'react-bootstrap/Card';

function CardMain(props) {
  return (
    <Card style={{ width: '22rem' }} className="mx-auto">
      <Card.Img variant="top" src={require(`../../pages/images/main/card1.jpg`)} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


export default CardMain;