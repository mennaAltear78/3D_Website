import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { projects } from './index';

function Projects() {
  return (
    <div className='max-container'>
      <div className='mb-10'>
        <p className='font-bold text-[25px] mb-5'>
          projects
        </p>
        <p className='text-gray-500'>
          As a passionate React developer, I love turning ideas into interactive and visually appealing web experiences. My projects reflect my journey in front-end development, showcasing my skills in React, Tailwind CSS, APIs, authentication, and more.<br />

          From building a modern portfolio to working on a feature-rich dashboard with chatbot integration, each project highlights my ability to create user-friendly and functional web applications. I’m always eager to learn, experiment, and push my limits!
        </p>
      </div>
      <VerticalTimeline>
        {
          projects.map((project) => (
            <VerticalTimelineElement
            key={project.name}
            // date={experience.date}
            // iconStyle={{ background: project.iconUrl }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img
                  src={project.iconUrl}
                  // alt={experience.company_name}
                  className='bg-black rounded w-[60%] h-[60%] object-contain'
                />
              </div>
            }
            contentStyle={{
              borderBottom: "2px",
              borderStyle: "solid",
              backgroundColor:'white',
              boxShadow: "none",
            }}
          >
              <div>
                <h3>
                  {project.description}
                </h3>
              </div>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
    </div>

  )
}

export default Projects