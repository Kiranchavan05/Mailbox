import { Fragment } from "react";
import "./App.css";
import Login from "./component/Login";
import Header from "./component/Header";
import WelcomePage from "./component/Welcome";
import ChangePassword from "./component/ChangePassword";
import { Switch ,Route,Redirect} from "react-router-dom";


function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/changepassword">
          <ChangePassword />
        </Route>
        <Route path='/welcomepage'>
        <WelcomePage /> 
       </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
