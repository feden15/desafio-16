import Filas from "./Filas"
import Spinner from "./Spinner"

const ListadoUsuarios = ({ usuarios, borrarUsuario, setUsuarioAEditar }) => {
    
    return (
        <>
            { usuarios ? (
                <table className="mt-5 w-full text-sm text-center text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th className="px-6 py-3">Nombre</th>
                            <th className="px-6 py-3">Apellido</th>
                            <th className="px-6 py-3">Edad</th>
                            <th className="px-6 py-3">Puesto</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        usuarios.map((usuarios) => (
                        <Filas
                            usuarios={usuarios}
                        />
                        ))
                    }
                    </tbody>
                </table>
            ): (
                <div className="w-max m-auto mt-10">
                    <Spinner/>
                </div>
            ) }
        </>
    )

}

export default ListadoUsuarios