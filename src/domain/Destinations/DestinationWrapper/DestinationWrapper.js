import React from 'react'
import SingleDestination from '../PageContent/SingleDestination/SingleDestination'
import images from 'assets/data/image'

function DestinationWrapper({ destinations }) {

    return (
        <section className="destination-wrapper">


            {destinations.map((destination, i) => {
                return <SingleDestination key={i} destination={destination} image={images[i]} />
            })}


        </section>
    )
}

export default DestinationWrapper
