import React, { useEffect, useState } from 'react'
import Formulario from '../components/Formulario'
import TablaUsuarios from '../components/TablaUsuarios'

const Inicio = () => {

    const [usuarios, setUsuarios] = useState(null)
    const [usuarioAEditar, setUsuarioAEditar] = useState(null)

    useEffect(() => {
        getAllUsuarios()
    }, [])

    const getAllUsuarios = async () => {

        try {
            const res = await fetch(import.meta.env.VITE_BACKEND)

            if (!res.ok) {
                throw new Error('No se pudo hacer la petición')
            }

            const data = await res.json()
            setUsuarios(data)

        } catch (error) {
            console.error(error.message)
        }

    }

    const agregarUsuario = async (nuevoUsuario) => {

        nuevoUsuario.edad = Number(nuevoUsuario.edad)
        delete nuevoUsuario.id

        try {
            const res = await fetch(import.meta.env.VITE_BACKEND, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(nuevoUsuario)
            })

            if (!res.ok) {
                throw new Error('No se puede hacer la petición')
            }

            const usuarioAgregadoABackend = await res.json()

            const nuevoEstadoUsuarios = [...usuarios, usuarioAgregadoABackend]
            setUsuarios(nuevoEstadoUsuarios)

        } catch (error) {
            console.error(error)
        }
    }

    const editarUsuario = async (usuarioEditado) => {

        const urlUserEditar = import.meta.env.VITE_BACKEND + usuarioEditado.id

        try {

            usuarioEditado.edad = Number(usuarioEditado.edad)

            const res = await fetch(urlUserEditar, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(usuarioEditado)
            })

            if (!res.ok) {
                throw new Error('No se pudo hacer la petición')
            }

            const usuarioEditadoAlBackend = await res.json()

            const nuevoEstadoUsuarios = usuarios.map(user => user.id === usuarioEditado.id ? usuarioEditado : user)
            setUsuarios(nuevo)

        } catch (error) {
            console.error(error)
        }

    }

    const borrarUsuario = async (id) => {

        const urlUserBorrar = import.meta.env.VITE_BACKEND + id

        try {

            const res = await fetch(urlUserBorrar, {
                method: 'DELETE'
            })

            if (!res.ok) {
                throw new Error('No se pudo realizar la petición')
            }

            const usuarioEliminadoDelBackend = await res.json()

        } catch (error) {
            console.error(error)
        }

        const nuevoEstadoUsuarios = usuarios.filter(user => user.id !== id)
        setUsuarios(nuevoEstadoUsuarios)

    }

    return (
        <>
            <Formulario />
            <TablaUsuarios />
        </>
    )
}

export default Inicio