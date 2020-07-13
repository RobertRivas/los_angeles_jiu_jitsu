import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { classDetails} from "./components/classInfoCards";
import MapSection from './components/map/Map'; //


const location = {
    address: '4741 East Cesar E Chavez Avenue ',
    lat: 34.040800,
    lng: -181.163354,
}

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavigationBar />
                    <Jumbotron />


                    <Layout>
                        <classDetails />


                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route component={NoMatch} />
                        </Switch>

                    </Layout>
                </Router>
                {/*<MapSection location={location} zoomLevel={17} />*/}
                <footer className='footer mt-auto py-3 bg-dark text-white'>
                    <div className='container'>Website Powered By LAMT©</div>
                </footer>
            </React.Fragment>
        );
    }
}

export default App;
