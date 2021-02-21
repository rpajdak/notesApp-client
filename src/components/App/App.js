import MainPaige from "../MainPaige/MainPaige"
import NewNote from "../NewNote/NewNote";
import AllNotes from "../AllNotes/AllNotes"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
} from "react-router-dom";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPaige}></Route>
                <Route path="/add" exact component={NewNote}></Route>
                <Route path="/all" exact component={AllNotes}></Route>}
            </Switch>
        </Router>
    );
}

export default App;
