import React from 'react'
import { skills,projects } from './index'

function About() {
  console.log(skills);

  return (
    <section className='max-container '>

      <label className='font-semibold text-[20px] mb-10 '>hello ,I'm <span className='bg-gradient-to-r from-purple-400 via-purple-500 to-purple-800 bg-clip-text text-transparent font-bold'>Menna</span></label>
      <p className='text-gray-500 mt-[20px] '>
        A passionate Frontend Developer specializing in React.js, dedicated to crafting interactive and dynamic web experiences. I have hands-on experience in authentication, APIs, and modern web deployment, utilizing tools like GitHub, Vercel, and Netlify.
        <br />I have a keen interest in prompt engineering and am working towards leveraging AI tools to enhance user experiences.
        <br />Currently pursuing a Computer Science degree (Faculty of Science, Class of 2025, Excellent grade), I am continuously expanding my skill set. My learning journey includes mastering Framer Motion for smooth animations and currently learning React Three Fiber to create immersive 3D web experiences.<br />

        With a TOT certification and a year of experience teaching programming to kids and teens, I excel in simplifying complex concepts and making tech accessible.

        Passionate about innovation, problem-solving, and pushing the boundaries of frontend development!
      </p>
      <div>
        <p className='font-bold mt-[20px] text-[20px] mb-10 '> My Skills</p>
        <div className='mt-16 flex flex-wrap gap-12 '>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>

   
      </div>
    </section>
  )
}

export default About