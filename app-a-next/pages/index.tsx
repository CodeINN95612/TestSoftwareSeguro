
import Calculator from './Calculator'
import UserWrapper from '@/components/UserWrapper/UserWrapper'
import Projects from './Projects'

import styles from "./index.module.css"
import { Project } from '@/models/Project'
import { getProjects } from '@/proxies/ProjectProxy'

type HomePageProps = {
  projects: Project[];
}

export default function HomePage({ projects }: HomePageProps) {
  return (
    <>
      <h1 className={styles.title + " text-3xl font-bold mb-4"}>Online Calculator</h1>
      <p className={styles.description}>
        Bienvenido a la calculadora web
      </p>
      <UserWrapper>
        <Calculator />
        <Projects projects={projects} />
      </UserWrapper>
    </>
  )
}

export async function getServerSideProps() {
  const projects = await getProjects();
  return {
    props: {
      projects
    }
  }
}
