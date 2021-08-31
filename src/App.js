import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from "@material-ui/core"
import Details from './pages/Details';
import Home from "./pages/Home";

const App = () => {
  return (
    <div >
      <CssBaseline />
        <Switch> 
                    <Route exact path="/" component={ Home } />
                    
                    <Route exact path="/:num" component={ Details } />
          </Switch>
      </div>
  
  );
}

export default App;
