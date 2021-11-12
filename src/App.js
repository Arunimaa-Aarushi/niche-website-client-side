
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import AuthProvider from './components/Context/AuthProvider';
import Explore from './components/Explore/Explore';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">   


      <AuthProvider>
        <BrowserRouter>
        <Switch>
        <Route  exact path="/">
         <Home></Home>
      </Route>
      <Route path="/home">
            <Home></Home> 
          </Route>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route path="/booking/:id">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
