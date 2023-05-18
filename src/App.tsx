import { useState } from 'react'

import Project from './components/Project'
import Tab from './components/Tab'
import Girl from './assets/girl.jpeg'

import { tabs, projects } from './utils'
import { ProjectInterface } from './interface'
import useViewport from './hooks/useViewport'

const App = () => {
    const { isMobile } = useViewport()
    const middleIndex = Math.ceil(projects.length / 2)
    const [activeTab, setActiveTab] = useState('Small Business')
    const [projectsList, setProjectsList] = useState<ProjectInterface[]>(projects)

    return (
        <div className='sm:h-screen h-full flex flex-col justify-center items-center'>
            <h1 className='font-bold sm:text-lg text-m text-violetDark text-center'>Easy Turn-Key Integration</h1>
            <p className='sm:text-s text-xs text-light text-center text-light max-w-[779px] mt-6 mb-12 px-6'>
                Increase job satisfaction, improve engagement, decrease burnout and lower payroll liability by
                reimagining what employees can do with their PTO.
            </p>
            <div
                className={`flex gap-2 mb-20 ${isMobile ? 'border-b border-borderColor w-screen justify-between' : ''}`}
            >
                {tabs.map((tab: string) => {
                    return <Tab title={tab} key={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
                })}
            </div>
            <div className={`flex items-end ${isMobile ? 'flex-col gap-5 items-center' : ''}`}>
                {!isMobile && (
                    <div className='flex flex-col gap-5'>
                        {projectsList.slice(0, middleIndex).map((project: ProjectInterface) => {
                            return (
                                <Project
                                    key={project.id}
                                    project={project}
                                    activeTab={activeTab}
                                    projectsList={projectsList}
                                    setProjectsList={setProjectsList}
                                />
                            )
                        })}
                    </div>
                )}
                <div className='sm:w-[380px] w-[calc(100vw-50px)] h-[268px] border-solid border-2 border-violetSoft rounded-2xl bg-background flex flex-col justify-center items-center sm:px-10 px-3 relative'>
                    <p className='text-violetDark1 font-bold'>Lauren Robson</p>
                    <p className='text-light mt-2 mb-5'>HR Director</p>
                    <p className='text-violetDark1 text-center'>
                        “I want to lower PTO liability and keep my employess happy. I want to lower PTO liability.”
                    </p>
                    <img className='w-[86px] h-[86px] rounded-xl absolute -top-9' src={Girl} alt='solid color' />
                </div>
                <div className='flex flex-col gap-5'>
                    {projectsList.slice(-middleIndex).map((project: ProjectInterface) => {
                        return (
                            <Project
                                key={project.id}
                                project={project}
                                activeTab={activeTab}
                                projectsList={projectsList}
                                setProjectsList={setProjectsList}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default App
