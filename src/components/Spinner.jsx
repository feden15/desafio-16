import './Spinner.css'

const Spinner = () => {

    return (
        <div>
            <span className="loader"></span>
            <h3 className="text-center font-bold my-2">No puedo usar MockAPI</h3>
            <p>Tengo cargada la base del Integrador y solo se permite un proyecto a la vez</p>
        </div>
    )

}

export default Spinner