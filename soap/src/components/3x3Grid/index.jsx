import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ColItem from '../Cols';

function Grid3x3() {
    return (
        <Container className='contGrid'>
            <Row className='Row3x3'>
                <ColItem
                    title='Online Registration'
                    desc='Nam pellentesque magna at augue blandit, in eleifend nulla vehicula. Proin maximus porta varius. 
                    Nam vitae neque ut quam egestas.'
                    icon='https://cdn-icons-png.flaticon.com/512/3237/3237420.png'
                />
                <ColItem
                    title='Online Registration'
                    desc='Nam pellentesque magna at augue blandit, in eleifend nulla vehicula. Proin maximus porta varius. 
                    Nam vitae neque ut quam egestas.'
                    icon='https://cdn-icons-png.flaticon.com/512/3237/3237420.png'
                />
                <ColItem
                    title='Online Registration'
                    desc='Nam pellentesque magna at augue blandit, in eleifend nulla vehicula. Proin maximus porta varius. 
                    Nam vitae neque ut quam egestas.'
                    icon='https://cdn-icons-png.flaticon.com/512/3237/3237420.png'
                />
            </Row>
            <Row className='Row3x3'>
                <ColItem
                    title='Online Registration'
                    desc='Nam pellentesque magna at augue blandit, in eleifend nulla vehicula. Proin maximus porta varius. 
                    Nam vitae neque ut quam egestas.'
                    icon='https://cdn-icons-png.flaticon.com/512/3237/3237420.png'
                />
                <ColItem
                    title='Online Registration'
                    desc='Nam pellentesque magna at augue blandit, in eleifend nulla vehicula. Proin maximus porta varius. 
                    Nam vitae neque ut quam egestas.'
                    icon='https://cdn-icons-png.flaticon.com/512/3237/3237420.png'
                />
                <ColItem
                    title='Online Registration'
                    desc='Nam pellentesque magna at augue blandit, in eleifend nulla vehicula. Proin maximus porta varius. 
                    Nam vitae neque ut quam egestas.'
                    icon='https://cdn-icons-png.flaticon.com/512/3237/3237420.png'
                />
            </Row>
        </Container>
    );
}

export default Grid3x3;