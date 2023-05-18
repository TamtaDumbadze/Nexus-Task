import { FC } from 'react'
import { ProjectInterface } from '../interface'

interface TreeInterface {
    isActive?: boolean
    project: ProjectInterface
}

const Tree: FC<TreeInterface> = ({ isActive, project }) => {
    const activeBorder = isActive ? 'border-violetSoft' : 'border-borderLine'
    const activeLine = isActive ? 'bg-violetSoft z-[999]' : 'bg-borderLine'

    if (project.id === 2 || project.id === 5) {
        return (
            <div className='flex'>
                <div className={`${activeLine} w-[69px] h-[2px] -my-[1px]`} />
                <div className={`${activeLine} w-[49px] h-[2px] bg-borderLine -my-[1px]`} />
            </div>
        )
    } else {
        return (
            <div
                className={`${
                    project.id === 1 || project.id === 6
                        ? `-mb-[1px] ${project.id === 1 ? 'mb-[-106px]' : 'mt-[-106px]'}`
                        : `scale-y-[-1] -mt-[1px] ${project.id === 3 ? 'mt-[-106px]' : 'mb-[-106px]'}`
                } ${isActive ? 'z-[999]' : 'z-[1]'}`}
            >
                <div className={`${activeBorder} w-[60px] h-[50px] border-t-2 border-r-2 rounded-tr-2xl`}></div>
                <div
                    className={`${activeBorder} w-[60px] h-[50px] border-b-2 border-l-2 rounded-bl-2xl ml-[58px]`}
                ></div>
            </div>
        )
    }
}

export default Tree
