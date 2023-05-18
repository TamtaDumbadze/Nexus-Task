import { Dispatch, FC, SetStateAction } from 'react'
import useViewport from '../hooks/useViewport'

interface TabProps {
    title: string
    activeTab: string
    setActiveTab: Dispatch<SetStateAction<string>>
}

const Tab: FC<TabProps> = ({ title, activeTab, setActiveTab }) => {
    const { isMobile } = useViewport()
    const dynamicStyles =
        title === activeTab
            ? `${isMobile ? 'text-violetSoft border-violetSoft border-b-2' : 'text-white bg-violetSoft'}`
            : `${
                  isMobile
                      ? 'text-violetDark'
                      : 'bg-transparent text-violetDark2 border border-solid border-borderColor'
              }`

    return (
        <button
            className={`${dynamicStyles} ${
                isMobile ? 'font-medium pb-[10px]' : 'rounded-xl px-4 py-2 font-bold'
            } text-xxs`}
            onClick={() => setActiveTab(title)}
        >
            {title}
        </button>
    )
}

export default Tab
