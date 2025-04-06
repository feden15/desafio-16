import Swal from "sweetalert2";

const Filas = ({ usuarios, borrarUsuario, setUsuarioAEditar, verUsuario }) => {

    const handleEliminar = async (id) => {

        Swal.fire({
            title: "Estás seguro/a?",
            text: "No se puede revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, lo quiero borrar"
        }).then((result) => {
            if (result.isConfirmed) {
                borrarUsuario(id)
                Swal.fire({
                    title: "Deleted!",
                    text: "El usuario ha sido borrado exitosamente",
                    icon: "success"
                });
            }
        })
    }

    const handleEditar = (usuarios) => {
        setUsuarioAEditar(usuarios)
    }

    return (
        <tr className="bg-white border-b border-gray-200">
            <th className="px-6 py-4">{usuarios.nombre}</th>
            <td className="px-6 py-4">{usuarios.apellido}</td>
            <td className="px-6 py-4">{usuarios.edad}</td>
            <td className="px-6 py-4">{usuarios.puesto}</td>
            <td className="px-6 py-4">
                <button
                    onClick={() => verUsuario(usuarios)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer mr-2"
                >
                    Ver
                </button>
                <button
                    onClick={() => handleEditar(usuarios)}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 cursor-pointer mr-2">
                    Editar
                </button>
                <button
                    onClick={() => handleEliminar(usuarios.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer mr-2">
                    Borrar
                </button>
            </td>
        </tr>
    )
}

export default Filas