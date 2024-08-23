import React from 'react'
import { SiReact } from "react-icons/si";
import './Experience.css'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div className="container-fluid work-experience">
        <div className="work-exp">
          <h1 className="col-12 mt-3 mb-1 text-center py-4">
            Work Experience
          </h1>
          {/* <hr /> */}
          <VerticalTimeline lineColor="#fff" >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#161616", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #161616",
              }}
              date="Aug 2024 - present"
              iconStyle={{ background: "#161616", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">Inspire Nepal</h3>
              <h6 className="vertical-timeline-element-subtitle">
                Nakhipot, Laltitpur
              </h6>
              <p>Software Development, Communication</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#161616", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #161616",
              }}
              date="Feb 2022 - Mar 2023"
              iconStyle={{ background: "#161616", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Fonpay Private Ltd
              </h3>
              <h6 className="vertical-timeline-element-subtitle">
                M&S Tower, Pulchowk, Lalitpur
              </h6>
              <p>Implemented Microservice Architecture in Spring Boot</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#161616", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #161616",
              }}
              date="Nov 2021 - Feb 2022"
              iconStyle={{ background: "#161616", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">SoAni Tech Pvt Ltd</h3>
              <h6 className="vertical-timeline-element-subtitle">
                Manbhawan, Lalitpur
              </h6>
              <p>Designed and developed a responsive website</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#161616", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #161616",
              }}
              date="Apr 2019 - July 2019"
              iconStyle={{ background: "#161616", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">Worldlink Communication Ltd</h3>
              <h6 className="vertical-timeline-element-subtitle">
                Panga, Kritipur
              </h6>
              <p>Configuration of routers and switches, Customer Support</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
  )
}

export default Experience
