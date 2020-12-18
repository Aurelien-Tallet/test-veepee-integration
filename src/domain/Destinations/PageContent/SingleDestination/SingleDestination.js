import React, { useEffect, useState, useRef } from 'react'
import icon from '../../../../assets/icons/right-chevron.svg'
import logoDubai from '../../../../assets/icons/Dubai.png'
import sr from '../../../../utils/scrollreveal'

function SingleDestination({ destination, image, delay }) {
    // PROPS
    const { country, place, label, rating, upto, redirect_label, tags, link } = destination

    // STATES
    const [ratingState, setRatingState] = useState([])
    const [slider, setSlider] = useState(false)
    const [imageList, setImageList] = useState([])
    const [index, setIndex] = useState(1)

    // REF
    const articleRef = useRef()
    const iconRef = useRef()

    useEffect(() => {
        setRatingState(new Array(parseInt(rating.split('')[0])).fill('★'))
        if (image.sliderImg != undefined) {
            setSlider(true)
            setImageList([image.sliderImg[0], image.src, image.sliderImg[1]])
        }
        // REVEAL ARTICLES WITH CASCADE EFFECT
        const config = {
            origin: 'top',
            delay: delay * 100,
            distance: '30px',
            easing: 'ease',
            reset: false
        }
        sr.reveal(articleRef.current, config)
    }, [])
    // SLIDER FOR SOME ARTICLES
    const sliderShow = (e) => {
        e.preventDefault()
        switch (e.target.className) {
            case 'destination-prev':
                (index !== 0) ? setIndex(index - 1) : setIndex(imageList.length - 1)
                break;
            case 'destination-next':
                (index !== imageList.length - 1) ? setIndex(index + 1) : setIndex(0)
                break;
            default:
                return
        }
    }
    return (

        <article className="destination" ref={articleRef}>


            <figure className="destination-header">
                <div className='container-slider'>
                    <a onMouseEnter={() => { iconRef.current.classList.add("hovered") }} onMouseLeave={() => { iconRef.current.classList.remove("hovered") }} className="link-image" title={redirect_label} href={link} target='_blank' rel="noreferrer"><img className="destination-image" src={process.env.PUBLIC_URL + (imageList[index] || image.src)} /></a>
                </div>
                {slider && <div>
                    <a className="destination-prev" onClick={sliderShow}>&#10094;</a>
                    <a className="destination-next" onClick={sliderShow}>&#10095;</a>
                </div>}
                <div className="destination-upto"><label>{upto}</label></div>

                {(place.toLowerCase() === "dubaï") &&
                    <div className="dubai-logo"><img src={logoDubai} alt="logo dubai" /></div>}
            </figure>
            <footer className="destination-footer">
                <div className="left">
                    <h3 className="location"> <span className={(place.toLowerCase() === "dubaï") ? "dubai" : ""}>{country}</span> - {place}</h3>
                    <label className="place-label">{label} <span className="rating">{ratingState.map((star, i) => <React.Fragment key={i}>{star}</React.Fragment>)}</span></label>
                    <div className="tags">
                        {tags.map((tag, i) => {
                            return <p key={i} className={tag.classname}>{tag.label}</p>
                        })}
                    </div>
                </div>
                <div className="right">
                    <a className="link" title={redirect_label} href={link} target='_blank' rel="noreferrer"  >
                        <img className="link-icon" ref={iconRef} src={icon} />
                    </a>
                </div>
            </footer>

        </article>
    )
}

export default SingleDestination
