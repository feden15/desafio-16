import React from 'react';

const ModalDetalleUsuario = ({ usuarios, cerrarModal }) => {

    if (!usuarios) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300">
            <div className="bg-white p-6 rounded-xl max-w-md w-full mx-4 shadow-2xl border border-gray-200 transform transition-all duration-300 scale-95 animate-[fadeIn_0.3s_ease-out_forwards]">
                <h2 className="text-2xl text-center font-bold mb-4">Detalles del Usuario</h2>
                <hr />
                <div className="space-y-2">
                    <p><span className="font-semibold">Nombre:</span> {usuarios.nombre}</p>
                    <p><span className="font-semibold">Apellido:</span> {usuarios.apellido}</p>
                    <p><span className="font-semibold">Edad:</span> {usuarios.edad}</p>
                    <p><span className="font-semibold">Puesto:</span> {usuarios.puesto}</p>
                </div>
                <button
                    onClick={cerrarModal}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default ModalDetalleUsuario