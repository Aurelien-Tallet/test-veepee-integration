import React, { useEffect, useRef } from 'react'

export default function Header() {
    const promotionRef = useRef();
    useEffect(() => {
        let count = 0
        let max = 70
        let speed = 15
        let interval = setInterval(() => {
            count++
            promotionRef.current.innerHTML = count;
            if (count >= max) clearInterval(interval);

        }, speed)
        return () => clearInterval(interval)
    }, []);
    return (
        <header className='header'>
            <h1 className='title'>découvrez les offres du moment</h1>
            <h2 className='promotion'>vol + hôtel jusqu'à -<span ref={promotionRef}>{0}</span>%</h2>

        </header>
    )
}
