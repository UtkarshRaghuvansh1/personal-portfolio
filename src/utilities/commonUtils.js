import Home from "../PortfolioContainers/Home/Home";
import AboutMe from "../PortfolioContainers/AboutMe/AboutMe";
import Resume from "../PortfolioContainers/Resume/Resume";
import Testimonial from "../PortfolioContainers/Testimonial/Testimonial";
import ContactMe from "../PortfolioContainers/ContactMe/ContactMe";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "Testimonial",
    component: Testimonial,
  },
  {
    screen_name: "Contact Me",
    component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
