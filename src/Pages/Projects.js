import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {
  return (<main className="container">
    <h2 className="subtitle">Projects</h2>
    <section className='d-flex flex=wrap justify-content-center'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + 'pwgen.png'} />
      <Card.Body>
        <Card.Title>Password Generator</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><a className="text-white" href="">Github</a></Button>
        <Button variant="primary"><a href="">Live</a></Button>
      </Card.Body>
    </Card>
    </section>
</main>  );
}

export default Projects;