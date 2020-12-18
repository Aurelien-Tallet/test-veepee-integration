import React, { useEffect, useState } from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import PageContent from 'domain/Destinations/PageContent/PageContent'

export default function App() {
  const [promotion, setPromotion] = useState(0)
  const refresh = () => {
    window.scrollTo(0, 0);
  }



  useEffect(() => {
    window.addEventListener('load', refresh)
    let interval = setInterval(() => {
     if (promotion <= 70) setPromotion(prevcount => prevcount + 1)
       

    }, 20)
    return () => {
      clearInterval(interval)
      window.removeEventListener('load', refresh)
    }
  }, [])

  return (
    <>
      <Header promotion={promotion} />
      <PageContent />
      <Footer promotion={promotion} />

    </>
  )
}
