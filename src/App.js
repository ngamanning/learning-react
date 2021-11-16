import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Users from "./containers/Users";
import Courses from "./containers/Courses";
import Course from "./containers/Course";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/courses/:id/:title" exact component={Course} />
          <Route path="/courses/:id/" exact component={Course} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/users" exact component={Users} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
