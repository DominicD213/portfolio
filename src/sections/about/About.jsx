
import AboutImage from '../../assets/about.jpg'
import data from './data'
import Card from '../../components/card'
import './about.css'
import React from 'react'

const About = () => {
  return (
    <section id="about">
        <div className="container about_container">
            <div className="about_left">
                <div className="about_portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about_right">
                <h2>About Me</h2>
                <div className="about_cards">
                    {
                        data.map(item => (
                           <Card key={item.id} className="about_card">
                                <span className='about_card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>I am a student at Wake Technical Community College in Raleigh, North Carolina. I am currently pursuing a degree in computer science and am excited to start gaining practical experience in the field. Technology has always been a passion of mine, and I am eager to learn more about the industry through an internship. To get a head start on my career, I have been actively searching for internships where I can learn from experienced professionals and develop my skills. I have completed several courses in programming languages such as HTML , CSS , and JavaScript. Im also teaching myself many javascript libraries such as angular and react. In addition to my technical abilities, I am a strong communicator and am able to work well in a team environment. As I continue my studies at Wake Tech and look for internships, I am confident that I will be well-prepared to pursue a rewarding career in the tech industry. I am excited to explore the various opportunities available to me and am committed to finding an internship that aligns with my goals and passions.</p>
                {/*<a href={CV} download className='btn primary'>Download CV <HiDownload/></a>*/}
            </div>
        </div>
    </section>
  )
}

export default About