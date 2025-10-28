import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

import BulletLogo1 from "../../assets/Resume/education.svg";
import BulletLogo2 from "../../assets/Resume/work-history.svg";
import BulletLogo3 from "../../assets/Resume/programming-skills.svg";
import BulletLogo4 from "../../assets/Resume/projects.svg";
import BulletLogo5 from "../../assets/Resume/interests.svg";
// Add more logos as needed

const logos = {
  "education.svg": BulletLogo1,
  "work-history.svg": BulletLogo2,
  "programming-skills.svg": BulletLogo3,
  "projects.svg": BulletLogo4,
  "interests.svg": BulletLogo5,
};

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 90 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Angular", ratingPercentage: 70 },
    { skill: "Express JS", ratingPercentage: 75 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "C/C++", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 70 },
    { skill: "Cypress", ratingPercentage: 80 },
    { skill: "Docker", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "E-commerce Platform ",
      description:
        "Full-stack e-commerce platform with SEO-friendly product pages using static, dynamic, and ISR rendering, secure authentication, and real-time Stripe payments.",
      subHeading:
        "Technologies Used: Next.js, React, PostgreSQL, Prisma ORM, Auth.js, Stripe",
    },
    {
      title: "News & Blog Application ",
      description:
        "AI-powered news blog with extractive summarization, custom API caching, offline support, optimized pagination, and an interactive UI with widgets.",
      subHeading: "Technologies Used: React, JavaScript, REST APIs",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"KIIT University, Bhubaneswar"}
        subHeading={"B.Tech in Information Technology (CGPA: 9.20)"}
        fromDate={"2020"}
        toDate={"2024"}
      />

      <ResumeHeading
        heading={"St. Joseph's Convent School"}
        subHeading={"Higher Secondary (Science) (82.5%)"}
        fromDate={"2017"}
        toDate={"2019"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"FICO"}
          subHeading={"Consultant 1 (Engineer)"}
          fromDate={"Jun(2023)"}
          toDate={"Sept(2025)"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked as a Full-Stack Developer and Frontend developer, building
            interactive web apps and high-performance optimization tools.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Built a Generative AI chatbot with FastAPI and JavaScript and
            showcased it at FICO World.
          </span>
          <br />

          <span className="resume-description-text">
            - Optimized Cypress tests with pre-canned scenarios, reducing
            Jenkins execution time by 40% and improving robustness.
          </span>
          <br />
          <span className="resume-description-text">
            - Led frontend development for the DPO app, improving performance
            for 1M+ rows by 90% through optimized rendering and filters.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          // fromDate={projectsDetails.duration.fromDate}
          // toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sports"
        description="I play football (previously at state level), currently play cricket for my club, and occasionally enjoy badminton."
      />
      <ResumeHeading
        heading="Music"
        description="I enjoy listening to classic and old songs — a perfect way to relax and recharge."
      />
      <ResumeHeading
        heading="Traveling & Exploring"
        description="I enjoy trekking and traveling to new places, exploring different cultures and landscapes."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img className="bullet-logo" src={logos[bullet.logoSrc]} alt="B" />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
