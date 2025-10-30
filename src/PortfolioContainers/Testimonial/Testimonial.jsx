import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import parth from "../../assets/Testimonial/Parth.png";
import anbalagan from "../../assets/Testimonial/Anbalagan.png";
import priyansh from "../../assets/Testimonial/Priyansh.png";
import harsh from "../../assets/Testimonial/Harsh.png";
import mayank from "../../assets/Testimonial/Mayank.png";
import shape from "../../assets/Testimonial/shape-bg.png";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

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
      img: parth,
      name: "Parth Maheshwari",
      role: "SDE at Amazon",
      text: "Utkarsh is a highly dependable engineer. His attention to detail made our collaboration smooth and efficient.",
    },
    {
      img: priyansh,
      name: "Priyansh Pandey",
      role: "SDE at BharatPe",
      text: "Working with Utkarsh was a great experience. He’s quick to grasp requirements and delivers quality results.",
    },
    {
      img: mayank,
      name: "Mayank Jain",
      role: "SDE at GE Healthcare",
      text: "Utkarsh consistently exceeds expectations. His problem-solving skills are impressive and practical.",
    },
    {
      img: harsh,
      name: "Harsh Verma",
      role: "SDE at BNY",
      text: "He brings clarity to complex problems and always ensures timely delivery. Truly a great team player.",
    },
    {
      img: anbalagan,
      name: "Anbalagan Tamilarasan",
      role: "Director at FICO",
      text: "Utkarsh demonstrated strong ownership and innovation in every project. A valuable contributor to the team.",
    },
  ];

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div id={props.id}>
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
