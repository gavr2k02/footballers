import { Footballers, AddFootballer, NotFound, Header } from "./components";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={AddFootballer} />
                <Route path='/footballers' component={Footballers} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
