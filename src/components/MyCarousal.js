import React from 'react'
import './Carousal.css';

export default function MyCarousal() {
    return (
        <div class="carousel-main" style={{backgroundColor:"black"}}>
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active carousal-image-1">
                        {/* <img src="" class="d-block w-100" alt="..."/> */}
                        <div class="carousal-data carousel-caption d-none d-md-block">
                            <h5>Earn Cashback Upto 5000 LKR</h5>
                            <p>Buy Products in flash sale and earn rewards</p>
                        </div>
                    </div>
                    <div class="carousel-item active carousal-image-2">
                        {/* <img src="" class="d-block w-100" alt="..." /> */}
                        <div class="carousal-data carousel-caption d-none d-md-block">
                            <h5>Earn Cashback Upto 5000 LKR</h5>
                            <p>Buy Products in flash sale and earn rewards</p>
                        </div>
                    </div>
                    <div class="carousel-item active carousal-image-3">
                        {/* <img src="" class="d-block w-100" alt="..." /> */}
                        <div class="carousal-data carousel-caption d-none d-md-block">
                            <h5>Earn Cashback Upto 5000 LKR</h5>
                            <p>Buy Products in flash sale and earn rewards</p>
                        </div>
                    </div>
                </div>
                {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>
    )
}
