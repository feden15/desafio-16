
const Filas = ({ productos }) => {

    return (
        <tr className="bg-white border-b border-gray-200">
            <th className="px-6 py-4">{productos.nombre}</th>
            <td className="px-6 py-4">{productos.apellido}</td>
            <td className="px-6 py-4">{productos.edad}</td>
            <td className="px-6 py-4">{productos.puesto}</td>
        </tr>
    )
    
}

export default Filas