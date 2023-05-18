import { Dispatch, FC, SetStateAction } from 'react'
import { BiToggleLeft } from 'react-icons/bi'
import { IoToggleSharp } from 'react-icons/io5'

import Image from '../assets/image.png'
import Tree from './Tree'

import useViewport from '../hooks/useViewport'
import { ProjectInterface } from '../interface'

interface ProjectProps {
    activeTab: string
    project: ProjectInterface
    projectsList: ProjectInterface[]
    setProjectsList: Dispatch<SetStateAction<ProjectInterface[]>>
}

const Project: FC<ProjectProps> = ({ activeTab, project, projectsList, setProjectsList }) => {
    const { isMobile } = useViewport()
    const { id, title, subTitle, category } = project

    const isActive = category.includes(activeTab)
    const borderColor = isActive ? 'border-violetSoft' : 'border-borderColor2'

    const handleToggleProject = (projectId: number) => {
        const updatedProjects = projectsList.map((project: ProjectInterface) => {
            if (project.id === projectId) {
                if (isActive) {
                    project.category = project.category.filter((category: string) => !isActive)
                } else {
                    project.category.push(activeTab)
                }
            }
            return project
        })

        setProjectsList(updatedProjects)
    }

    return (
        <div className='flex justify-center items-center'>
            {!isMobile && project.id > 3 && <Tree isActive={isActive} project={project} />}
            <div
                className={`${borderColor} ${
                    isMobile ? 'px-8 w-[calc(100vw-50px)]' : ''
                } border p-4 rounded-xl sm:w-[280px] flex justify-between items-center`}
            >
                <div className='flex gap-2 items-center'>
                    <img className='w-12 h-12 rounded-xl' src={Image} alt='solid color' />
                    <div className='flex flex-col'>
                        <p className='text-base font-medium text-violetDark'>{title}</p>
                        <p className='text-xxs text-light'>{subTitle}</p>
                    </div>
                </div>
                <div onClick={() => handleToggleProject(id)}>
                    {isActive ? (
                        <IoToggleSharp size={19} color='#9D71FD' cursor='pointer' />
                    ) : (
                        <BiToggleLeft size={22} color='#A39CB5' cursor='pointer' />
                    )}
                </div>
            </div>
            {!isMobile && project.id <= 3 && <Tree isActive={isActive} project={project} />}
        </div>
    )
}

export default Project
