import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs, Facss } from "react-icons/fa";
import task from "./task.png"
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  Sicss,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiNextdotjs
 
} from "react-icons/si";
import { DiCss3, DiMongodb, } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                  alt="Pulseplus"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>PulsePlus Clone</h2>
              <p>
                PulsePlus is an E-commerce web application for online Buying Medicines and Consult to Doctor and Book a near Testlab.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <SiJavascript />
                <SiTailwindcss />
              </div>
              <div>
                <a
                  href="https://pulseplus-clone.netlify.app/landing_page.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/gautamverma095/PulsePulsclone.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/MP0hDs1/9-E76-F2-BB-4-E59-4-B09-9-D4-F-3-E7-A55-A6-C5-E3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Croma Clone</h2>
              <p>
                A Clone of web application for home appliances and Electronics with a promise of a ‘#Brighter Every Day’ to its customers, Croma offers a world-class ambience and seamless ‘omni-channel’ shopping experience to enjoy the best of both, the online shopping & the offline worlds.
              </p>
              <div>
                <SiExpress />
                <DiCss3 />
                <IoLogoJavascript />
                <SiHtml5 />
                <SiJavascript />
                <FaNodeJs />
                <DiMongodb />
              </div>
              <div>
                <a
                  href="https://croma-clone-github-io.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/gautamverma095/cromaBackendClone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/bvZ6hRq/Screenshot-2022-12-24-at-5-41-22-PM.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Hues With Vaishali</h2>
              <p>
                Designed and developed E-commerce website for my sister’s art work. Functionality includes login, adding items to cart,currently user can only see all the products and contact us from this website and we will get back to them
              </p>
              <div>
                <FaReact />
                <DiCss3 />
                <IoLogoJavascript />
                <SiHtml5 />
                <SiJavascript />
                <FaNodeJs />
                <DiMongodb />
              
              </div>
              <div>
                <a
                  href="https://hues-with-vaishali.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/gautamverma095/e-commerce-Website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

         <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={task}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Daily Task App</h2>
              <p>
               It is a daily task app with a limit of 5 tasks per day, user can add 5 task in a day, on next day he can also add 5 task. In this I have used nextjs, it is a full stack app with frontend and backend deployed
              </p>
              <div>
              <SiNextdotjs/>
                <DiCss3 />
                <SiHtml5 />
                <SiJavascript />
                <FaNodeJs />
                <DiMongodb />
                <SiExpress/>
              
              </div>
              <div>
                <a
                  href="https://frontend-delta-eight-14.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/gautamverma095/DailyTaskApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};
