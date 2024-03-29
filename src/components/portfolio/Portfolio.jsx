import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/crptchain.png'
import IMG2 from '../../assets/evo.png'
import IMG3 from '../../assets/BudgetPal.png'
import IMG4 from '../../assets/Pig_Game.png'
import IMG5 from '../../assets/dcar.png'
import IMG6 from '../../assets/precisionmed.png'
import IMG7 from '../../assets/port1.png'
import IMG8 from '../../assets/pr4.png'
import IMG9 from '../../assets/Pandas.png'
import IMG10 from '../../assets/Numpy.png'
import IMG11 from '../../assets/Matplotlib.png'
import IMG12 from '../../assets/Sklearn.png'
import IMG13 from '../../assets/MyFirstProject.png'
import IMG14 from '../../assets/Second_project.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Building a Web3.0 website with React and Smart_contract with solidity',
        github: 'https://github.com/chukwudumebiughonu/CryptChain',
        demo: 'https://crypt-chain.vercel.app/'
    },
       {
        id: 2,
        image: IMG2,
        title: 'Building a fitness website with TypeScript, React, TailwindCSS and Vite',
        github: 'https://github.com/chukwudumebiughonu/Evolve/',
        demo: 'https://evolve-sage.vercel.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Building a budget calculator with JavaScript, HTML and CS',
        github: 'https://github.com/chukwudumebiughonu/BudgetPal',
        demo: 'https://budget-pal.vercel.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Building a fun Pig Game to demonstrate DOM manipulation and events',
        github: 'https://github.com/chukwudumebiughonu/Fun_Pig_Game',
        demo: 'https://fun-pig-game.vercel.app/'
},
    {
        id: 5,
        image: IMG5,
        title: 'Building a car renting app with Typescript and Tailwind',
        github: 'https://github.com/chukwudumebiughonu/my-app',
        demo: 'http://dumebiscar.vercel.app/'
},
{
        id: 6,
        image: IMG6,
        title: 'Building a blog App with NextJS and GraphQL, GraphQLCMS',
        github: 'https://github.com/chukwudumebiughonu/Onprecisionmedicine',
        demo: 'http://onprecisionmedicine.vercel.app/'
},
{
    id: 7,
    image: IMG7,
    title: 'Building a Portfolio website with React and CSS3',
    github: 'https://github.com/chukwudumebiughonu/ChukwudumebiUghonu',
    demo:'http://chukwudumebi-ughonu.vercel.app/'
},
{
    id: 8,
    image: IMG8,
    title: 'Building a Portfolio website with React and SCSS',
    github: 'https://github.com/chukwudumebiughonu/portfolio',
    demo: 'https://portfolio-phi-five-18.vercel.app/'
},

// 
]
const data1= [
    {
        id2: 9,
        image1: IMG9,
        title1: 'Machine Learning project, Pandas',
        github1: 'https://github.com/chukwudumebiughonu/ML_Panda_Practice_Book',
        
    },
    
    {
        id2: 10,
        image1: IMG10,
        title1: 'Machine Learning project, Numpy',
        github1: 'https://github.com/chukwudumebiughonu/ML_Numpy_Practice_Notebook',
        
    },

    {
        id2: 11,
        image1: IMG11,
        title1: 'Machine Learning project, Matplotlib and Seaborn',
        github1: 'https://github.com/chukwudumebiughonu/ML_Matplotlib_Seaborn_Visualization'
    },
    {
        id2: 12,
        image1: IMG12,
        title1: 'Machine Learning project Sci-kit Learn',
        github1: 'https://github.com/chukwudumebiughonu/ML_Sci-kitLearn_Creating_Models',
            
    },
        {
            id2: 13,
            image1: IMG13,
            title1: 'Machine Learning project, my first ML Project',
            github1: 'https://github.com/chukwudumebiughonu/Building_My_First_ML_Project',
            
        },
        {
            id2: 14,
            image1: IMG14,
            title1: 'Machine Learning project, my second project',
            github1: 'https://github.com/chukwudumebiughonu/Building_My_Second_ML_Project',
            
        },
]
const Portfolio = () => {
    return(
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {
                    data.map(({id, image,  title,  github,  demo}) => {
                        return ( <div>
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
                          </div>
                        )
                    })}
                    {
                    data1.map(({id2, image1,  title1,  github1}) => {
                        return ( <div>
                          <article key={id2} className='portfolio__item'>
                           <div className='portfolio__item-image'>
                             <img src={image1} alt='{title1}' />
                           </div>
                           <h3>{title1}</h3>
                           <div className='portfolio__item-cta'>
                             < a href={github1} className='btn' target='_blank'>Github</a>
                           </div>
                          </article>
                          </div>
                        )
                    })
                }
            </div> 
        </section>
    )
}

export default Portfolio;