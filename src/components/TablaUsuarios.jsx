import { useState } from 'react'
import Filas from './Filas'
import Spinner from './Spinner'
import ModalDetalleUsuario from './ModalDetalleUsuario'

const TablaUsuarios = ({ usuarios, borrarUsuario, setUsuarioAEditar }) => {

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null)
    const [mostrarModal, setMostrarModal] = useState(false)

    const handleVer = (usuarios) => {
        setUsuarioSeleccionado(usuarios)
        setMostrarModal(true)
    }

    const cerrarModal = () => {
        setMostrarModal(false)
        setUsuarioSeleccionado(null)
    }

    return (
        <>
            {usuarios ? (
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
                        {
                            usuarios.map((usuarios) => (
                                <Filas
                                    usuarios={usuarios}
                                    key={usuarios.id}
                                    borrarUsuario={borrarUsuario}
                                    setUsuarioAEditar={setUsuarioAEditar}
                                    verUsuario={handleVer}
                                />
                            ))
                        }
                    </tbody>
                </table>
            ) : (
                <div className="w-max m-auto mt-10">
                    <Spinner />
                </div>
            )}
            {mostrarModal && (
                <ModalDetalleUsuario
                    usuarios={usuarioSeleccionado}
                    cerrarModal={cerrarModal}
                />
            )}
        </>
    )
}

export default TablaUsuarios