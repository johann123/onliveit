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
import Register from "./components/pages/Register";
import Activites from "./components/pages/Activites";
import Offers from "./components/pages/Offers";
import Orders from "./components/pages/Orders";
import NoMatch from "./components/pages/NoMatch";
import Partners from "./components/pages/Partners";
import Items from "./components/pages/Items";
import Invoices from "./components/pages/Invoices";
import Transfers from "./components/pages/Transfers";

function App() {
    return (
        <BrowserRouter>
            <div className={'HomeNavContainer'}>
                <div className={'Nav'}>
                    <Link to="/"><Button className={'Link'}>Főoldal</Button></Link>
                    <Link to="/osm"><Button className={'Link'}>OSM API</Button></Link>
                    <Link to="/register"><Button className={'Link'}>Nyilvántartás (2. feladat)</Button></Link>
                </div>
            </div>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="/osm" element={<OSM/>}/>
                    <Route path="/register" element={<Register/>}>
                        <Route index element={<Activites/>}/>
                        <Route path="activities" element={<Activites/>}/>
                        <Route path="offers" element={<Offers/>}/>
                        <Route path="orders" element={<Orders/>}/>
                        <Route path="partners" element={<Partners/>}/>
                        <Route path="items" element={<Items/>}/>
                        <Route path="transfers" element={<Transfers/>}/>
                        <Route path="invoices" element={<Invoices/>}/>
                        <Route path="*" element={<NoMatch/>}/>
                    </Route>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;