import React from "react";
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function UserLayout({children}) {
  return (
    <div>
      <Nav />
      { children }
      <Footer />
    </div>
  )
}