export default function Entry(props) {
    return <tr>
        <th scope="row">{props.object.when}</th>
        <td>{props.object.where}</td>
        <td>{props.object.relatedUser}</td>
        <td>{props.object.note}</td>
    </tr>;
}