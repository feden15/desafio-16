import { useEffect, useState } from "react"

const Formulario = ({ agregarUsuario, usuarioAEditar, setUsuarioAEditar, editarUsuario }) => {

    const formInicial = {
        id: null,
        nombre: '',
        apellido: '',
        edad: '',
        puesto: ''
    }

    const [dataFormulario, setDataFormulario] = useState(formInicial)

    useEffect(() => {
        usuarioAEditar ? setDataFormulario(usuarioAEditar) : setDataFormulario(formInicial)
    }, [usuarioAEditar])

    const handleChange = (e) => {

        const dataActualizada = {
            ...dataFormulario,
            [e.target.name]: e.target.value
        }

        setDataFormulario(dataActualizada)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (dataFormulario.id === null) {
            agregarUsuario(dataFormulario)
        } else {
            editarUsuario(dataFormulario)
        }

        handleReset()
    }

    const handleReset = () => {

        setDataFormulario(formInicial)
        setUsuarioAEditar(null)

    }

    return (
        <>
            <h2 className="text-2xl font-thin my-4 text-center">
                {!usuarioAEditar ? 'Formulario de carga de usuarios' : 'Formulario de edición de usuarios'}
            </h2>

            <div>
                <form className="bg-white border rounded-lg p-6 w-96 m-auto" onSubmit={handleSubmit}>

                    {/* Campo Nombre */}
                    <label htmlFor="lbl-nombre" className="block mb-2 text-sm font-bold text-gray-700">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="lbl-nombre"
                        placeholder="Ingresa el nombre"
                        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="nombre"
                        onChange={handleChange}
                        value={dataFormulario.nombre}
                    />

                    {/* Campo Apellido */}
                    <label htmlFor="lbl-apellido" className="block mb-2 text-sm font-bold text-gray-700">
                        Apellido
                    </label>
                    <input
                        type="text"
                        id="lbl-apellido"
                        placeholder="Ingresa el apellido"
                        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="apellido"
                        onChange={handleChange}
                        value={dataFormulario.apellido}
                    />

                    {/* Campo Edad */}
                    <label htmlFor="lbl-edad" className="block mb-2 text-sm font-bold text-gray-700">
                        Edad
                    </label>
                    <input
                        type="number"
                        id="lbl-edad"
                        placeholder="Ingresa la edad"
                        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="edad"
                        onChange={handleChange}
                        value={dataFormulario.edad}
                    />

                    {/* Campo Puesto */}
                    <label htmlFor="lbl-puesto" className="block mb-2 text-sm font-bold text-gray-700">
                        Puesto
                    </label>
                    <input
                        type="text"
                        id="lbl-puesto"
                        placeholder="Ingresa el puesto de trabajo"
                        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="puesto"
                        onChange={handleChange}
                        value={dataFormulario.puesto}
                    />

                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className={`px-4 py-2 ${usuarioAEditar ? 'bg-yellow-500' : 'bg-green-500'} text-white rounded-lg ${usuarioAEditar ? 'hover:bg-yellow-700' : 'hover:bg-green-700'}  cursor-pointer`}
                        >
                            {usuarioAEditar ? 'Editar' : 'Crear'}
                        </button>
                        <button
                            type="reset"
                            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-700 cursor-pointer"
                            onClick={handleReset}
                        >
                            Resetear
                        </button>
                    </div>

                </form>
            </div>
        </>
    )

}

export default Formulario