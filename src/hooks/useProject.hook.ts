import { useRouter } from 'next/router'

import { projects } from 'data'

const useProject = () => {
    const router = useRouter()

    const { project: id } = router.query

    const project = projects.find(
        project => project.id === id
    )

    if(!project) return { project: projects[0] }

    return { project }
}

export default useProject