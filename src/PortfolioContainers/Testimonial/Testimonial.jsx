import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import lady from "../../assets/Testimonial/lady.png";
import mike from "../../assets/Testimonial/mike.png";
import man from "../../assets/Testimonial/man.png";
import shape from "../../assets/Testimonial/shape-bg.png";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const testimonials = [
    {
      img: lady,
      name: "Daisy Dominic",
      role: "CEO InansGlobal",
      text: "I patronized Ehizeex and when He delivered, I honestly fell in love with the project. Very honest and punctual.",
    },
    {
      img: mike,
      name: "Mikel",
      role: "CEO MikeTech",
      text: "It was nice hiring this guy for my e-commerce project. He delivered even more than I imagined!",
    },
    {
      img: man,
      name: "John Smith",
      role: "Banker",
      text: "He implemented every functionality I requested for. Thank you!",
    },
    {
      img: man,
      name: "John Smith",
      role: "Banker",
      text: "He implemented every functionality I requested for. Thank you!",
    },
  ];

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      <section className="testimonial-section">
        <div className="container">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    {t.text}
                    <i className="fa fa-quote-right" />
                  </p>
                </div>
                <div className="client-info">
                  <img src={t.img} alt={t.name} />
                  <h5>{t.name}</h5>
                  <p>{t.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="footer shape" />
      </div>
    </div>
  );
}
