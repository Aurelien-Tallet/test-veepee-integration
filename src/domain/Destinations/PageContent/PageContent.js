import React from 'react'
import Filter from '../Filter/Filter'
import DestinationWrapper from '../DestinationWrapper/DestinationWrapper'
import data from '../../../assets/data/destinations.json'
export default function PageContent() {

    return (
        <main>
            <Filter />
            <DestinationWrapper destinations={data.destinations} />
        </main>
    )
}
