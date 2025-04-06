import Filas from './Filas'

const TablaUsuarios = () => {

    return (
        <>
            <table className="mt-5 w-full text-sm text-center text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th className="px-6 py-3">Nombre</th>
                        <th className="px-6 py-3">Apellido</th>
                        <th className="px-6 py-3">Edad</th>
                        <th className="px-6 py-3">Puesto</th>
                        <th className="px-6 py-3">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <Filas />
                </tbody>
            </table>
        </>
    )
}

export default TablaUsuarios