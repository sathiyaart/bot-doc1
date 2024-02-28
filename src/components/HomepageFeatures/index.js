import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Button1 from '../buttons/buttons';


const FeatureList = [
  {
    title: 'Bot Pipeline Release Notes',
   
    Svg: require('@site/static/img/undraw_speed.svg').default,
    

    
    description: (
      <> 
   
        we're excited to present a comprehensive 
        overview of the enhancements, optimizations, 
        and new features to elevate your creative workflows.

      
       
        <div>
  
  <a class="button button--danger" href="#url">Release Notes versions 001</a>
  
  

</div>


        
      </>
      
    ),
 
  },
  {
    title: 'Bot Production Team Doc',
    Svg: require('@site/static/img/undraw_project.svg').default,
    description: (
      <>
       
Welcome to the world of the VFX Production Team, where you can find
 all Department Production Team leadership hierarchy,Communication & Protocols

 <a class="button button--primary" href="#url">Bot Production Team info</a>
      </>
    ),
  },

  {
    title: 'Bot Technical Tools Doc',
    Svg: require('@site/static/img/undraw_programming.svg').default,
    description: (
      <>
        Have a great day!  each tool plays a pivotal role in shaping the final product.
        you can find Here all VFX Technical Tools (software) documentation
        <a class="button button--primary" href="#url">VFX Softwares Documentation</a>
      </>
    ),
  },
  {
    title: 'Bot Creative Tools Doc',
   
    Svg: require('@site/static/img/undraw_circles.svg').default,
    description: (
      
      <>
        Creativity stands as the lifeblood of VFX, serving as the cornerstone upon which extraordinary visions are brought to life. Here, you can find the Creative Elements documents.
        <a class="button button--primary" href="#url">Creative Elements Documentation</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
    
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title} </Heading>
       
       
       
         
        <p>{description}</p>        
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
