import { useState } from "react";

interface InsertProjectProps {
    onInsert: (project: Project) => void;
}

function InsertProject({ onInsert }: InsertProjectProps) {
    const [codigo, setCodigo] = useState('');
    const [nombre, setNombre] = useState('');
    const [compania, setCompania] = useState('');

    const onSubmit = (e: any) => {
        let project: Project = {
            Codigo: codigo,
            Nombre: nombre,
            Compania: compania,
            Fecha: (new Date()).toDateString()
        }
        onInsert(project);
    }

    return (
        <div className="max-w-md mx-auto bg-white shadow p-8 rounded text-black">
            <h2 className="text-2xl font-bold mb-6">Insertar Proyecto</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label htmlFor="codigo" className="block font-bold mb-2">
                        Código:
                    </label>
                    <input
                        type="text"
                        id="codigo"
                        name="codigo"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        className="border border-gray-300 px-3 py-2 rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block font-bold mb-2">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="border border-gray-300 px-3 py-2 rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="compania" className="block font-bold mb-2">
                        Compañía:
                    </label>
                    <input
                        type="text"
                        id="compania"
                        name="compania"
                        value={compania}
                        onChange={(e) => setCompania(e.target.value)}
                        className="border border-gray-300 px-3 py-2 rounded w-full"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default InsertProject;