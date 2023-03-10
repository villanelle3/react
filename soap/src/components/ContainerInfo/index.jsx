import Button from 'react-bootstrap/Button';


function ContainerEx() {
    return (
        <>
            <header className="App-header">
                <div className='flex gap-6 containerinfo'>
                    <h1>The World's Number One Commercial Talent Agency</h1>
                    <Button variant="primary" className='containerinfo__btn'>Find out Now</Button>{' '}
                </div>
            </header>
        </>
    );
}

export default ContainerEx;