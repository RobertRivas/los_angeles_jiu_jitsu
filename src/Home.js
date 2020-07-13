import React from 'react'
import openMat from './assets/openMat.jpg'
import adultBeginners from './assets/adultBeginners.jpg'
import logo from './assets/lajjlogo.png'
import {Card, CardGroup} from "react-bootstrap";
import MapSection from "./components/map/Map";

const location = {
    address: '4743 East Cesar E Chavez Avenue, Los Angeles, CA 90022',
    lat: 34.040915,
    lng: -118.163354,
}

export const Home = () => (
    <div>
        <h1>Welcome To Los Angeles Jiu-Jitsu</h1>
        {/*Need to component out these cards*/}
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={ logo } />
                <Card.Body>
                    <Card.Title>Kids Jiu-Jitsu</Card.Title>
                    <Card.Text>
                        Saturday 9:00AM-9:45AM
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Come by and Try A Class!</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={ adultBeginners } />
                <Card.Body>
                    <Card.Title>Adult Beginners Jiu-Jitsu</Card.Title>
                    <Card.Text>
                        Adult Beginners 10:00AM-11:00AM
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Come by and Try A Class!</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={ openMat }  />
                <Card.Body>
                    <Card.Title>Open Mat/Sparring</Card.Title>
                    <Card.Text>
                        Open Mat 11:00AM-12:30PM
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Come by and Try A Class!</small>
                </Card.Footer>
            </Card>
        </CardGroup>
        <MapSection location={location} zoomLevel={17} />
    </div>
)