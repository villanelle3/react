import Card from 'react-bootstrap/Card';
import pic1 from '../../pages/images/main/card1.jpg'
import pic2 from '../../pages/images/main/card2.jpg'
import pic3 from '../../pages/images/main/card3.jpg'

function CardMain(props) {
  return (
    <Card style={{ width: `${props.sty}` }} className="mx-auto card_style">
      <Card.Img variant="top" src={
        props.local === 'true' ? 
        props.image === "pic1" ? pic1 : props.image === "pic2" ? pic2 : pic3
        : props.imglink} />
      <Card.Body>
        <Card.Title className='CardTitle'>{props.title}</Card.Title>
        <Card.Text className='CardText'>
          {props.desc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


export default CardMain;