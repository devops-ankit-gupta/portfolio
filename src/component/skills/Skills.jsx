import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
import Databases from './Databases'
import Tools from './Tools'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>
        <div className="skills_container container grid">
            <Backend/>
            <Databases/>
            <Frontend/>
            <Tools/>
        </div>
    </section>
  )
}

export default Skills