import React from 'react'
import { Navbar, Footer } from '@commons/index'

export const BaseLayout = ({ children }) => {
  return (
    <>
        <Navbar />
            { children }
        <Footer />
    </>
  )
}
