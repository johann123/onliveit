import {XMLParser} from "fast-xml-parser";

let xmlString = '';

fetch(`http://localhost:3000/activities`)
    .then(r => r.text())
    .then(r => xmlString = r)
    .catch(e => console.error(e));

export default function Activites() {
    let parser = new XMLParser();
    let parsedXML = parser.parse(xmlString);
    console.log(parsedXML);
    let activities = parsedXML.activities.activity;
    return <div style={{display: "flex", justifyContent: "center"}}>a
        {Object.entries(activities).map((t, k) => console.log(t[1].when))}
    </div>
}