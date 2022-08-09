import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto max-w-screen-lg px-10 mb-8">
      <Header />
      {children}
    </div>
  )
}

export default Layout