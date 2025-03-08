
const Filas = ({ usuarios }) => {

    return (
        <tr className="bg-white border-b border-gray-200">
            <th className="px-6 py-4">{usuarios.nombre}</th>
            <td className="px-6 py-4">{usuarios.apellido}</td>
            <td className="px-6 py-4">{usuarios.edad}</td>
            <td className="px-6 py-4">{usuarios.puesto}</td>
        </tr>
    )
    
}

export default Filas