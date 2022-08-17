import javascript from '../images/javascript.png'
import css from '../images/css.png'
import auth0 from '../images/auth0.png'
import express from '../images/express.png'
import git from '../images/git.png'
import html from '../images/html.png'
import mongodb from '../images/mongodb.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import sequelize from '../images/sequelize.png'
import postgres from '../images/postgres.png'
import tailwind from '../images/tailwind.png'
import nodejs from '../images/nodejs.png'

const skills = [{
    img: javascript,
    alt: "javascript",
},
{
    img: html,
    alt: "html"
},
{
    img: react,
    alt: "react"
},
{
    img: postgres,
    alt: "postgres"
},
{
    img: css,
    alt: "css"
},
{
    img: auth0,
    alt: "auth0"
},
{
    img: express,
    alt: "express"
},
{
    img: git,
    alt: "git"
},
{
    img: mongodb,
    alt: "mongodb"
},
{
    img: redux,
    alt: "redux"
},
{
    img: sequelize,
    alt: "sequelize"
},
{
    img: tailwind,
    alt: "tailwind"
},
{
    img: nodejs,
    alt: "nodejs"
},
]

function Skills() {
    return (
        <div>

        <div className="w-full  mt-5 flex shadow-lg shadow-cyan-200 mb-2 justify-center ">
            <h1 className="py-4 mb-4  mt-32 md:mt-6 text-3xl font-normal text-center text-gray-800">Skills & Proyects</h1>
            </div>
                <section id='skills' className="p-4 flex gap-4 w-full snap-x overflow-x-auto">
                {skills.map(e => {
                return(  <div key={e.alt} className="snap-start shrink-0 rounded w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex justify-center  overflow-hidden">
                <img className='hover:-translate-y-1 transition-all duration-300 md:my-2' src={e.img} alt={e.alt}/>
                </div>
                )})
                }
                </section>
        </div>
    );
  }
  
  export default Skills;