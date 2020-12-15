import React from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import PageContent from 'domain/Destinations/PageContent/PageContent'

export default function App() {
  let promotion = 'vol + hôtel jusqu\'à -70% '

  return (
    <>
      <Header promotion={promotion} />
      <PageContent />
      <Footer promotion={promotion} />

    </>
  )
}
