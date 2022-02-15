import {XMLParser} from "fast-xml-parser";
import Entry from "../activities/entry";

let xmlString = '';

fetch(`http://localhost:3000/activities`)
    .then(r => r.text())
    .then(r => xmlString = r)
    .catch(e => console.error(e));

export default function Activites() {
    let parser = new XMLParser();
    let parsedXML = parser.parse(xmlString);
    let activities = {};
    if (parsedXML.hasOwnProperty('activities')) {
        activities = parsedXML.activities.activity;
    }
    return <table className={'table'}>
        <thead>
        <tr>
            <th scope="col">Mikor</th>
            <th scope="col">Hol</th>
            <th scope="col">Felhasználó</th>
            <th scope="col">Megjegyzés</th>
        </tr>
        </thead>
        <tbody>
        {Object.entries(activities).map((t, k) => <Entry object={t[1]}/>)}
        </tbody>
    </table>
}