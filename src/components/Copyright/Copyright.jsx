import React from "react";
import {AiFillGithub, AiFillHeart} from "react-icons/ai"
import {CgFigma} from "react-icons/cg"
import "./Copyright.css"

export default function Copyright(){
    return(
        <footer className="copyright">
            <div className="innertext">
                Code with <AiFillHeart className="icon" /> By <a href="https://mahdi-hazrati.github.io/">Mahdi Hazrati</a>
                and <CgFigma className="icon" /> UI Made By <a href="https://www.captain-design.com/">Captain Design</a>.
            </div>
            <a href="https://github.com/Mahdi-Hazrati/Academy-Landing-Page" className="github-icon">
                <AiFillGithub className="icon" />
                Source Code On Github
            </a>
        </footer>
    )
}