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
import OSM from "./components/pages/OSM";

function App() {
    return (
        <BrowserRouter>
            <div className={'HomeNavContainer'}>
                <div className={'Nav'}>
                    <Link to="/"><Button className={'Link'}>Főoldal</Button></Link>
                    <Link to="/osm"><Button className={'Link'}>Open Street Maps API</Button></Link>
                </div>
            </div>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="/osm" element={<OSM/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;