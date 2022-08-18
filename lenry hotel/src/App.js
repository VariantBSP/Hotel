import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import About from './About';
import Booking from './Booking';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/Create'>
              <Create />
            </Route>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/blogs/:id'>
               <BlogDetails />
            </Route>
            <Route path='/Booking'>
              <Booking />
            </Route>
            <Route path="*">
               <NotFound />
            </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
