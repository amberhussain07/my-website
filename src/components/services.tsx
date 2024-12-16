import "../style/services.css"
import { FaLaptopCode } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdNoPhotography } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { MdVoiceOverOff } from "react-icons/md";
function services() {
  return (
    <main className="main">
        <div className="ser-container">
{/* top div */}
<div className="top-div-ser">
    <h2 className="title-ser">My Services</h2>
    <p className="des-ser">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
</div>
{/* bottom div */}
<div className="boxes-con">

    <div className="box">
    <FaLaptopCode  className="ser-icon"/>
    <h3>Web Development</h3>
    <span>Blog, E-Commerce</span>
    </div>
    
    <div className="box">
    <IoLogoGameControllerB  className="ser-icon"/>
    <h3>Game Design</h3>
    <span>Character Design,Props and Objects</span>
    </div>

    <div className="box ">
    
    <h3>Advertising</h3>
    <span>creating creative content, managing social media, optimizing search engines.</span>
    </div>

    <div className="box">
    <MdNoPhotography   className="ser-icon"/>
    <h3>Photography </h3>
    <span>Portrait, Product Photoghaphy</span>
    </div>

    <div className="box">
    < CgWebsite   className="ser-icon"/>
    <h3>UI/UX Design</h3>
    <span>Mobile App, Website Design</span>
    </div>

    <div className="box">
    <MdVoiceOverOff  className="ser-icon"/>
    <h3>Sound Design</h3>
    <span>voice over, beat making</span>
    </div>
    
</div>
</div>

    
    </main>
  )
}

export default services