import Image from "next/image";
import "../style/hero.css";

function Hero() {
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
            </div>
            {/* right */}
            <div className="hero-right-div">
                <h1 className="title-hero">
                    I'm Amber Iqbal
                    Front-end Developer </h1>
                <p className="des-hero">I'm Amber Iqbal front-end Developer expert in next js css typescript js and learning many more in Governor house. </p>
                <button className="hero-btn">HIRE ME</button>
            </div>
          </div>
        </div>
    )
}
export default Hero