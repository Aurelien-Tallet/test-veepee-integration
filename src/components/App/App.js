import React, { useEffect } from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import PageContent from 'domain/Destinations/PageContent/PageContent'

export default function App() {

  // Scroll top on refresh
  const refresh = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.addEventListener('load', refresh)

    return () =>  window.removeEventListener('load', refresh)
  }, [])

  return (
    <>
      <Header  />
      <PageContent />
      <Footer />
    </>
  )
}
