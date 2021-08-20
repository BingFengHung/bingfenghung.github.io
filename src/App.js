import './App.css';
import Home from './views/home/home';
import Faq from './views/faq/Faq';
import AboutMe from './views/about_me/AboutMe';
import Portfolio from './views/portfolio/Portfolio';
import Github from './views/Github/Github';
import GitContent from './views/GitContent/GitContent';
import Header from './components/header/Header';
import Articles from './views/Articles/Articles';
import TodoList from './views/TodoList/TodoList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Documents from './views/Documents/Documents';

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
        <Route path="/Github">
          <Github/>
        </Route>
        <Route path="/Articles">
          <Articles/>
        </Route>
        <Route path="/GitContent">
          <GitContent/>
        </Route>
        <Route path="/Documents">
          <Documents/>
        </Route>
        <Route path="/TodoList">
          <TodoList/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
