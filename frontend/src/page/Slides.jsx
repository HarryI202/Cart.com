import React from 'react'
import './Slides.css'

function Slides() {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src="../img/2593170.png" className="d-block w-100" style={{ borderRadius: "2em" }} alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="../img/E1.jpg" className="d-block w-100" style={{ borderRadius: "2em" }} alt="..." />
                </div>
                <div className="carousel-item " data-bs-interval="3000">
                    <img src="../img/E2.jpg" className="d-block w-100" style={{ borderRadius: "2em" }} alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="../img/E3.jpg" className="d-block w-100" style={{ borderRadius: "2em" }} alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="../img/E4.jpg" className="d-block w-100" style={{ borderRadius: "2em" }} alt="..." />
                </div>
                {/* <div className="carousel-item" data-bs-interval="3000">
                    <img src="../img/E5.webp" className="d-block w-100" style={{ borderRadius: "2em" }} alt="..." />
                </div> */}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slides;