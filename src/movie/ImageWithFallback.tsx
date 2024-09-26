import { useEffect, useState } from 'react'
import fallback from '../assets/image-not-found.jpg'

interface Props {
    className?: string,
    src: string,
    width?: number,
    height?: number,
    alt?: string,
    layout?: string
}

export function ImageWithFallback({ src, ...rest }: Props) {
    const [imgSrc, setImgSrc] = useState(src)

    useEffect(() => {
        setImgSrc(src)
    }, [src])

    return (
        <img
            {...rest}
            src={imgSrc ? imgSrc : fallback}
            onError={() => {
                setImgSrc(fallback)
            }}
        />
    )
}