import React, { useContext } from 'react'
import { AuthContext } from "../../context/Authcontext"
import "./LandingPage.css"
import noteimage from "../../assets/landing_page.png"
function LandingPage() {
  const { userLoggedin } = useContext(AuthContext)
  return (
    <>
      <div className="landing_page">
        <div className="intro_text">
          <h2>Meet your mordern <br /><b>Note taking app</b></h2>
          <p>Manage your daily task and workflow in a modren way and boost your efficiency without any effort</p>
          <button onClick={userLoggedin}>GET STARTED</button>
        </div>
        <div className="intro_image">
          <img src={noteimage} alt="note_taking" />
        </div>
      </div>
    </>
  )
}

export default LandingPage