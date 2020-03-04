import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

import Intro from '../pages/Intro';
import About from '../pages/About';
import Assignments from '../pages/Assignments';
import Resume from '../pages/Resume';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';


import pic0 from '../images/wp.jpg';
import pic1 from '../images/wp5.png';
import pic2 from '../images/wp2.jpg';
import pic3 from '../images/wp5.png';
import pic4 from '../images/wp5.png';
import pic5 from '../images/wp3.jpg';




class WrapperParallax extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={6}>


        <ParallaxLayer offset={0} > 
        <img src={pic0} alt='Background Image one' style={{ width:'100%', height:'700px'}}/>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.8} style={{ pointerEvents: 'none' }}>
          <Intro />
        </ParallaxLayer>


        <ParallaxLayer offset={1} speed={0.2} style={{ marginTop:'0', marginBottom:'0'}} > 
        <img src={pic1} style={{ width:'100%', height:'800px' }}/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} style={{ pointerEvents: 'none' }}>
          <About />
        </ParallaxLayer>


        <ParallaxLayer offset={2} speed={0.2}  style={{ marginTop:'0', marginBottom:'0'}} >
        <img src={pic2} style={{ width:'100%', height:'800px' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} style={{ pointerEvents: 'none' }}>
          <Assignments />
        </ParallaxLayer>
        
        <ParallaxLayer offset={3} speed={0.2}  style={{ marginTop:'0'}} >
        <img src={pic3} style={{ width:'100%', height:'800px' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5} style={{ pointerEvents: 'none' }}>
          <Resume />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.2} style={{ marginTop:'0'}} >
        <img src={pic4} style={{ width:'100%', height:'800px' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5} style={{ pointerEvents: 'none' }}>
          <Projects />
        </ParallaxLayer>


        <ParallaxLayer offset={5} speed={0.2} style={{ marginTop:'0'}}>
        <img src={pic5} style={{ width:'100%', height:'800px' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.3} style={{ pointerEvents: 'none' }}>
          <Contact />
        </ParallaxLayer>
        
      </Parallax>
    )
  }
}

export default WrapperParallax;