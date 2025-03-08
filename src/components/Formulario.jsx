import { useState } from "react"

const Formulario = ({ agregarUsuario, editarUsuario, borrarUsuario, setUsuarioAEditar }) => {

    const dataFormularioInicial = {
        id: null,
        nombre: '',
        apellido: '',
        edad: '',
        puesto: ''
    }

    const [dataFormulario, setDataFormulario] = useState(dataFormularioInicial)

    const handleChange = (e) => {

        const dataActualizada = {
          ...dataFormulario,
          [e.target.name]: e.target.value
        }
    
        setDataFormulario(dataActualizada)
    }
    
    return (
        <>
            <h2 className="text-2xl font-thin my-4 text-center">
                Formulario de edición/alta de usuarios
            </h2>

            <div>
                <form className="bg-white border rounded-lg p-6 w-96 m-auto">
                    
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
                    />


                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="px-4 py-2 cursor-pointer text-white rounded-lg bg-blue-500 hover:bg-blue-700"
                        >
                            Cargar/Editar
                        </button>
                        <button
                            type="reset"
                            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-700 cursor-pointer"
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