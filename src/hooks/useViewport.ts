import { useEffect, useMemo, useState } from 'react'

const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    const isMobile = useMemo(() => width <= 640, [width])

    return {
        width,
        height,
        isMobile,
    }
}

export default useViewport
