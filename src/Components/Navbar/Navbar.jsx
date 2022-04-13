import React from "react";
import "./Navbar.css";
import $ from 'jquery';
/* eslint-disable jsx-a11y/anchor-is-valid */
// deploy

const Navbar = () => {

    return (
        <div className="navbar">
            
            <div className="myLogoDiv">
                <img src="Vishal_singh.gif" alt="my_logo" />
            </div>

            <div className="menu">
                <i className="material-icons">menu</i>
            </div>

            <div className="leftNavbar">

                <div className="childDiv">
                    <div>
                        <a href="#">
                            <img src="about.png" alt="about_logo"/>
                        </a>
                    </div>

                    <div className="textDiv">
                        <a href="#">About</a>
                    </div>
                    
                </div>

                <div className="childDiv">
                    <div>
                        <a href="#">
                            <img src="Skills.png" alt="skills_logo"/>
                        </a>
                    </div>

                    <div className="textDiv">
                        <a href="#">Skills</a>
                    </div>
                    
                </div>

                <div className="childDiv">
                    <div>
                        <a href="#">
                            <img src="Projects.png" alt="projects_logo"/>
                        </a>
                    </div>

                    <div className="textDiv">
                        <a href="#">Projects</a>
                    </div>
                    
                </div>

                <div className="childDiv">
                    <div>
                        <a href="#">
                            <img src="Contact.png" alt="contact_logo"/>
                        </a>
                    </div>

                    <div className="textDiv">
                        <a href="#">Contact</a>
                    </div>
                    
                </div>

                <div className="childDiv">
                    {/* <div>
                        <a href="#">
                            <img src="Resume.png" alt="resume_logo"/>
                        </a>
                    </div> */}

                    {/* <div className="textDiv">
                        <a href="#">Resume</a>
                    </div> */}
                    
                </div>

            </div>
        </div>
    )
}

$(function() {
    $(".menu").click(function() {
        $(".leftNavbar").slideToggle(500);
    });
})

export default Navbar;