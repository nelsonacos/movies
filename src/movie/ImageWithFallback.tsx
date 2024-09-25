import { useEffect, useState } from 'react'
import fallback from '../../public/images/not-found.png'

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
        <image
            {...rest}
            src={imgSrc ? imgSrc : fallback.src}
            onError={() => {
                setImgSrc(fallback.src)
            }}
        />
    )
}