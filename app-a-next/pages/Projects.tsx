import { Project } from "@/models/Project";

type ProjectPageProps = {
    projects: Project[]
}

function ProjectsPage({ projects }: ProjectPageProps) {
    return (
        <>
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
        </>
    );
}

export default ProjectsPage;