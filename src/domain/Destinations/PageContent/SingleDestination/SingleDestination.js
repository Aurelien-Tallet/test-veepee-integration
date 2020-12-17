import React, { useEffect } from 'react'
import { useState } from 'react'
import icon from '../../../../assets/icons/right-chevron.svg'
import logoDubai from '../../../../assets/icons/Dubai.png'

function SingleDestination({ destination, image }) {
    const { country, place, label, rating, upto, redirect_label, tags, link } = destination
    const [ratingState, setRatingState] = useState([])

    useEffect(() => {
        setRatingState(new Array(parseInt(rating.split('')[0])).fill('★'))

    }, [])
    return (
        <article className="destination">
            <figure className="destination-header">
                <img className="destination-image" src={process.env.PUBLIC_URL + image.src} />
                <img className="destination-arrow-right" src={icon} />
                <img className="destination-arrow-left" src={icon} />
                <div className="destination-upto"><label>{upto}</label></div>

                {(place.toLowerCase() === "dubaï") &&
                    <div className="dubai-logo"><img src={logoDubai} alt="logo dubai" /></div>}
            </figure>
            <footer className="destination-footer">
                <div className="left">
                    <h3 > <span className={(place.toLowerCase() === "dubaï") ? "dubai" : ""}>{country}</span> - {place}</h3>
                    <label className="place-label">{label} <span className="rating">{ratingState.map((star, i) => <React.Fragment key={i}>{star}</React.Fragment>)}</span></label>
                    <div className="tags">
                        {tags.map((tag, i) => {
                            return <p key={i} className={tag.classname}>{tag.label}</p>
                        })}
                    </div>
                </div>


                <div className="right">
                    <a className="link" title={redirect_label} href={link} target='_blank' rel="noreferrer"  >
                        <img className="link-icon" src={icon} />

                    </a>
                </div>

            </footer>
        </article>
    )
}

export default SingleDestination
