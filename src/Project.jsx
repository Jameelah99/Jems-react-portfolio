import React from 'react'
import "./styles/project.css"

function Project() {
  return (
    <>
     <h2 class="heading">Projects</h2>
        <div class="slideshow-container">
            <div class="slides">
                <div class="numbertext"> 1/7</div>
                <img src="./Images/Screenshot (65) .png" class="project-images" alt=""/>
            </div>

            <div class="slides">
                <div class="numbertext"> 2/7</div>
                <img src="./Images/Screenshot (66) .png" class="project-images" alt=""/>
            </div>

            <div class="slides">
                <div class="numbertext"> 3/7</div>
                <img src="./Images/Screenshot (67) .png" class="project-images" alt=""/>
            </div>

            <div class="slides">
                <div class="numbertext"> 4/7</div>
                <img src="./Images/Screenshot (57).png" class="project-images" alt=""/>
            </div>

            <div class="slides">
                <div class="numbertext"> 5/7</div>
                <img src="./Images/Screenshot (68) .png" class="project-images" alt=""/>
            </div>

            <div class="slides">
                <div class="numbertext"> 6/7</div>
                <img src="./Images/Screenshot (69) .png" class="project-images" alt=""/>
            </div>

            <div class="slides">
                <div class="numbertext"> 7/7</div>
                <img src="./Images/Screenshot (64) .png" class="project-images" alt=""/>
            </div>

            
            
            {/* <div  class="prev" onclick="plusSlides(-1)">&#10094;</div> */}
            {/* <div  class="next" onclick="plusSlides(1)">&#10095;</div>  */}
        </div>
        
        <div>
            <span class="text">Interactive Card Details</span>
            <span class="text">Rolan Hotel Website <br/> Landing page </span>
            <span class="text">TiideHr(an advance employee management system)JS version <br/> Employee Dashboard</span>
            <span class="text">TiideHr JS version <br/> Role management page</span>
            <span class="text">TiideHr React version <br/> Landing page</span>
            <span class="text">TiideHr React version <br/> Employee Dashboard</span>
            <span class="text">TiideHr React version <br/> Role management page</span>
        </div>
    </>
  )
}

export default Project