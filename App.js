import { Fragment } from "react";
import "./App.css";
import Login from "./component/Login";
import Header from "./component/Header";
import WelcomePage from "./component/Welcome";
import ChangePassword from "./component/ChangePassword";
import { Switch ,Route,Redirect} from "react-router-dom";
import ComposeMail from "./component/ComposeMail"
import { useSelector } from "react-redux"
import Inbox from "./component/Inbox";


function App() {

  const isLoggedin = useSelector(state => state.auth.isAuthenticated)


  return (
    <Fragment>
      <Header />
      <Switch>
      <Route path='/' exact>
        <Redirect to='/login' />
      </Route>
       <Route path="/login" >
         <Login />
       </Route>
       <Route path='/changepassword'>
        <ChangePassword />
       </Route>
        {isLoggedin && <Route path="/welcomepage">
         <WelcomePage />
       </Route> }
     {isLoggedin &&  <Route path="/composemail">
         <ComposeMail />
       </Route> }
    {isLoggedin &&   <Route path="/inbox">
         <Inbox />
       </Route>  }
    <Route path='*'>
      Page Not Found
    </Route>
     </Switch>
    </Fragment>
  );
}

export default App;
