import MainPaige from "../MainPaige/MainPaige"
import NewNote from "../NewNote/NewNote";
import AllNotes from "../AllNotes/AllNotes"
import AllDeletedNotes from "../AllDeletedNotes/AllDeletedNotes"
import EditNote from "../EditNote/EditNote"
import HistoryOfUpdatedNote from "../HistoryOfUpdatedNote/HistoryOfUpdatedNote";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPaige}></Route>
                <Route path="/add" exact component={NewNote}></Route>
                <Route path="/all" exact component={AllNotes}></Route>
                <Route path="/deleted" exact component={AllDeletedNotes}></Route>
                <Route path="/history" exact component={HistoryOfUpdatedNote}></Route>
                <Route path="/edit" exact component={EditNote}></Route>
            </Switch>
        </Router>
    );
}

export default App;
