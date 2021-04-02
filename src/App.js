import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from "./Components/Navbar";
import {Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import About from "./Components/About";
import Footer from "./Components/footer";

function App() {
    return (
        <>
            <NavbarMenu/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/users' component={Users}/>
                <Route path='/about' component={About}/>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;
