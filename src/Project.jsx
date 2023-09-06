import React from 'react'
import "./styles/project.css"
import image57 from "./assets/Screenshot (57).png"
import image69 from "./assets/Screenshot (69).png"
import image64 from "./assets/Screenshot (64).png"
import image65 from "./assets/Screenshot (65).png"
import image66 from "./assets/Screenshot (66).png"
import image67 from "./assets/Screenshot (67).png"
import image68 from "./assets/Screenshot (68).png"

function Project() {
  return (
    <>
     <div>
  <h2 className="heading">Projects</h2>
  <div className="slideshow-container">
    <div className="slides">
      <div className="numbertext"> 1/7</div>
      <img src={image65} className="project-images" alt />
    </div>
    <div className="slides">
      <div className="numbertext"> 2/7</div>
      <img src={image66} className="project-images" alt />
    </div>
    <div className="slides">
      <div className="numbertext"> 3/7</div>
      <img src={image67} className="project-images" alt />
    </div>
    <div className="slides">
      <div className="numbertext"> 4/7</div>
      <img src={image57} className="project-images" alt />
    </div>
    <div className="slides">
      <div className="numbertext"> 5/7</div>
      <img src={image68} className="project-images" alt />
    </div>
    <div className="slides">
      <div className="numbertext"> 6/7</div>
      <img src={image69} className="project-images" alt />
    </div>
    <div className="slides">
      <div className="numbertext"> 7/7</div>
      <img src={image64} className="project-images" alt />
    </div>
    {/* <div className="prev" onclick="plusSlides(-1)">❮</div> */}
    {/* <div className="next" onclick="plusSlides(1)">❯</div>  */}
  </div>
  <div>
    <span className="text">Interactive Card Details</span>
    <span className="text">Rolan Hotel Website <br /> Landing page </span>
    <span className="text">TiideHr(an advance employee management system)JS version <br /> Employee Dashboard</span>
    <span className="text">TiideHr JS version <br /> Role management page</span>
    <span className="text">TiideHr React version <br /> Landing page</span>
    <span className="text">TiideHr React version <br /> Employee Dashboard</span>
    <span className="text">TiideHr React version <br /> Role management page</span>
  </div>
</div>


    </>
  )
}

export default Project