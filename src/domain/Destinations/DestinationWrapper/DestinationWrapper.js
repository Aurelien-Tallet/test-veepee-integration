import React, { useEffect } from 'react'
import SingleDestination from '../PageContent/SingleDestination/SingleDestination'
import images from 'assets/data/image'
import sr from '../../../utils/scrollreveal'
// import "./DestinationWrapper.css"
function DestinationWrapper({ destinations }) {
    useEffect(() => {
        const config = {
            origin: 'top',
            delay: 200,
            distance: '30px',
            easing: 'ease',
            reset:false
          }
          sr.reveal('.destination',config)
    }, [])
    return (
        <section className="destination-wrapper">

            {destinations.map((destination, i) => {
                return <SingleDestination key={i} destination={destination} image={images[i]} />
            })}

            <aside className="line"></aside>
        </section>

    )
}

export default DestinationWrapper
