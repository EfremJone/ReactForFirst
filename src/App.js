
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetail';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
       <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route path="/Create">
         <Create />
        </Route>
        <Route path="*">
         <NotFound />
        </Route>
        <Route path="/Blog/:id">
         <BlogDetails />
        </Route>
       </Switch>
      </div>
    </div>
    </Router>
  );
}
export default App;
