import React, { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'

function Slider(props) {

    const [width, setwidth] = useState(5)

    return (

        <div>
            <Splide
                options={{
                    type: 'loop',
                    perPage: width,
                    perMove: 1,
                    gap: '1rem',
                }}
                onMoved={(splide, newIndex) => { console.log('moved', newIndex) }}
            >
                {props.coreData.map((s, i) => (
                    <SplideSlide key={i}>
                        <div class="card productCards grow-on-hover mx-2">
                            <div class="card-header prodCardHead d-lg-block d-none">
                                <div className="productData ">
                                    {s.ProductName}
                                </div>
                            </div>
                            <p class="card-text mt-2 mb-5 d-lg-none d-block">
                                <div className="chips row ">
                                    {s.PrimaryArea.map((y, j) => (
                                        // <div className="py-2 px-1" key={j}>
                                        <span className=" mt-2 fw-bold ms-3 me-3 col col-lg-4  prod-recomm-area prod-primary-area">{y}</span>
                                        // </div>d
                                    ))}
                                </div>
                            </p>
                            <div class="card-body prodCardBody">
                                <div className="d-flex flex-column align-items-center image-container">
                                    <div >
                                        <a href={"#Product" + i} rel="noopener" data-action-detail={"#Product" + i} className="event_button_click">
                                            <img
                                                className="prodImage"
                                                src={s.ImageUrl}
                                                alt={s.ProductBrand + " " + s.ProductName}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div class="card-header prodCardHead d-lg-none d-block">
                                    <div className="productData ">
                                        {s.ProductName}
                                    </div>
                                </div>
                                <p class="card-text my-2 d-lg-block d-none">
                                    <div className="chips row ">
                                        {s.PrimaryArea.map((y, j) => (
                                            // <div className="py-2 px-1" key={j}>
                                            <span className=" mt-2 fw-bold ms-2 col col-lg-6 prod-recomm-area prod-primary-area">{y}</span>
                                            // </div>d
                                        ))}
                                    </div>
                                </p>

                            </div>
                        </div>

                    </SplideSlide>
                ))}
            </Splide>
        </div>
    )
}

export default Slider;
