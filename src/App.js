
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./components/Home"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Main from "./components/Main"

function App() {


  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' component={SignUp}></Route>
        <Route exact path='/main' component={Main}></Route>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
