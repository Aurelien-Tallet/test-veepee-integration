import React from 'react'
import SingleDestination from '../PageContent/SingleDestination/SingleDestination'
import images from 'assets/data/image'

function DestinationWrapper({ destinations }) {

    return (
        <section className="destination-wrapper">

            {destinations.map((destination, i) => {
                return <SingleDestination key={i} delay={i} destination={destination} image={images[i]} />
            })}

            <aside className="line"></aside>
        </section>

    )
}

export default DestinationWrapper
