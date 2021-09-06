import React from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './style.css';

import RoutedTabs from './Tabs';
import { LoremIpsum } from "lorem-ipsum";


const App = () => {
  const lorem = new LoremIpsum();
  return(
    <Router>
      <div className="flex justify-center w-4/12 mx-auto">
        <p className="text-4xl font-serif">
          Sam Weitzman
        </p>
      </div>

      <RoutedTabs
        tabs={ [
          {name: 'About', route: 'about'},
          {name: 'CV', route: 'cv'},
        ] }
      />

      <Switch>
        <Route path="/about">
          <div className="w-8/12 mx-auto p-4">
          { lorem.generateParagraphs(8) }
          </div>

          <div className="text-center w-6/12 mx-auto p-4 text-4xl font-sarif">
            "A quote is nothing without context."
          </div>

          <div className="w-8/12 mx-auto p-4">
          { lorem.generateParagraphs(2) }
          </div>
        </Route>
        <Route path="/cv">
          <div className="w-8/12 mx-auto p-4">
          { lorem.generateParagraphs(1) }
          </div>

          <div className="text-center w-6/12 mx-auto p-4 text-4xl font-sarif">
            "A new day a new quote."
          </div>

          <div className="w-8/12 mx-auto p-4">
          { lorem.generateParagraphs(2) }
          </div>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
