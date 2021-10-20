import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blog from './Pages/Blog';
import Donate from './Pages/Donate';
import Gallery from './Pages/Gallery';
import Memorial from './Pages/Memorial';
import Home from './Pages/Home';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation />
            <Switch>
              <Route path="/blog" component={Blog} />
              <Route path="/donate" component={Donate} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/memorial" component={Memorial} />
              <Route path="/" component={Home} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
