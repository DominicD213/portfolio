import React from 'react'
import Card from '../../components/card'
import './project.css'
import dataProj from './dataProj'

const Project = () => {
  return (
    <div id='projects'>
    <div className='container__project'>
        <div className='container__project-header'>
            <h1>Projects</h1>
        </div>
            <div className="about_cards">
                    {
                        dataProj.map(item => (
                           <Card key={item.id} className="about_card">
                                <h5 className='project__image-title'>{item.title}</h5>
                                <img className='project__image-container' src={item.img}></img>
                                <p className='project__small'>{item.desc}</p>
                                <div className='project_button'>
                                <a className='btn primary'href={item.link}>GitHub</a>
                                </div>
                            </Card>
                        ))
                    }
            </div>
    </div>
    </div>
  )
}

export default Project