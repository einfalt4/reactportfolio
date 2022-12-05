import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {
  return (<main className="container">
    <h2 className="subtitle">Projects</h2>
    <section className='row'>
      <div class="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + 'images/pwgen.png'} />
      <Card.Body>
        <Card.Title>Password Generator</Card.Title>
        <Card.Text>
        This is a password generator that provides a random password based on your personal preference of upper case, lower case, special character, and number criteria. It will generate a password between 8 and 128 characters based on the user's preference of the above criteria
        </Card.Text>
        <Button variant="primary"><a className="text-white" href="https://github.com/einfalt4/password-thingy-thing">Github</a></Button>
        <Button variant="warning"><a className="text-white" href="https://einfalt4.github.io/password-thingy-thing/">Live</a></Button>
      </Card.Body>
    </Card>
    </div>
      <div class="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + 'images/weathery12.png'} />
      <Card.Body>
        <Card.Title>Weather Dashboard</Card.Title>
        <Card.Text>
        This is a weather forecast application that allows a user to search the forecast by city. It provides temperature, humidity, wind speed, and UV index.
        </Card.Text>
        <Button variant="primary"><a className="text-white" href="https://github.com/einfalt4/weatheryfeathery">Github</a></Button>
        <Button variant="warning"><a className="text-white" href="https://einfalt4.github.io/weatheryfeathery/">Live</a></Button>
      </Card.Body>
    </Card>
    </div>
    
      <div class="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + 'images/Eventmaster-1.png'} />
      <Card.Body>
        <Card.Title>Event Master</Card.Title>
        <Card.Text>
        Event Master is an all-inclusive website through which individuals can easily search for events occurring near them. When a user loads the website, pictures of events and a search box appear. Once a user types in a zip-code or city name, a map displays events using pins. In addition, a list of events appears underneath. This list includes the event name, date, time, location, and link to purchase tickets. Users also have the option to filter results based on what type of event they are looking for. 
        </Card.Text>
        <Button variant="primary"><a className="text-white" href="https://github.com/hasnafar/ideal-event-master">Github</a></Button>
        <Button variant="warning"><a className="text-white" href="https://hasnafar.github.io/ideal-event-master/">Live</a></Button>
      </Card.Body>
    </Card>
    </div>
    
      <div class="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + 'images/codequiz.png'} />
      <Card.Body>
        <Card.Title>Code Quiz</Card.Title>
        <Card.Text>
        Five timed questions that keep score and tell you if you are correct or incorrect. This app utilizes Javascript, CSS, HTML.
        </Card.Text>
        <Button variant="primary"><a className="text-white" href="https://github.com/einfalt4/codeyquizy">Github</a></Button>
        <Button variant="warning"><a className="text-white" href="https://einfalt4.github.io/codeyquizy/">Live</a></Button>
      </Card.Body>
    </Card>
    </div>
    </section>
</main>  );
}

export default Projects;