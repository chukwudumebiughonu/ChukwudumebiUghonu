import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/dcar.png'
import IMG2 from '../../assets/precisionmed.png'
import IMG3 from '../../assets/port1.png'
import IMG4 from '../../assets/pr4.png'
import IMG5 from '../../assets/pr5.jpg'
// import IMG6 from '../../assets/pr6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Building a car renting app with Typescript and Tailwind',
        github: 'https://github.com/chukwudumebiughonu/my-app',
        demo: 'http://dumebiscar.vercel.app/'
},
{
        id: 2,
        image: IMG2,
        title: 'Building a blog App with NextJS and GraphQL, GraphQLCMS',
        github: 'https://github.com/chukwudumebiughonu/Onprecisionmedicine',
        demo: 'http://onprecisionmedicine.vercel.app/'
},
{
    id: 3,
    image: IMG3,
    title: 'Building a Portfolio website with React and CSS3',
    github: 'https://github.com/chukwudumebiughonu/ChukwudumebiUghonu',
    demo:'http://chukwudumebi-ughonu.vercel.app/'
},
{
    id: 4,
    image: IMG4,
    title: 'Building a Portfolio website with React and SCSS',
    github: 'https://github.com/chukwudumebiughonu/portfolio',
    demo: 'https://portfolio-phi-five-18.vercel.app/'
}
// {
    // id: 5,
    // image: IMG5,
    // title: 'Charts templates & infographics in Figma',
    // github: 'https://github.com',
    // demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
// }
// {
//     id: 6,
//     image: IMG6,
//     title: 'Charts templates & infographics in Figma',
//     github: 'htpps://github.com',
//     demo: 'https://dribbble.com/short/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
// }
]
const Portfolio = () => {
    return(
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                           <article key={id} className='portfolio__item'>
                           <div className='portfolio__item-image'>
                             <img src={image} alt='{title}' />
                           </div>
                           <h3>{title}</h3>
                           <div className='portfolio__item-cta'>
                             < a href={github} className='btn' target='_blank'>Github</a>
                             < a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                           </div>
                          </article>
                        )
                    })
                }
            </div> 
        </section>
    )
}

export default Portfolio;