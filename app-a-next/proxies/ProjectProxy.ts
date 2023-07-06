import { decrypt } from "@/Services/encriptionService";
import { Project } from "@/models/Project";

export const getProjects = async () => {
    let response = await fetch('http://localhost:3002/api/project/get', {
        method: 'GET',
    })
    let data = await response.json()
    return await decrypt<Project[]>(data);
}