import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useEffect, useState } from 'react';
import InsertProject from './InsertProject';

const getProjects = async () => {
    let response = await fetch('/api/project/get', {
        method: 'GET',
    })
    const json = await response.json()
    response = await fetch('/api/project/decrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    });

    const data = await response.json();
    return data;
}

const insertProject = async (p: Project) => {
    const response = await fetch('/api/project/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(p)
    });
    const data = await response.json();
    return data;
}

function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        async function fetchProjects() {
            const projects = await getProjects();
            setProjects(projects);
        }
        fetchProjects();
    }, []);

    return (
        <main className="container mx-auto mt-8 ">
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            <table className="min-w-full bg-white border border-gray-800 text-black mb-5">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Code</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Company</th>
                        <th className="py-2 px-4 border-b">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((p, i) => (
                        <tr key={p.Codigo}>
                            <td className="py-2 px-4 border-b">{p.Codigo}</td>
                            <td className="py-2 px-4 border-b">{p.Nombre}</td>
                            <td className="py-2 px-4 border-b">{p.Compania}</td>
                            <td className="py-2 px-4 border-b">{p.Fecha}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded" href='api/auth/logout'>
                Log Out
            </a>

            <InsertProject onInsert={insertProject} />
        </main>
    );
}

export default Projects;
export const getServerSideProps = withPageAuthRequired();