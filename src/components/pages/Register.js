import {Link, Outlet} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarWeek, faHandshake, faList, faListAlt, faBoxes, faTruck, faFileInvoiceDollar} from "@fortawesome/free-solid-svg-icons";

export default function Register() {
    return <>
        <div style={{display: "flex", justifyContent: "center"}}>
            <nav>
                <Link to="activities"><FontAwesomeIcon size={'lg'} icon={faCalendarWeek}/></Link>
                <Link to="offers"><FontAwesomeIcon size={'lg'} icon={faList}/></Link>
                <Link to="orders"><FontAwesomeIcon size={'lg'} icon={faListAlt}/></Link>
                <Link to="partners"><FontAwesomeIcon size={'lg'} icon={faHandshake}/></Link>
                <Link to="items"><FontAwesomeIcon size={'lg'} icon={faBoxes}/></Link>
                <Link to="transfers"><FontAwesomeIcon size={'lg'} icon={faTruck}/></Link>
                <Link to="invoices"><FontAwesomeIcon size={'lg'} icon={faFileInvoiceDollar}/></Link>
            </nav>
        </div>
        <Outlet/>
    </>
}