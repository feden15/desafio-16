import { useEffect, useState } from 'react'

import Formulario from './components/Formulario'
import ListadoUsuarios from './components/ListadoUsuarios'

function App() {

  const [productos, setProductos] = useState(null)

  useEffect(() => {
    getAllProductos()
  }, [])

  const getAllProductos = async () => {
    
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND)

      if (!res.ok) {
        throw new Error('No se pudo hacer la petición')
      }

      const data = await res.json()
      setProductos(data)

    } catch (error) {
      console.error(error.message)
    }

  }
   

  return (
    <>
      <h1 className="text-center font-bold text-4xl my-5">Usuarios</h1>
      <hr />
      <Formulario/>
      <ListadoUsuarios productos={productos}/>
    </>
  )
}

export default App
