import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <Link to='/login' style={{textDecoration: "none", color: "black"}}>Login</Link>
      <Link to='/signup' style={{textDecoration: "none", color: "black"}}>Signup</Link>
    </div>
  )
}

export default Home;
