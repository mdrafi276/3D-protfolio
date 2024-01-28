import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  
};

const Experience = () => {
  return (
    <>
      <h1 id="skill" className="md:text-4xl font-bold  text-center h-one text-xl"> Technologies that I know </h1>
    </>
  );
};

export default SectionWrapper(Experience, "work");
// hi/ 