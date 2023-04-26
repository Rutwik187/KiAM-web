import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const deletedSlider = () => {
  const settings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>

<div className="head-text">{item.InfoTitle}</div>
              <hr />
              <div className="p-text">{item.InfoDesc1}</div>
              <br />
              <div className="p-text">{item.InfoDesc2}</div>
            </div>
            <div className="servicesImages">
              <div className="servicesImages-text">
                <img
                  className="corner-rectangle"
                  src={images.small_corner_rectangle}
                  alt="rectangle"
                />

                <div className="servicesImages-sub_text">
                  {item.ImgSecSub_Title}
                </div>
                <div className="head-text">{item.ImgSecTitle}</div>
                <hr />
                <div className="p-text">{item.ImgSecDesc}</div>
              </div>
              <div className="gallery-slider-desktop">
                <Slider
                  className="servicesImages-gallery servicesBenefits-slider1"
                  {...settings1}
                >
                  {servicesInfo[0].Imgs.map((item, index) => (
                    <div
                      className="servicesImages-gallery-img"
                      key={item.caption}
                    >
                      <img src={item.img} alt={item.caption} />
                      <div className="servicesImages-gallery-caption">
                        {item.caption}
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="servicesBenefits-gallery-block-2">
                  <img
                    className="gallery-dotted-bg"
                    src={images.dotted_bg}
                    alt="dotted background"
                  />

                  <Slider
                    className=" servicesImages-gallery servicesBenefits-slider2"
                    {...settings2}
                  >
                    {servicesInfo[0].Imgs.map((item, index) => (
                      <div
                        className="servicesImages-gallery-img"
                        key={item.caption}
                      >
                        <img src={item.img} alt={item.caption} />
                        <div className="servicesImages-gallery-caption">
                          {item.caption}
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="servicesVideo">
              <div className="servicesVideo-player">
                <img src={item.video} alt="video" />
              </div>
              <div className="servicesVideo-text">
                <img
                  className="corner-rectangle"
                  src={images.small_corner_rectangle}
                  alt="rectangle"
                />
                <div className="head-text">{item.vidTitle}</div>
                <hr />
                <div className="p-text">{item.vidSubTitle}</div>
                <img
                  className="services-vid-dotted-bg"
                  src={images.dotted_bg_short}
                  alt="dotted-bg"
                />
              </div>
        
    </div>
  )
}

export default deletedSlider