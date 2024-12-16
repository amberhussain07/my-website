import Image from "next/image";
import "../style/hero.css";
import"../style/about.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
function About() {
    return(
        <div className="header-container">
          <div className="header-boxes-con">
            {/* left */}
            <div>
<Image src={"/image.webp"} 
width={200}
height={200}
className="header-image"
alt="Profile"/>
<div className="social-icon">
<FaFacebook  className="s-icon1"/>
<FaInstagramSquare className="s-icon2"/>
<FaWhatsapp className="s-icon3"/>
</div>
            </div>
            {/* right */}
            <div className="hero-right-div">
                <h1 className="title-hero">
                     About Us </h1>
                <p className="des-hero">I'm Amber Iqbal front-end Developer expert in next js css typescript js and learning many more in Governor house </p>
      
            </div>
          </div>
        </div>
    )
}
export default About