import React from 'react'
import "../styles/skills.css"


const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>
        <div className='skills-left'>
          <h2 className='skills-heading' data-aos="zoom-in-up">Take a look on my Skills</h2>
          <p className='skills-text' data-aos="zoom-in-up">I offer end-to-end web development services, which include HTML, CSS, JavaScript, and Wordpress for creating stunningly beautiful yet highly responsive websites. My expertise in PHP and Laravel will help me construct robust, scalable, and secure backend systems that fuel your web applications. Be it a simple website or complex web application, I strive to provide a quality, efficient, and customized solution for all your requirements.</p>
        </div>
        <div className='skills-right'>
          <div className='skills-icons-grid'>
            <div className='skills-space'>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">Next.Js</h2>
              <h2 data-aos="zoom-in-up">PHP</h2>
            </div>
            <div className='skills-space'>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Javascript</h2>
              <h2 data-aos="zoom-in-up">Laravel</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills
