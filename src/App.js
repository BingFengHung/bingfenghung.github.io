import './App.css';
import Home from './views/home/home';
import Faq from './views/faq/Faq';
import AboutMe from './views/about_me/AboutMe';
import Portfolio from './views/portfolio/Portfolio';
import Header from './components/header/Header';
import Articles from './views/Articles/Articles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
  return (
    <Router forceRefresh={true}>
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
        <Route path="/Articles">
          <Articles/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
