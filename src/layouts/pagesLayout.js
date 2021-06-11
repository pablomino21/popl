import React from "react";
import Nav from '../components/Nav'


export default function UserLayout({children}) {
  return (
    <>
      <Nav />
      <div className="chromer">
      { children }
      </div>
      
    </>
  )
}