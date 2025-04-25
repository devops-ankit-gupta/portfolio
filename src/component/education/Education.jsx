import React, {useState} from 'react'
import "./education.css"

const Education = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab =(index) => {
        setToggleState(index);
    };
    return (
    
    <section className="education section"id="education">
        <h2 className="section_title">Education</h2>
        <span className="section_subtitle">My Personal Journey</span>
        <div className="education_container container">
            <div className="education_tabs">
                <div className={toggleState === 1 ? "education_button education_active button--flex" : "education_button button--flex"} onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap education_icon"></i>Academics
                </div>
                <div className={toggleState === 2 ? "education_button education_active button--flex" : "education_button button--flex"} onClick={()=>toggleTab(2)}>
                    <i className="uil uil-award education_icon"></i>Certifications
                </div>
            </div>
            <div className="education_section">
                <div className={toggleState === 1 ? "education_content education_content-active" : "education_content "}>
                    <div className="education_data">
                        <div>
                            <h3 className="education_title">PG Diploma in Advanced Computing</h3>
                                <span className="education_subtitle">CDAC, Chennai</span>
                                    <div className="education_calender">
                                    <i className="uil uil-calendar-alt"></i>2023
                                </div>
                        </div>
                        <div>
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                        </div>
                    </div>
                    <div className="education_data">
                        <div></div>
                        <div>
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                        </div>
                        <div>
                            <h3 className="education_title">Master of Computer Application</h3>
                                <span className="education_subtitle">University of Allahabad, Prayagraj</span>
                                    <div className="education_calender">
                                    <i className="uil uil-calendar-alt"></i>2021
                                </div>
                        </div>
                    </div>
                    <div className="education_data">
                        <div>
                            <h3 className="education_title">B.Sc.(Computer Science)</h3>
                                <span className="education_subtitle">MGKVP, Varanasi</span>
                                    <div className="education_calender">
                                    <i className="uil uil-calendar-alt"></i>2016
                                </div>
                        </div>
                        <div>
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                        </div>
                    </div>
                    <div className="education_data">
                        <div></div>
                        <div>
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                        </div>
                        <div>
                            <h3 className="education_title">XII</h3>
                                <span className="education_subtitle">U.P. Board</span>
                                    <div className="education_calender">
                                    <i className="uil uil-calendar-alt"></i>2012
                                </div>
                        </div>
                    </div>
                    <div className="education_data">
                        <div>
                            <h3 className="education_title">X</h3>
                                <span className="education_subtitle">U.P. Board</span>
                                    <div className="education_calender">
                                    <i className="uil uil-calendar-alt"></i>2010
                                </div>
                        </div>
                        <div>
                            <span className="education_rounder"></span>
                            
                        </div>
                    </div>
                </div>

            </div>

            <div className="education_section">
                <div className={toggleState === 2 ? "education_content education_content-active" : "education_content "}>
                <div className="education_data">
                        <div>
                            <h3 className="education_title">Software Engineer</h3>
                                <span className="education_subtitle">HackerRank</span>
                                    <div className="education_calender">
                                    <i className="uil uil-calendar-alt"></i>2025
                                </div>
                        </div>

                        <div>
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                        </div>
                    </div>
                    <div className="education_data">
                        <div></div>
                        <div>
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                        </div>
                        <div>
                            <h3 className="education_title">Software Engineer Intern</h3>
                                <span className="education_subtitle">HackerRank</span>
                                    <div className="education_calender">
                                    <i className="uil uil-calendar-alt"></i>2025
                                </div>
                        </div>
                    </div>
                    <div className="education_data">
                        <div>
                            <h3 className="education_title">Documentation Assistant</h3>
                                <span className="education_subtitle">PMKVY</span>
                                    <div className="education_calender">
                                    <i className="uil uil-calendar-alt"></i>2017
                                </div>
                        </div>

                        <div>
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                        </div>
                    </div>

                    <div className="education_data">
                        <div></div>
                        <div>
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                        </div>
                        <div>
                            <h3 className="education_title">Course On Computer Concepts+</h3>
                                <span className="education_subtitle">NIELIT</span>
                                    <div className="education_calender">
                                    <i className="uil uil-calendar-alt"></i>2017
                                </div>
                        </div>
                    </div>
                    <div className="education_data">
                        <div>
                            <h3 className="education_title">Advance Diploma in Computer Application</h3>
                                <span className="education_subtitle">RGCSM</span>
                                    <div className="education_calender">
                                    <i className="uil uil-calendar-alt"></i>2016
                                </div>
                        </div>
                        <div>
                            <span className="education_rounder"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Education