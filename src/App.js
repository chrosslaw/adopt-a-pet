import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/:type/:id">
          <PetDetailsPage />
        </Route>

        <Route path="/search">
          <SearchPage />
        </Route>

        <Route path="/petDetailsNotFound">
          <PetDetailsNotFound />
        </Route>

        <Route path="/:type?">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
