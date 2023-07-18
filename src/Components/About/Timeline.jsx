import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          
           <VerticalTimelineElement
        date={"March 2023 - Present"}
        contentStyle={{
          boxShadow: `var(--shadow)`,
          backgroundColor: `var(--clr-bg)`,
          textAlign: "center",
          color: `var(--clr-fg-alt)`
        }}
        contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
        iconStyle={{
          backgroundColor: `var(--clr-bg)`,
          color: `var(--clr-primary)`
        }}
        icon={<WorkIcon />}
      >
        <h3
          className="vertical-timeline-element-title"
          data-aos="fade-right"
        >
          Software Developer
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          data-aos="fade-right"
        >
          Cognitive clouds
        </h4>
            <p data-aos="fade-right">
        Working on live projects on web with react and in mobile applications with React native
        </p>
      </VerticalTimelineElement>
          
          
        <VerticalTimelineElement
        date={"April 2022 - January 2023"}
        contentStyle={{
          boxShadow: `var(--shadow)`,
          backgroundColor: `var(--clr-bg)`,
          textAlign: "center",
          color: `var(--clr-fg-alt)`
        }}
        contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
        iconStyle={{
          backgroundColor: `var(--clr-bg)`,
          color: `var(--clr-primary)`
        }}
        icon={<WorkIcon />}
      >
        <h3
          className="vertical-timeline-element-title"
          data-aos="fade-right"
        >
          Software Developer/Instructional Associate
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          data-aos="fade-right"
        >
          Masai School
        </h4>
            <p data-aos="fade-right">
         Worked on live projects like building dashboards and implementing Functionalities. Experience in mentoring students in DSA and MERN.
        </p>
      </VerticalTimelineElement>
          
           <VerticalTimelineElement
        date={"February 2021 - March 2022"}
        contentStyle={{
          boxShadow: `var(--shadow)`,
          backgroundColor: `var(--clr-bg)`,
          textAlign: "center",
          color: `var(--clr-fg-alt)`
        }}
        contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
        iconStyle={{
          backgroundColor: `var(--clr-bg)`,
          color: `var(--clr-primary)`
        }}
        icon={<WorkIcon />}
      >
        <h3
          className="vertical-timeline-element-title"
          data-aos="fade-right"
        >
          Frontend Developer
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          data-aos="fade-right"
        >
          Tutort academy
        </h4>
            <p data-aos="fade-right">
         Developed front-end web pages with React. Implemented new features as per the requirement.
        </p>
      </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Sep 2017 - June 2020"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Maintenance Engineer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
           Ralson India Ltd
            </h4>
            <p data-aos="fade-right">
             Worked as a Maintenance Engineer
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"2012 - 2016"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              B.tech
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             Graphic Era Deemed University, Dehradun
            </h4>
          </VerticalTimelineElement>
         
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"March 2012"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Completed SSC
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             Kendriya Vidyalaya Ranikhet
            </h4>
            {/* <p data-aos="fade-right">Secured 63%</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
