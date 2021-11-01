import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import DetailPage from "../views/DetailPage/DetailPage";
import Homepage from "../views/Homepage/Homepage";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/country/:countryCode" component={DetailPage} />
        <Route exact path="/" component={Homepage} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
