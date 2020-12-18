import React from 'react'
import chevronDown from '../../../assets/icons/chevrondown.svg'
import { useState, useEffect } from 'react'

function Filter() {
    // STATES
    const [reverse, setReverse] = useState(false)
    const [isDesktop, setisDesktop] = useState(true)

    // DISABLE ARROW ANIMATION'S SELECT IN MOBILE DEVICE
    const detectMob = () => {
        if ((window.innerWidth <= 800) && (window.innerHeight <= 600)) {
            setisDesktop(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', detectMob)
        return () => window.removeEventListener('resize', detectMob)
    }, [])


    return (
        <section className="filter-container" onClick={() => { setReverse(!reverse) }}>
            <div className="select">
                <div className="filter-logo">
                    <span className="bar bar1" />
                    <span className="bar bar2" />
                    <span className="bar bar3" />
                </div>
                <select name="slct" id="slct" defaultValue="0">
                    <option value="0" selected disabled>destinations</option>
                    <option value="1">Emirates Arabes Unis</option>
                    <option value="2">Maurice</option>
                    <option value="3">Indonésie</option>
                    <option value="4">Maldives</option>
                    <option value="5">Thaïlande</option>
                    <option value="6">Japon</option>
                    <option value="7">Sri Lanka</option>
                    <option value="8">Vietnam</option>
                </select>
                <div className={`chevron-down ${(isDesktop && reverse) ? "reverse" : ""}`}><img src={chevronDown} alt="chevron-down" /></div>
            </div>
        </section>
    )
}

export default Filter
