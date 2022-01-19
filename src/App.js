
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NevigationBar from './Components/NevigationBar/NevigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import AdminSlide from './Components/Admin/AdminSlide';
import MainFooter from "./Components/Footer/MainFooter"
import MainNav from './Components/NevigationBar/MainNav';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
           <Router>
     
     <Switch>
       <Route exact path='/'>
       <NevigationBar/>
       <Home/>
       <MainFooter/>
       </Route>
       <Route exact path='/about'>
       <MainNav/>
       <About/>
       <MainFooter/>
       </Route>
       <Route exact path='/admin-web'>
       <AdminSlide/>
       </Route>
     </Switch>
  
     
     </Router>
    </div>
  );
}

export default App;
