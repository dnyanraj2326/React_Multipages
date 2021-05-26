import React from 'react';
import { Route, Switch } from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';



const App = () => {
  return(
  <>
<Navbar />
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/service" component={Service} />
  <Route exact path="/about" component={About} />
  <Route exact path="/contact" component={Contact} />
</Switch>

  </>
  );
};


export default App;