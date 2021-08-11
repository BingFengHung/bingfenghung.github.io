import './App.css';
import background from './assets/OGA1IP0.jpg'
import Home from './views/home/home';
import Faq from './views/faq/Faq';
import AboutMe from './views/about_me/AboutMe';
import Portfolio from './views/portfolio/Portfolio';
import Header from './components/header/header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/AboutMe">
          <AboutMe/>
         </Route>
        <Route path="/Portfolio">
          <Portfolio/>
         </Route>
        <Route path="/Faq">
          <Faq/>
         </Route>
      </Switch>
      <div id="main">
        <img src={background} alt="playground"/>
      </div>
    </Router>
  );
}

export default App;
