import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";

import Home from "./components/pages/Home";
import GMaps from "./components/pages/GMaps";

function App() {
    return (
        <BrowserRouter>
            <div className={'HomeNavContainer'}>
                <div className={'Nav'}>
                    <Link to="/"><Button className={'Link'}>Home</Button></Link>
                    <Link to="/gmaps"><Button className={'Link'}>Google Maps API</Button></Link>
                    <Link to="/register"><Button className={'Link'}>Register</Button></Link>
                </div>
            </div>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="/gmaps" element={<GMaps/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;