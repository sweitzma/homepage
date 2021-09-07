import React from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import './style.css';

import RoutedTabs from "./Tabs";
import About from "./About"
import CV from "./CV";
import Footer from './Footer';
import { LoremIpsum } from "lorem-ipsum";


const App = () => {
  const lorem = new LoremIpsum();
  return(
    <Router>
      <div className="flex flex-col justify-between w-8/12 xl:w-6/12 h-screen mx-auto">
        {/* header */}
        <div className="flex text-center mx-auto my-4">
          <p className="text-4xl font-serif">
            Samuel Weitzman
          </p>
        </div>
        {/* END header */}

        {/* content */}
        <div className="mb-auto">
          <RoutedTabs
            tabs={ [
              {name: 'About', route: 'about'},
              {name: 'CV', route: 'cv'},
            ] }
          />

          <Switch>
            <Route exact path="/"> <Redirect to="/about" /> </Route>
            <Route path="/about"> <About /> </Route>
            <Route path="/cv"> <CV /> </Route>
          </Switch>
        </div>
        {/* END content */}

        {/* footer */}
        <div className="justify-bottom">
          <Footer />
        </div>
        {/* END footer */}
      </div>
    </Router>
  );
}

export default App;
