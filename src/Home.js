import React from 'react'
import adultBeginners from'./assets/adultBeginners.jpg'
import {Card, CardGroup} from "react-bootstrap";

export const Home = () => (
    <div>
        <h1>Welcome To Los Angeles Jiu-Jitsu</h1>

        <CardGroup>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={ adultBeginners } />
                <Card.Body>
                    <Card.Title>Adult Beginners</Card.Title>
                    <Card.Text>
                        Adult Beginners
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Try A Class!</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    </div>
)